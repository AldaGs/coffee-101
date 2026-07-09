import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getAllCardIds, getCompletedCardIds, getCardContent } from './cardRegistry';
import { getDueIds, reviewCard, isNew } from './sr';
import { addXP, touchStreak, checkBadges, awardBadge, XP, getLevel } from './game';
import { generateMCQ } from './mcqGenerator';
import { CelebrateIcon, BadgeIcon } from './icons';

const COURSE_LABELS = {
  brewing: 'Brewing', espresso: 'Espresso', roasting: 'Roasting',
  history: 'History', agronomy: 'Agronomy', sensory: 'Sensory', barista: 'Barista',
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Review() {
  const lang = localStorage.getItem('coffee101-lang') || 'en';
  const [queue, setQueue] = useState(null); // null = loading
  const [idx, setIdx]     = useState(0);
  const [selected, setSelected] = useState(null);
  const [sessionXP, setSessionXP] = useState(0);
  const [done, setDone]   = useState(false);
  const [newBadges, setNewBadges] = useState([]);
  const [xpPop, setXpPop] = useState(null);

  useEffect(() => {
    const all = getCompletedCardIds();
    let due = getDueIds(all);
    if (due.length === 0) {
      // Fall back to new cards
      due = all.filter(id => isNew(id)).slice(0, 15);
    }
    setQueue(shuffle(due).slice(0, 30)); // cap session at 30
    touchStreak();
  }, []);

  const current = queue ? getCardContent(queue[idx], lang) : null;

  const mcq = useMemo(() => {
    if (!current || !queue) return null;
    return generateMCQ(queue[idx], current.q, current.a, current.courseId, lang);
  }, [queue, idx, current, lang]);

  const handleSelect = useCallback((option) => {
    if (!queue || !mcq || selected !== null) return;

    setSelected(option);
    const id = queue[idx];
    const isCorrect = option === mcq.correctAnswer;
    const quality = isCorrect ? 5 : 1;
    const earned  = isCorrect ? XP.REVIEW_CORRECT : XP.REVIEW_WRONG;

    reviewCard(id, quality);
    addXP(earned);
    setSessionXP(prev => prev + earned);

    // First review badge
    if (idx === 0) awardBadge('first_review');
    const badges = checkBadges();
    if (badges.length) setNewBadges(prev => [...prev, ...badges]);

    // XP pop
    setXpPop(`+${earned} XP`);
    setTimeout(() => setXpPop(null), 1000);

    // Auto-advance after a delay so user can see correct/wrong
    setTimeout(() => {
      if (idx + 1 >= queue.length) {
        setDone(true);
      } else {
        setIdx(prev => prev + 1);
        setSelected(null);
      }
    }, 1400);
  }, [queue, idx, mcq, selected]);

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
          <div className="review-summary-icon"><CelebrateIcon size={44} color="#D4A72C" /></div>
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
                  <BadgeIcon id={b.id} size={18} /> <strong>{b.label}</strong> — {b.desc}
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
              setIdx(0); setSelected(null); setDone(false); setSessionXP(0); setNewBadges([]);
            }}>Review more</button>
          </div>
        </div>
      </div>
    );
  }

  if (!current || !mcq) {
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

      {/* Quiz Card */}
      <div className="review-quiz-card">
        <div className="review-quiz-label">Question</div>
        <div className="review-quiz-question">
          <ReactMarkdown>{current.q}</ReactMarkdown>
        </div>

        <div className="mcq-options review-mcq-options">
          {mcq.options.map((opt, i) => {
            let cls = 'mcq-option';
            if (selected !== null) {
              if (opt === mcq.correctAnswer) cls += ' correct';
              if (opt === selected && opt !== mcq.correctAnswer) cls += ' wrong';
              if (opt !== selected && opt !== mcq.correctAnswer) cls += ' dimmed';
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleSelect(opt)}
                disabled={selected !== null}
              >
                <span className="mcq-letter">{LETTERS[i]}</span>
                <span className="mcq-text">{opt}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="review-mcq-result">
            <span className={`mcq-result-icon ${selected === mcq.correctAnswer ? 'correct' : 'wrong'}`}>
              {selected === mcq.correctAnswer ? '✓' : '✗'}
            </span>
            <span className={selected === mcq.correctAnswer ? 'mcq-correct-label' : 'mcq-wrong-label'}>
              {selected === mcq.correctAnswer ? 'Correct!' : 'Not quite'}
            </span>
          </div>
        )}
      </div>

      {/* XP pop */}
      {xpPop && <div className="review-xp-pop">{xpPop}</div>}
    </div>
  );
}
