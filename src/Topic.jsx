import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import KnowledgeCheck from './KnowledgeCheck';

export default function Topic({ courseId, modId, topicIdx, topicData, ui, updateProgress }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [note, setNote] = useState('');
  const [showHint, setShowHint] = useState(false);
  
  const timerRef = useRef(null);
  
  const baseKey = `${courseId}-syllabus:${modId}-${topicIdx}`;
  const doneKey = `${baseKey}-done`;
  const noteKey = `${baseKey}-note`;

  // Load state from local storage on mount
  useEffect(() => {
    const storedDone = localStorage.getItem(doneKey);
    if (storedDone === '1') setIsDone(true);
    
    const storedNote = localStorage.getItem(noteKey);
    if (storedNote !== null) setNote(storedNote);
  }, [doneKey, noteKey]);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsDone(checked);
    localStorage.setItem(doneKey, checked ? '1' : '0');
    updateProgress();
  };

  const handleNoteChange = (e) => {
    const val = e.target.value;
    setNote(val);
    
    // Debounce save to local storage
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      localStorage.setItem(noteKey, val);
      setShowHint(true);
      setTimeout(() => setShowHint(false), 1500);
    }, 500);
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`topic ${isDone ? 'done' : ''}`}>
      <div className="topic-row" onClick={(e) => {
        // Prevent toggle if clicking checkbox
        if (e.target.type !== 'checkbox') {
          toggleOpen();
        }
      }}>
        <input 
          type="checkbox" 
          checked={isDone} 
          onChange={handleCheckboxChange} 
        />
        <div className="topic-main">
          <p className="topic-title">{topicData.t}</p>
          <p className="topic-blurb">{topicData.b}</p>
        </div>
        <div className="topic-toggle">
          {isOpen ? ui.collapse : ui.expand}
        </div>
      </div>
      
      {isOpen && (
        <div className="topic-body open">
          {topicData.content && (
            <div className="topic-content" style={{ marginTop: '16px', fontSize: '14.5px', lineHeight: '1.7', color: 'var(--ink)' }}>
              <ReactMarkdown>{topicData.content}</ReactMarkdown>
            </div>
          )}
          
          {(!topicData.content && topicData.points && topicData.points.length > 0) && (
            <>
              <h4>{ui.covers}</h4>
              <ul>
                {topicData.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </>
          )}
          
          {topicData.refs && topicData.refs.length > 0 && (
            <div className="refs">
              <h4>{ui.refs}</h4>
              <ul>
                {topicData.refs.map((r, i) => <li key={i} dangerouslySetInnerHTML={{ __html: r }}></li>)}
              </ul>
            </div>
          )}
          
          {topicData.flashcards && <KnowledgeCheck flashcards={topicData.flashcards} />}
          
          <div style={{ marginTop: '24px' }}>        
            <h4>{ui.notes}</h4>
            <textarea 
              className="note" 
              placeholder={ui.placeholder}
              value={note}
              onChange={handleNoteChange}
            ></textarea>
            <div className="save-hint">
              {showHint ? ui.saved : ''}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
