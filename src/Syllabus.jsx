import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UI_DICT } from './data/translations';
import { brewingData } from './data/brewing/index.js';
import { espressoData } from './data/espresso/index.js';
import { roastingData } from './data/roasting/index.js';
import { historyData } from './data/history/index.js';
import { agronomyData } from './data/agronomy/index.js';
import { sensoryData } from './data/sensory/index.js';
import { baristaData } from './data/barista/index.js';
import Topic from './Topic';

const DATA_MAP = {
  brewing: brewingData,
  espresso: espressoData,
  roasting: roastingData,
  history: historyData,
  agronomy: agronomyData,
  sensory: sensoryData,
  barista: baristaData
};

export default function Syllabus() {
  const { courseId } = useParams();
  const [lang, setLang] = useState(() => localStorage.getItem('coffee101-lang') || 'en');

  const switchLang = (l) => {
    setLang(l);
    localStorage.setItem('coffee101-lang', l);
  };
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [openTopicKey, setOpenTopicKey] = useState(null);

  // Update theme on body to support course-specific styles (like roasting)
  useEffect(() => {
    document.body.className = `theme-${courseId}`;
    return () => {
      document.body.className = '';
    };
  }, [courseId]);

  const rawData = DATA_MAP[courseId];
  if (!rawData) {
    return <div style={{ padding: '24px' }}>Course not found</div>;
  }

  // Determine available languages for this course
  const hasEs = !!rawData.es;
  const currentLang = hasEs ? lang : 'en';
  
  // Data structure differences: roasting is an array, others are {en: [], es: []}
  const courseData = Array.isArray(rawData) ? rawData : rawData[currentLang];
  
  // Get UI strings
  const ui = UI_DICT[courseId]?.[currentLang] || UI_DICT.brewing.en;

  // Calculate progress function passed down to topics to call when they change
  const updateProgress = () => {
    let done = 0;
    let total = 0;
    courseData.forEach((mod, mIdx) => {
      mod.topics.forEach((top, tIdx) => {
        total++;
        const key = `${courseId}-syllabus:${mod.id}-${tIdx}-done`;
        if (localStorage.getItem(key) === '1') done++;
      });
    });
    setProgress({ done, total });
  };

  // Initial progress calc
  useEffect(() => {
    updateProgress();
  }, [courseId, currentLang]);

  return (
    <>
      <header>
        <Link to="/" className="back-link">← Back to Hub</Link>
        
        {hasEs && (
          <div className="lang-switch">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => switchLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => switchLang('es')}>ES</button>
          </div>
        )}
        
        <h1>{ui.title}</h1>
        <p className="sub">{ui.sub}</p>
        
        <div className="progress-wrap">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: progress.total > 0 ? `${(progress.done / progress.total) * 100}%` : '0%' }}
            ></div>
          </div>
          <span className="progress-label">{ui.progress(progress.done, progress.total)}</span>
        </div>
      </header>

      <div className="format-note" dangerouslySetInnerHTML={{ __html: ui.formatnote }}></div>

      <nav className="toc">
        {courseData.map(mod => (
          <a key={mod.id} href={`#${mod.id}`}>{mod.title}</a>
        ))}
      </nav>

      <main>
        {courseData.map((mod, mIdx) => (
          <div key={mod.id} id={mod.id} className="module">
            <div className="module-head">
              <span className="module-num">{mod.mod}</span>
              <h2 className="module-title">{mod.title}</h2>
            </div>
            <p className="module-desc">{mod.desc}</p>
            
            {mod.topics.map((top, tIdx) => (
              <Topic
                key={`${mod.id}-${tIdx}`}
                courseId={courseId}
                modId={mod.id}
                topicIdx={tIdx}
                topicData={top}
                ui={ui}
                lang={currentLang}
                updateProgress={updateProgress}
                openTopicKey={openTopicKey}
                setOpenTopicKey={setOpenTopicKey}
              />
            ))}
          </div>
        ))}
      </main>
      
      <footer>{ui.footer}</footer>
    </>
  );
}
