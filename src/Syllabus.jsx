import { useState, useEffect } from 'react';
import { useParams, useOutletContext, Link } from 'react-router-dom';
import { UI_DICT } from './data/translations';
import { DATA_MAP } from './courseData.js';
import Topic from './Topic';

export default function Syllabus() {
  const { courseId } = useParams();
  const { lang } = useOutletContext();
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

  // Determine available languages for this course
  const hasEs = !!rawData?.es;
  const currentLang = hasEs ? lang : 'en';

  // Data structure differences: roasting is an array, others are {en: [], es: []}
  const courseData = rawData ? (Array.isArray(rawData) ? rawData : rawData[currentLang]) : [];

  // Get UI strings
  const ui = UI_DICT[courseId]?.[currentLang] || UI_DICT.brewing.en;

  // Calculate progress function passed down to topics to call when they change
  const updateProgress = () => {
    let done = 0;
    let total = 0;
    courseData.forEach((mod) => {
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

  // When arriving from the Learning Path via /course/:id#modId, scroll to that
  // module so the tapped node lands on its content.
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const t = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(t);
  }, [courseId, currentLang]);

  if (!rawData) {
    return <div style={{ padding: '24px' }}>Course not found</div>;
  }

  return (
    <>
      <header>
        <Link to="/" className="back-link">← {currentLang === 'es' ? 'Rutas' : 'Paths'}</Link>

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
        {courseData.map((mod) => (
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
