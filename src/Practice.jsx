import { useMemo } from 'react';
import { useNavigate, useOutletContext, Link } from 'react-router-dom';
import { getCompletedCardIds } from './cardRegistry';
import { getDueIds } from './sr';
import { getDailyProgress } from './game';
import { getCrackedModules } from './progress';
import { SubjectIcon, RefreshIcon, CardsIcon } from './icons';

function DailyRing({ progress, xp, goal }) {
  const deg = Math.round(progress * 360);
  return (
    <div className="daily-ring" style={{ background: `conic-gradient(var(--accent) ${deg}deg, var(--line) 0)` }}>
      <div className="daily-ring-inner">
        <span className="daily-ring-xp">{xp}</span>
        <span className="daily-ring-goal">/ {goal}</span>
      </div>
    </div>
  );
}

export default function Practice() {
  const { lang } = useOutletContext();
  const navigate = useNavigate();
  const es = lang === 'es';

  const { daily, due, cracked } = useMemo(() => {
    const completed = getCompletedCardIds();
    return {
      daily: getDailyProgress(),
      due: getDueIds(completed).length,
      cracked: getCrackedModules(lang),
    };
  }, [lang]);

  return (
    <div className="practice-page">
      <h1 className="practice-title">{es ? 'Práctica' : 'Practice'}</h1>

      <div className="practice-card daily-card">
        <DailyRing progress={daily.progress} xp={daily.xp} goal={daily.goal} />
        <div className="daily-copy">
          <div className="daily-head">{es ? 'Meta diaria' : 'Daily goal'}</div>
          <div className="daily-sub">
            {daily.met
              ? (es ? '¡Meta alcanzada! Sigue tu racha.' : 'Goal met! Keep your streak alive.')
              : (es ? `${daily.xp} / ${daily.goal} XP hoy` : `${daily.xp} / ${daily.goal} XP today`)}
          </div>
        </div>
      </div>

      <div className="practice-card">
        <div className="practice-review-head">
          <div>
            <div className="practice-review-title">{es ? 'Repaso espaciado' : 'Spaced review'}</div>
            <div className="practice-review-sub">
              {due > 0
                ? (es ? 'Refuerza las tarjetas que estás por olvidar.' : "Reinforce the cards you're about to forget.")
                : (es ? 'Estás al día. Practica para adelantarte.' : "You're all caught up. Practice to get ahead.")}
            </div>
          </div>
          {due > 0 && <span className="practice-due-badge"><CardsIcon size={15} color="#fff" /> {due}</span>}
        </div>
        <button className="lesson-btn-primary" onClick={() => navigate('/review')}>
          {due > 0
            ? (es ? `Repasar · ${due} tarjetas` : `Review · ${due} cards`)
            : (es ? 'Practicar' : 'Practice')}
        </button>
      </div>

      {cracked.length > 0 && (
        <>
          <h2 className="practice-section">
            {es ? 'Habilidades por repasar' : 'Skills to refresh'}
          </h2>
          <div className="cracked-list">
            {cracked.map(m => (
              <Link key={m.courseId + m.modId} to={`/lesson/${m.courseId}/${m.modId}`} className="cracked-item">
                <span className="cracked-ic"><SubjectIcon id={m.subjectId} size={22} /></span>
                <span className="cracked-body">
                  <span className="cracked-mod">{m.modNum}</span>
                  <span className="cracked-title">{m.title}</span>
                </span>
                <span className="cracked-refresh"><RefreshIcon size={18} color="var(--flame, #E08A2B)" /></span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
