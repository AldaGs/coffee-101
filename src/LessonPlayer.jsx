import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { WikiLink } from './WikiCard';
import { getModules, subjectOfCourse } from './courseData';
import { generateMCQ } from './mcqGenerator';
import { reviewCard } from './sr';
import { addXP, XP, touchStreak, checkBadges, awardBadge, getLevel, bumpCrown, getCrown, MAX_CROWN } from './game';
import { CelebrateIcon, BadgeIcon, CrownIcon, CROWN_GOLD } from './icons';

const MD_COMPONENTS = { a: WikiLink };
const LETTERS = ['A', 'B', 'C', 'D'];

// Build the session: for each topic, a teach card followed by its MCQ cards.
function buildQueue(courseId, mod) {
  const q = [];
  (mod.topics || []).forEach((top, topicIdx) => {
    q.push({
      kind: 'teach', orig: true, topicIdx,
      title: top.t, blurb: top.b, content: top.content, points: top.points,
    });
    (top.flashcards || []).forEach((fc, cardIdx) => {
      q.push({
        kind: 'quiz', orig: true, topicIdx,
        cardId: `${courseId}:${mod.id}:${topicIdx}:${cardIdx}`,
        question: fc.q, answer: fc.a,
      });
    });
  });
  return q;
}

function markTopicDone(courseId, modId, topicIdx) {
  try { localStorage.setItem(`${courseId}-syllabus:${modId}-${topicIdx}-done`, '1'); } catch {}
}

export default function LessonPlayer() {
  const { courseId, modId } = useParams();
  const navigate = useNavigate();
  const lang = localStorage.getItem('coffee101-lang') || 'en';
  const es = lang === 'es';
  const subject = subjectOfCourse(courseId);

  const mod = useMemo(
    () => getModules(courseId, lang).find(m => m.id === modId),
    [courseId, modId, lang]
  );

  const [queue, setQueue] = useState(() => (mod ? buildQueue(courseId, mod) : []));
  const [pos, setPos] = useState(0);
  const [selected, setSelected] = useState(null);
  const [xpPop, setXpPop] = useState(null);
  const [sessionXP, setSessionXP] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [done, setDone] = useState(false);
  const [newBadges, setNewBadges] = useState([]);

  const requeued = useRef(new Set());     // cardIds already re-queued once
  // Remaining ORIGINAL cards per topic — when a topic hits 0, it's complete.
  const remaining = useRef(null);
  if (remaining.current === null && mod) {
    const r = {};
    (mod.topics || []).forEach((top, i) => { r[i] = 1 + (top.flashcards?.length || 0); });
    remaining.current = r;
  }

  useEffect(() => {
    if (subject) document.body.className = subject.theme || '';
    return () => { document.body.className = ''; };
  }, [subject]);

  useEffect(() => { touchStreak(); }, []);

  const current = queue[pos] || null;

  const mcq = useMemo(() => {
    if (!current || current.kind !== 'quiz') return null;
    return generateMCQ(current.cardId, current.question, current.answer, courseId, lang);
  }, [current, courseId, lang]);

  // Retire an original card from its topic's remaining count; complete the topic
  // (persist done) the moment its last original card is consumed.
  const retire = useCallback((card) => {
    if (!card?.orig || !remaining.current) return;
    const left = (remaining.current[card.topicIdx] ?? 0) - 1;
    remaining.current[card.topicIdx] = left;
    if (left <= 0) markTopicDone(courseId, modId, card.topicIdx);
  }, [courseId, modId]);

  const finish = useCallback(() => {
    // Belt-and-suspenders: ensure every topic is flagged complete.
    (mod?.topics || []).forEach((_, i) => markTopicDone(courseId, modId, i));
    bumpCrown(courseId, modId); // level up mastery for this module
    setDone(true);
  }, [mod, courseId, modId]);

  const advance = useCallback((leaving) => {
    retire(leaving);
    setSelected(null);
    setPos(prev => {
      if (prev + 1 >= queue.length) { finish(); return prev; }
      return prev + 1;
    });
  }, [queue.length, retire, finish]);

  const handleContinue = () => {
    if (!current) return;
    addXP(XP.READ_TOPIC);
    setSessionXP(x => x + XP.READ_TOPIC);
    advance(current);
  };

  const handleSelect = (option) => {
    if (!mcq || selected !== null) return;
    setSelected(option);

    const isCorrect = option === mcq.correctAnswer;
    const earned = isCorrect ? XP.REVIEW_CORRECT : XP.REVIEW_WRONG;
    reviewCard(current.cardId, isCorrect ? 5 : 1);
    addXP(earned);
    setSessionXP(x => x + earned);
    setAnswered(a => a + 1);
    if (isCorrect) setCorrect(c => c + 1);

    if (answered === 0) awardBadge('first_review');
    const badges = checkBadges();
    if (badges.length) setNewBadges(prev => [...prev, ...badges]);

    setXpPop(`+${earned} XP`);
    setTimeout(() => setXpPop(null), 1000);

    // Missed it? Slip the card back in once, near the end, for a second pass.
    if (!isCorrect && !requeued.current.has(current.cardId)) {
      requeued.current.add(current.cardId);
      setQueue(prev => [...prev, { ...current, orig: false }]);
    }

    setTimeout(() => advance(current), 1400);
  };

  if (!mod) {
    return (
      <div className="lesson-wrap">
        <Link to="/" className="back-link">← Back to Hub</Link>
        <p style={{ marginTop: 16 }}>{es ? 'Lección no encontrada.' : 'Lesson not found.'}</p>
      </div>
    );
  }

  // ── Results screen ──────────────────────────────────────
  if (done) {
    const level = getLevel();
    const acc = answered > 0 ? Math.round((correct / answered) * 100) : null;
    return (
      <div className="lesson-wrap">
        <div className="lesson-complete">
          <div className="lesson-complete-icon"><CelebrateIcon size={48} color="#D4A72C" /></div>
          <h2>{es ? '¡Lección completa!' : 'Lesson complete!'}</h2>
          <p className="lesson-complete-sub">{mod.mod} · {mod.title}</p>

          {(() => {
            const crown = getCrown(courseId, modId);
            return (
              <div className="lesson-crowns" title={es ? `Nivel de corona ${crown}` : `Crown level ${crown}`}>
                {Array.from({ length: MAX_CROWN }).map((_, i) => (
                  <CrownIcon key={i} size={22} color={i < crown ? CROWN_GOLD : 'var(--line)'} />
                ))}
                <span className="lesson-crowns-label">
                  {crown >= MAX_CROWN
                    ? (es ? 'Dominado' : 'Mastered')
                    : (es ? `Corona ${crown}/${MAX_CROWN}` : `Crown ${crown}/${MAX_CROWN}`)}
                </span>
              </div>
            );
          })()}

          <div className="lesson-result-stats">
            <div className="lesson-result-stat">
              <div className="lrs-value">+{sessionXP}</div>
              <div className="lrs-label">XP</div>
            </div>
            {acc !== null && (
              <div className="lesson-result-stat">
                <div className="lrs-value">{acc}%</div>
                <div className="lrs-label">{es ? 'Aciertos' : 'Accuracy'}</div>
              </div>
            )}
            <div className="lesson-result-stat">
              <div className="lrs-value">{correct}/{answered || 0}</div>
              <div className="lrs-label">{es ? 'Correctas' : 'Correct'}</div>
            </div>
          </div>

          <div className="lesson-level-bar-wrap">
            <span className="lesson-level-label">{es ? 'Nivel' : 'Level'} {level.level}</span>
            <div className="lesson-level-bar">
              <div className="lesson-level-fill" style={{ width: `${level.progress * 100}%` }} />
            </div>
            {level.nextXP && <span className="lesson-level-label">{level.xp} / {level.nextXP}</span>}
          </div>

          {newBadges.length > 0 && (
            <div className="lesson-badges">
              <p className="lesson-badges-label">{es ? 'Insignias desbloqueadas' : 'Badges unlocked'}</p>
              {newBadges.map(b => (
                <div key={b.id} className="lesson-badge-item">
                  <BadgeIcon id={b.id} size={18} /> <strong>{b.label}</strong> — {b.desc}
                </div>
              ))}
            </div>
          )}

          <div className="lesson-complete-actions">
            <button
              className="lesson-btn-primary"
              onClick={() => navigate(subject ? `/path/${subject.id}` : '/')}
            >
              {es ? 'Continuar' : 'Continue'}
            </button>
            <Link to={`/course/${courseId}#${modId}`} className="lesson-btn-secondary">
              {es ? 'Leer la lección completa' : 'Read the full lesson'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const progress = queue.length > 0 ? (pos / queue.length) * 100 : 0;

  return (
    <div className="lesson-wrap">
      <div className="lesson-topbar">
        <button
          className="lesson-close"
          aria-label={es ? 'Salir' : 'Exit'}
          onClick={() => navigate(subject ? `/path/${subject.id}` : '/')}
        >✕</button>
        <div className="lesson-progress-bar">
          <div className="lesson-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="lesson-counter">{Math.min(pos + 1, queue.length)}/{queue.length}</span>
      </div>

      {current?.kind === 'teach' && (
        <div className="lesson-card lesson-teach">
          <div className="lesson-kicker">{mod.mod} · {es ? 'Aprende' : 'Learn'}</div>
          <h2 className="lesson-teach-title">{current.title}</h2>
          {current.content ? (
            <div className="lesson-teach-body">
              <ReactMarkdown components={MD_COMPONENTS}>{current.content}</ReactMarkdown>
            </div>
          ) : current.points?.length ? (
            <ul className="lesson-teach-points">
              {current.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          ) : (
            <p className="lesson-teach-body">{current.blurb}</p>
          )}
          <button className="lesson-btn-primary lesson-continue" onClick={handleContinue}>
            {es ? 'Continuar' : 'Continue'}
          </button>
        </div>
      )}

      {current?.kind === 'quiz' && mcq && (
        <div className="lesson-card lesson-quiz">
          <div className="lesson-kicker">{es ? 'Comprobación' : 'Knowledge check'}</div>
          <div className="lesson-question">
            <ReactMarkdown>{current.question}</ReactMarkdown>
          </div>
          <div className="mcq-options">
            {mcq.options.map((opt, i) => {
              let cls = 'mcq-option';
              if (selected !== null) {
                if (opt === mcq.correctAnswer) cls += ' correct';
                if (opt === selected && opt !== mcq.correctAnswer) cls += ' wrong';
                if (opt !== selected && opt !== mcq.correctAnswer) cls += ' dimmed';
              }
              return (
                <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={selected !== null}>
                  <span className="mcq-letter">{LETTERS[i]}</span>
                  <span className="mcq-text">{opt}</span>
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className="lesson-feedback">
              <span className={selected === mcq.correctAnswer ? 'mcq-correct-label' : 'mcq-wrong-label'}>
                {selected === mcq.correctAnswer
                  ? (es ? '¡Correcto! ✓' : 'Correct! ✓')
                  : (es ? 'Casi — repasa la respuesta correcta' : 'Not quite — see the correct answer')}
              </span>
            </div>
          )}
          {xpPop && <div className="lesson-xp-pop">{xpPop}</div>}
        </div>
      )}
    </div>
  );
}
