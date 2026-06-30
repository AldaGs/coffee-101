import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getAllCardIds, getCardContent } from './cardRegistry';
import { getDueIds, reviewCard, isNew } from './sr';
import { addXP, touchStreak, checkBadges, awardBadge, XP, getLevel } from './game';

const COURSE_LABELS = {
  brewing: 'Brewing', espresso: 'Espresso', roasting: 'Roasting',
  history: 'History', agronomy: 'Agronomy', sensory: 'Sensory', barista: 'Barista',
};

const RATINGS = [
  { label: 'Again', quality: 1, cls: 'rating-again', hint: 'Completely wrong' },
  { label: 'Hard',  quality: 3, cls: 'rating-hard',  hint: 'Correct but difficult' },
  { label: 'Good',  quality: 4, cls: 'rating-good',  hint: 'Correct with hesitation' },
  { label: 'Easy',  quality: 5, cls: 'rating-easy',  hint: 'Perfect recall' },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Review() {
  const lang = localStorage.getItem('coffee101-lang') || 'en';
  const [queue, setQueue] = useState(null); // null = loading
  const [idx, setIdx]     = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [done, setDone]   = useState(false);
  const [newBadges, setNewBadges] = useState([]);
  const [xpPop, setXpPop] = useState(null);

  useEffect(() => {
    const all = getAllCardIds();
    let due = getDueIds(all);
    if (due.length === 0) {
      // Fall back to new cards
      due = all.filter(id => isNew(id)).slice(0, 15);
    }
    setQueue(shuffle(due).slice(0, 30)); // cap session at 30
    touchStreak();
  }, []);

  const current = queue ? getCardContent(queue[idx], lang) : null;

  const handleRating = useCallback((quality) => {
    if (!queue) return;
    const id = queue[idx];
    reviewCard(id, quality);

    let earned = XP.REVIEW_CARD;
    if (quality === 4) earned += XP.REVIEW_GOOD;
    if (quality === 5) earned += XP.REVIEW_EASY;
    addXP(earned);
    setSessionXP(prev => prev + earned);

    // First review badge
    if (idx === 0) awardBadge('first_review');
    const badges = checkBadges();
    if (badges.length) setNewBadges(prev => [...prev, ...badges]);

    // XP pop
    setXpPop(`+${earned} XP`);
    setTimeout(() => setXpPop(null), 900);

    // Advance
    if (idx + 1 >= queue.length) {
      setDone(true);
    } else {
      setIdx(idx + 1);
      setFlipped(false);
    }
  }, [queue, idx]);

  if (queue === null) {
    return (
      <div className="review-wrap">
        <div className="review-loading">Loading cards…</div>
      </div>
    );
  }

  if (done) {
    const level = getLevel();
    return (
      <div className="review-wrap">
        <div className="review-summary">
          <div className="review-summary-icon">🎉</div>
          <h2>Session complete!</h2>
          <p className="review-summary-xp">+{sessionXP} XP earned</p>
          <div className="review-level-bar-wrap">
            <span className="review-level-label">Level {level.level}</span>
            <div className="review-level-bar">
              <div className="review-level-fill" style={{ width: `${level.progress * 100}%` }} />
            </div>
            {level.nextXP && (
              <span className="review-level-label">{level.xp} / {level.nextXP}</span>
            )}
          </div>
          {newBadges.length > 0 && (
            <div className="review-badges">
              <p className="review-badges-label">Badges unlocked</p>
              {newBadges.map(b => (
                <div key={b.id} className="review-badge-item">
                  <span>{b.icon}</span> <strong>{b.label}</strong> — {b.desc}
                </div>
              ))}
            </div>
          )}
          <div className="review-summary-actions">
            <Link to="/" className="review-btn-home">← Back to Hub</Link>
            <button className="review-btn-again" onClick={() => {
              const all = getAllCardIds();
              const due = getDueIds(all);
              setQueue(shuffle(due.length ? due : all.filter(id => isNew(id))).slice(0, 30));
              setIdx(0); setFlipped(false); setDone(false); setSessionXP(0); setNewBadges([]);
            }}>Review more</button>
          </div>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="review-wrap">
        <div className="review-empty">
          <p>No cards available yet.</p>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
            Open topics with a Knowledge Check to register cards.
          </p>
          <Link to="/" className="review-btn-home" style={{ marginTop: '16px', display: 'inline-block' }}>← Back to Hub</Link>
        </div>
      </div>
    );
  }

  const progress = ((idx) / queue.length) * 100;

  return (
    <div className="review-wrap">
      {/* Header */}
      <div className="review-header">
        <Link to="/" className="review-back">← Hub</Link>
        <span className="review-progress-text">{idx + 1} / {queue.length}</span>
      </div>

      {/* Progress bar */}
      <div className="review-progress-bar">
        <div className="review-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Course badge */}
      <div className="review-course-badge">
        {COURSE_LABELS[current.courseId]} · {current.modTitle}
      </div>

      {/* Card */}
      <div
        className={`review-card ${flipped ? 'is-flipped' : ''}`}
        onClick={() => !flipped && setFlipped(true)}
      >
        <div className="review-card-inner">
          <div className="review-card-front">
            <div className="review-card-label">Question</div>
            <div className="review-card-text">
              <ReactMarkdown>{current.q}</ReactMarkdown>
            </div>
            <div className="review-card-hint">Tap to reveal answer</div>
          </div>
          <div className="review-card-back">
            <div className="review-card-label">Answer</div>
            <div className="review-card-text">
              <ReactMarkdown>{current.a}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>

      {/* XP pop */}
      {xpPop && <div className="review-xp-pop">{xpPop}</div>}

      {/* Rating buttons — only after flip */}
      {flipped && (
        <div className="review-ratings">
          <p className="review-ratings-label">How well did you recall it?</p>
          <div className="review-ratings-row">
            {RATINGS.map(r => (
              <button
                key={r.quality}
                className={`review-rating-btn ${r.cls}`}
                onClick={() => handleRating(r.quality)}
                title={r.hint}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
