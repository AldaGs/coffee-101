import { useState, useEffect } from 'react';
import { useParams, useNavigate, useOutletContext, Link } from 'react-router-dom';
import { UI_DICT } from './data/translations';
import { getSubject, TIER_LABELS } from './courseData';
import { getSubjectPath } from './progress';
import { SubjectIcon, CompleteIcon, CurrentIcon, LockIcon, TrophyIcon, CrownIcon, RefreshIcon } from './icons';
import { MAX_CROWN } from './game';

// Nodes weave left → center → right → center so the trail reads as a path.
const OFFSETS = [0, 34, 0, -34];

function NodeIcon({ node }) {
  if (node.state === 'locked') return <LockIcon size={22} />;
  if (node.state !== 'complete') return <CurrentIcon size={28} />;
  if (node.crown >= MAX_CROWN) return <CrownIcon size={28} />;
  return <CompleteIcon size={30} />;
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
  const { lang } = useOutletContext();
  const [path, setPath] = useState(null);

  const subject = getSubject(subjectId);

  useEffect(() => {
    if (subject) document.body.className = subject.theme || '';
    return () => { document.body.className = ''; };
  }, [subject]);

  useEffect(() => {
    if (!subject) return;
    setPath(getSubjectPath(subjectId, lang));
  }, [subjectId, lang, subject]);

  if (!subject) {
    return (
      <div style={{ padding: 24 }}>
        <Link to="/" className="back-link">← Back to Hub</Link>
        <p style={{ marginTop: 16 }}>Subject not found.</p>
      </div>
    );
  }
  if (!path) return null;

  const subjectTitle = UI_DICT.home[lang].courses[subject.tiers[0]].title.replace(/\s*101.*$/, '').trim();
  const tierLabels = TIER_LABELS[lang] || TIER_LABELS.en;
  const es = lang === 'es';

  const openNode = (node) => {
    if (node.state === 'locked') return;
    navigate(`/lesson/${node.courseId}/${node.modId}`);
  };

  return (
    <div className="path-page">
      <header className="path-header">
        <Link to="/" className="back-link">← {es ? 'Rutas' : 'Paths'}</Link>
        <h1 className="path-title">
          <span className="path-title-icon"><SubjectIcon id={subject.id} size={26} /></span>
          {subjectTitle}
        </h1>
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
                const mastered = node.state === 'complete' && node.crown >= MAX_CROWN;
                const cls = [
                  'pathnode', `pathnode-${node.state}`,
                  mastered ? 'pathnode-mastered' : '',
                  node.cracked ? 'pathnode-cracked' : '',
                ].filter(Boolean).join(' ');
                return (
                  <div className="path-node-row" key={node.globalIndex} style={{ transform: `translateX(${offset}px)` }}>
                    <button
                      className={cls}
                      onClick={() => openNode(node)}
                      disabled={node.state === 'locked'}
                      aria-label={node.title}
                    >
                      {node.state === 'current' && <span className="pathnode-pulse" />}
                      {node.state === 'current' && node.done > 0 && (
                        <ProgressRing done={node.done} total={node.topicCount} />
                      )}
                      <span className="pathnode-glyph"><NodeIcon node={node} /></span>
                      {node.state === 'current' && (
                        <span className="pathnode-start">{es ? 'EMPEZAR' : 'START'}</span>
                      )}
                      {node.state === 'complete' && node.crown > 0 && !mastered && (
                        <span className="pathnode-crown-pip">
                          <CrownIcon size={11} color="#fff" /> {node.crown}
                        </span>
                      )}
                      {node.cracked && (
                        <span className="pathnode-refresh" title={es ? 'Repaso pendiente' : 'Needs refresh'}>
                          <RefreshIcon size={13} color="#fff" />
                        </span>
                      )}
                    </button>
                    <div className="pathnode-caption">
                      <span className="pathnode-modnum">{node.modNum}</span>
                      <span className="pathnode-modtitle">{node.title}</span>
                      {node.state === 'complete' ? (
                        <span className={`pathnode-count ${node.cracked ? 'is-cracked' : ''}`}>
                          {node.cracked
                            ? (es ? 'Repasar' : 'Refresh')
                            : mastered
                              ? (es ? 'Dominado' : 'Mastered')
                              : (es ? 'Completo' : 'Complete')}
                        </span>
                      ) : node.topicCount > 0 && (
                        <span className="pathnode-count">
                          {node.done}/{node.topicCount} {es ? 'temas' : 'lecciones'}
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
            <TrophyIcon size={20} color="#D4A72C" style={{ verticalAlign: 'middle', marginRight: 6 }} />
            {es ? '¡Ruta completa! Dominaste este tema.' : 'Path complete! You mastered this track.'}
          </div>
        )}
      </div>
    </div>
  );
}
