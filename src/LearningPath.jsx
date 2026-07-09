import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { UI_DICT } from './data/translations';
import { getSubject, TIER_LABELS } from './courseData';
import { getSubjectPath } from './progress';
import { getLevel, getStreak, touchStreak } from './game';

// Nodes weave left → center → right → center so the trail reads as a path.
const OFFSETS = [0, 34, 0, -34];

function NodeIcon({ state }) {
  if (state === 'complete') return <span className="pathnode-glyph">✓</span>;
  if (state === 'locked') return <span className="pathnode-glyph">🔒</span>;
  return <span className="pathnode-glyph">★</span>;
}

function ProgressRing({ done, total }) {
  const pct = total > 0 ? done / total : 0;
  const deg = Math.round(pct * 360);
  return (
    <span
      className="pathnode-ring"
      style={{ background: `conic-gradient(var(--accent) ${deg}deg, transparent 0deg)` }}
    />
  );
}

export default function LearningPath() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState(() => localStorage.getItem('coffee101-lang') || 'en');
  const [path, setPath] = useState(null);
  const [header, setHeader] = useState(null);

  const subject = getSubject(subjectId);

  const switchLang = (l) => {
    setLang(l);
    localStorage.setItem('coffee101-lang', l);
  };

  useEffect(() => {
    if (subject) document.body.className = subject.theme || '';
    return () => { document.body.className = ''; };
  }, [subject]);

  useEffect(() => {
    if (!subject) return;
    touchStreak();
    setPath(getSubjectPath(subjectId, lang));
    setHeader({ level: getLevel(), streak: getStreak() });
  }, [subjectId, lang, subject]);

  if (!subject) {
    return (
      <div style={{ padding: 24 }}>
        <Link to="/" className="back-link">← Back to Hub</Link>
        <p style={{ marginTop: 16 }}>Subject not found.</p>
      </div>
    );
  }
  if (!path || !header) return null;

  const subjectTitle = UI_DICT.home[lang].courses[subject.tiers[0]].title.replace(/\s*101.*$/, '').trim();
  const tierLabels = TIER_LABELS[lang] || TIER_LABELS.en;
  const es = lang === 'es';

  const openNode = (node) => {
    if (node.state === 'locked') return;
    navigate(`/course/${node.courseId}#${node.modId}`);
  };

  return (
    <div className="path-page">
      <header className="path-header">
        <div className="path-header-top">
          <Link to="/" className="back-link">← {es ? 'Inicio' : 'Hub'}</Link>
          <div className="path-stats">
            <span className="path-chip" title={es ? 'Racha' : 'Streak'}>🔥 {header.streak}</span>
            <span className="path-chip" title="XP">⚡ {es ? 'Nv.' : 'Lv.'} {header.level.level}</span>
            <div className="lang-switch">
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => switchLang('en')}>EN</button>
              <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => switchLang('es')}>ES</button>
            </div>
          </div>
        </div>
        <h1 className="path-title"><span className="path-title-icon">{subject.icon}</span> {subjectTitle}</h1>
      </header>

      <div className="path-track">
        {path.units.map((unit, uIdx) => (
          <section key={unit.courseId} className="path-unit">
            <div className="path-unit-banner">
              <div className="path-unit-labels">
                <span className="path-unit-tier">{tierLabels[unit.tierIdx] || `Tier ${unit.tierIdx + 1}`}</span>
                <span className="path-unit-name">{UI_DICT.home[lang].courses[unit.courseId].title}</span>
              </div>
              <Link to={`/course/${unit.courseId}`} className="path-unit-ref">
                {es ? 'Ver lecciones' : 'All lessons'} →
              </Link>
            </div>

            <div className="path-nodes">
              {unit.nodes.map((node, nIdx) => {
                const offset = OFFSETS[nIdx % OFFSETS.length];
                return (
                  <div className="path-node-row" key={node.globalIndex} style={{ transform: `translateX(${offset}px)` }}>
                    <button
                      className={`pathnode pathnode-${node.state}`}
                      onClick={() => openNode(node)}
                      disabled={node.state === 'locked'}
                      aria-label={node.title}
                    >
                      {node.state === 'current' && <span className="pathnode-pulse" />}
                      {(node.state === 'current') && node.done > 0 && (
                        <ProgressRing done={node.done} total={node.topicCount} />
                      )}
                      <NodeIcon state={node.state} />
                      {node.state === 'current' && (
                        <span className="pathnode-start">{es ? 'EMPEZAR' : 'START'}</span>
                      )}
                    </button>
                    <div className="pathnode-caption">
                      <span className="pathnode-modnum">{node.modNum}</span>
                      <span className="pathnode-modtitle">{node.title}</span>
                      {node.topicCount > 0 && (
                        <span className="pathnode-count">
                          {node.done}/{node.topicCount} {es ? 'temas' : 'lessons'}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {uIdx < path.units.length - 1 && (
              <div className="path-checkpoint">
                <span>{es ? 'Punto de control' : 'Checkpoint'}</span>
              </div>
            )}
          </section>
        ))}

        {path.allComplete && (
          <div className="path-complete">
            🏆 {es ? '¡Ruta completa! Dominaste este tema.' : 'Path complete! You mastered this track.'}
          </div>
        )}
      </div>
    </div>
  );
}
