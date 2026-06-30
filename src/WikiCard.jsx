import { useState, useEffect } from 'react';

const CACHE_PREFIX = 'wiki-cache:';
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;

function getCached(key) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch { return null; }
}

function setCache(key, data) {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ data, ts: Date.now() }));
  } catch {}
}

// Custom link renderer passed to ReactMarkdown
export function WikiLink({ href, children }) {
  const [open, setOpen] = useState(false);
  const match = href?.match(/^https?:\/\/(\w+)\.wikipedia\.org\/wiki\/(.+)$/);

  if (!match) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  const urlLang = match[1];
  const title = decodeURIComponent(match[2]).replace(/_/g, ' ');

  return (
    <>
      <a
        href={href}
        className="wiki-link"
        onClick={(e) => { e.preventDefault(); setOpen(true); }}
      >
        {children}
        <span className="wiki-link-badge">W</span>
      </a>
      {open && (
        <WikiCardDialog
          title={title}
          lang={urlLang}
          href={href}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function WikiCardDialog({ title, lang, href, onClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cacheKey = `${lang}:${title}`;
    const cached = getCached(cacheKey);
    if (cached) {
      setData(cached);
      setLoading(false);
      return;
    }

    const apiTitle = title.replace(/ /g, '_');
    fetch(
      `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(apiTitle)}`
    )
      .then((r) => {
        if (!r.ok) throw new Error('not found');
        return r.json();
      })
      .then((d) => {
        setCache(cacheKey, d);
        setData(d);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [title, lang]);

  return (
    <div className="wiki-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="wiki-card" role="dialog" aria-modal="true" aria-label={title}>
        <div className="wiki-card-header">
          <span className="wiki-card-source">Wikipedia</span>
          <button className="wiki-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {loading && (
          <div className="wiki-state">
            <div className="wiki-spinner" />
            <span>Loading…</span>
          </div>
        )}

        {error && (
          <div className="wiki-state">
            <span>Could not load preview. </span>
            <a href={href} target="_blank" rel="noopener noreferrer">Open on Wikipedia ↗</a>
          </div>
        )}

        {data && !loading && (
          <div className="wiki-content">
            {data.thumbnail?.source && (
              <img
                className="wiki-thumb"
                src={data.thumbnail.source}
                alt={data.title}
              />
            )}
            <div className="wiki-body">
              <p className="wiki-card-title">{data.title}</p>
              <p className="wiki-extract">{data.extract}</p>
              <a
                className="wiki-read-more"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read full article on Wikipedia ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
