import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UI_DICT } from './data/translations';
import { getAllCardIds } from './cardRegistry';
import { getDueIds } from './sr';
import { getLevel, getStreak, touchStreak, getEarnedBadges, BADGE_DEFS } from './game';

const COURSE_ORDER = ['brewing', 'espresso', 'roasting', 'roasting2', 'history', 'history2', 'history3', 'agronomy', 'sensory', 'barista', 'barista2', 'barista3'];

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    touchStreak();
    const all = getAllCardIds();
    const due = getDueIds(all);
    const level = getLevel();
    const streak = getStreak();
    const earned = getEarnedBadges();
    setStats({ due: due.length, level, streak, earned, total: all.length });
  }, []);

  if (!stats) return null;

  const { due, level, streak, earned, total } = stats;

  return (
    <div className="dashboard">
      <div className="dashboard-stats">
        <div className="dash-stat">
          <span className="dash-stat-icon">🔥</span>
          <div>
            <div className="dash-stat-value">{streak}</div>
            <div className="dash-stat-label">day streak</div>
          </div>
        </div>

        <div className="dash-stat">
          <span className="dash-stat-icon">⚡</span>
          <div>
            <div className="dash-stat-value">Lv. {level.level}</div>
            <div className="dash-xp-bar">
              <div className="dash-xp-fill" style={{ width: `${level.progress * 100}%` }} />
            </div>
            <div className="dash-stat-label">{level.xp} XP</div>
          </div>
        </div>

        <div className="dash-stat">
          <span className="dash-stat-icon">🃏</span>
          <div>
            <div className="dash-stat-value">{total}</div>
            <div className="dash-stat-label">total cards</div>
          </div>
        </div>

        <Link to="/review" className={`dash-review-btn ${due > 0 ? 'has-due' : ''}`}>
          {due > 0 ? `Review ${due} due` : 'Practice'}
        </Link>
      </div>

      {earned.length > 0 && (
        <div className="dash-badges">
          {earned.map(id => {
            const b = BADGE_DEFS.find(d => d.id === id);
            return b ? (
              <span key={id} className="dash-badge" title={`${b.label}: ${b.desc}`}>
                {b.icon}
              </span>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}

function Home() {
  const [lang, setLang] = useState(() => localStorage.getItem('coffee101-lang') || 'en');

  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem('coffee101-lang', l);
  };

  const ui = UI_DICT.home[lang];

  return (
    <div className="home-container">
      <header style={{ padding: '0 0 24px 0', borderBottom: '1px solid var(--line)', marginBottom: '24px', maxWidth: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>{ui.title}</h1>
          <div className="lang-switch">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => toggleLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => toggleLang('es')}>ES</button>
          </div>
        </div>
        <p className="sub">{ui.sub}</p>
      </header>

      <Dashboard />

      <main style={{ padding: 0, maxWidth: '100%' }}>
        <Link to="/simulators" className="course-card" style={{ borderLeft: '3px solid var(--accent)', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 20 }}>🧪</span>
            <h2 style={{ margin: 0 }}>{lang === 'es' ? 'Simuladores' : 'Simulators'}</h2>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', background: 'var(--accent-soft)', color: 'var(--accent-text)', padding: '2px 8px', borderRadius: 4 }}>
              {lang === 'es' ? 'Interactivo' : 'Interactive'}
            </span>
          </div>
          <p>{lang === 'es'
            ? 'Herramientas interactivas: simulador de tueste con análisis de grano verde, control de temperatura, gas por fase y más.'
            : 'Interactive tools: roasting simulator with green bean analysis, charge temp, per-phase gas controls, RoR curves and more.'}</p>
        </Link>

        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-soft)', marginBottom: 12 }}>
          {lang === 'es' ? 'Cursos' : 'Courses'}
        </div>

        {COURSE_ORDER.map(id => {
          const c = ui.courses[id];
          return (
            <Link key={id} to={`/course/${id}`} className="course-card">
              <h2>{c.title}</h2>
              <p>{c.desc}</p>
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export default Home;
