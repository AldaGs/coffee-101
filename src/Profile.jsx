import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getLevel, getStreak, getEarnedBadges, BADGE_DEFS } from './game';
import { getSubjectSummary } from './progress';
import { getAllCardIds } from './cardRegistry';
import { SUBJECTS } from './courseData';
import { BadgeIcon } from './icons';

export default function Profile() {
  const { lang } = useOutletContext();
  const es = lang === 'es';

  const data = useMemo(() => {
    const level = getLevel();
    const streak = getStreak();
    const earned = new Set(getEarnedBadges());
    let done = 0, total = 0;
    SUBJECTS.forEach(s => {
      const sum = getSubjectSummary(s.id, lang);
      done += sum.done; total += sum.total;
    });
    return { level, streak, earned, done, total, cards: getAllCardIds().length };
  }, [lang]);

  const { level, streak, earned, done, total, cards } = data;

  const kpis = [
    { v: streak, l: es ? 'Racha (días)' : 'Day streak' },
    { v: `${es ? 'Nv.' : 'Lv.'} ${level.level}`, l: `${level.xp} XP` },
    { v: `${done}/${total}`, l: es ? 'Módulos' : 'Modules done' },
    { v: cards, l: es ? 'Tarjetas' : 'Total cards' },
  ];

  return (
    <div className="profile-page">
      <h1 className="profile-title">{es ? 'Tu progreso' : 'Your progress'}</h1>

      <div className="profile-level-card">
        <div className="profile-level-head">
          <span className="profile-level-num">{es ? 'Nivel' : 'Level'} {level.level}</span>
          {level.nextXP && (
            <span className="profile-level-xp">{level.xp} / {level.nextXP} XP</span>
          )}
        </div>
        <div className="profile-level-bar">
          <div className="profile-level-fill" style={{ width: `${level.progress * 100}%` }} />
        </div>
      </div>

      <div className="profile-kpis">
        {kpis.map((k, i) => (
          <div className="kpi" key={i}>
            <div className="kpi-v">{k.v}</div>
            <div className="kpi-l">{k.l}</div>
          </div>
        ))}
      </div>

      <h2 className="profile-section">{es ? 'Insignias' : 'Badges'}</h2>
      <div className="profile-badges">
        {BADGE_DEFS.map(b => {
          const has = earned.has(b.id);
          return (
            <div key={b.id} className={`profile-badge ${has ? '' : 'locked'}`} title={`${b.label} — ${b.desc}`}>
              <div className="profile-badge-ic"><BadgeIcon id={b.id} size={26} muted={!has} /></div>
              <span className="profile-badge-label">{b.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
