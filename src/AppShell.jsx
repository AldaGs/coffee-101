import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getLevel, getStreak, touchStreak } from './game';
import { StreakIcon, XpIcon, TAB_ICONS } from './icons';

const TABS = [
  { key: 'learn',      to: '/',           labelEn: 'Learn',      labelEs: 'Aprende' },
  { key: 'practice',   to: '/practice',   labelEn: 'Practice',   labelEs: 'Práctica' },
  { key: 'simulators', to: '/simulators', labelEn: 'Simulators', labelEs: 'Simuladores' },
  { key: 'profile',    to: '/profile',    labelEn: 'Profile',    labelEs: 'Perfil' },
];

// Which tab owns the current path.
function activeTab(pathname) {
  if (pathname.startsWith('/practice') || pathname.startsWith('/review')) return 'practice';
  if (pathname.startsWith('/simulators')) return 'simulators';
  if (pathname.startsWith('/profile')) return 'profile';
  return 'learn'; // '/', '/path/*', '/course/*', '/lesson/*'
}

export default function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState(() => localStorage.getItem('coffee101-lang') || 'en');
  const [stats, setStats] = useState({ level: getLevel(), streak: getStreak() });

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('coffee101-lang', l);
  };

  useEffect(() => { touchStreak(); }, []);

  // Refresh the header whenever the route changes (e.g. after a lesson awards XP).
  useEffect(() => {
    setStats({ level: getLevel(), streak: getStreak() });
  }, [location.pathname]);

  const active = activeTab(location.pathname);
  const es = lang === 'es';

  return (
    <div className="app-shell">
      <header className="appbar">
        <div className="appbar-inner">
          <span className="appbar-brand">Coffee&nbsp;101</span>
          <span className="appbar-stat" title={es ? 'Racha diaria' : 'Day streak'}>
            <StreakIcon size={20} /> {stats.streak}
          </span>
          <div className="appbar-level" title={`${stats.level.xp} XP`}>
            <span className="appbar-lvl-badge"><XpIcon size={15} /> {es ? 'Nv.' : 'Lv.'} {stats.level.level}</span>
            <span className="appbar-xp"><span className="appbar-xp-fill" style={{ width: `${stats.level.progress * 100}%` }} /></span>
          </div>
          <div className="lang-switch appbar-lang">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
          </div>
        </div>
      </header>

      <main className="app-content">
        <Outlet context={{ lang, setLang }} />
      </main>

      <nav className="tabbar" role="tablist" aria-label={es ? 'Navegación principal' : 'Main navigation'}>
        {TABS.map(tab => {
          const Icon = TAB_ICONS[tab.key];
          const on = active === tab.key;
          return (
            <button
              key={tab.key}
              className={`tab ${on ? 'on' : ''}`}
              role="tab"
              aria-selected={on}
              onClick={() => navigate(tab.to)}
            >
              <Icon size={24} />
              <span>{es ? tab.labelEs : tab.labelEn}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
