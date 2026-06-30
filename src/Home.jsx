import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UI_DICT } from './data/translations';

const COURSE_ORDER = ['brewing', 'espresso', 'roasting', 'history', 'agronomy', 'sensory', 'barista'];

function Home() {
  const [lang, setLang] = useState(() => localStorage.getItem('coffee101-lang') || 'en');

  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem('coffee101-lang', l);
  };

  const ui = UI_DICT.home[lang];

  return (
    <div className="home-container">
      <header style={{ padding: '0 0 24px 0', borderBottom: '1px solid var(--line)', marginBottom: '32px', maxWidth: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>{ui.title}</h1>
          <div className="lang-switch">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => toggleLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => toggleLang('es')}>ES</button>
          </div>
        </div>
        <p className="sub">{ui.sub}</p>
      </header>
      
      <main style={{ padding: 0, maxWidth: '100%' }}>
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
