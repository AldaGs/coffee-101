import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function KnowledgeCheck({ flashcards }) {
  if (!flashcards || flashcards.length === 0) return null;

  return (
    <div className="knowledge-check">
      <h3 className="kc-title">Knowledge Check</h3>
      <div className="flashcards-container">
        {flashcards.map((fc, idx) => (
          <Flashcard key={idx} question={fc.q} answer={fc.a} />
        ))}
      </div>
    </div>
  );
}

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div className="fc-icon">?</div>
          <ReactMarkdown>{question}</ReactMarkdown>
          <div className="fc-hint">Tap to flip</div>
        </div>
        <div className="flashcard-back">
          <div className="fc-icon">!</div>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
