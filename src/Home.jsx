import { Link, useOutletContext } from 'react-router-dom';
import { UI_DICT } from './data/translations';
import { SUBJECTS } from './courseData';
import { getSubjectSummary } from './progress';
import { SubjectIcon, ChevronIcon } from './icons';

// Clean subject name from the tier-1 course title ("Brewing 101" -> "Brewing").
function subjectName(subject, lang) {
  const raw = UI_DICT.home[lang].courses[subject.tiers[0]].title;
  return raw.replace(/\s*101.*$/, '').trim();
}

export default function Home() {
  const { lang } = useOutletContext();
  const ui = UI_DICT.home[lang];
  const es = lang === 'es';

  return (
    <div className="home-container">
      <header className="home-head">
        <h1>{es ? 'Elige tu ruta' : 'Choose your path'}</h1>
        <p className="sub">{ui.sub}</p>
      </header>

      <main style={{ padding: 0, maxWidth: '100%' }}>
        {SUBJECTS.map(subject => {
          const { done, total } = getSubjectSummary(subject.id, lang);
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          return (
            <Link key={subject.id} to={`/path/${subject.id}`} className="course-card subject-card">
              <div className="subject-card-icon"><SubjectIcon id={subject.id} size={28} /></div>
              <div className="subject-card-body">
                <h2>{subjectName(subject, lang)}</h2>
                <p>{ui.courses[subject.tiers[0]].desc}</p>
                <div className="subject-card-progress">
                  <div className="subject-card-bar">
                    <div className="subject-card-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="subject-card-count">
                    {done}/{total} {es ? 'módulos' : 'modules'}
                  </span>
                </div>
              </div>
              <span className="subject-card-chevron"><ChevronIcon size={26} /></span>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
