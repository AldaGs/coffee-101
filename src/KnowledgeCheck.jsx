import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { reviewCard, isMastered } from './sr';
import { addXP, XP } from './game';

const RATINGS = [
  { label: 'Again', quality: 1, cls: 'rating-again' },
  { label: 'Hard',  quality: 3, cls: 'rating-hard'  },
  { label: 'Good',  quality: 4, cls: 'rating-good'  },
  { label: 'Easy',  quality: 5, cls: 'rating-easy'  },
];

export default function KnowledgeCheck({ flashcards, courseId, modId, topicIdx }) {
  if (!flashcards || flashcards.length === 0) return null;

  return (
    <div className="knowledge-check">
      <h3 className="kc-title">Knowledge Check</h3>
      <div className="flashcards-container">
        {flashcards.map((fc, idx) => {
          const cardId = `${courseId}:${modId}:${topicIdx}:${idx}`;
          return (
            <Flashcard
              key={idx}
              question={fc.q}
              answer={fc.a}
              cardId={cardId}
            />
          );
        })}
      </div>
    </div>
  );
}

function Flashcard({ question, answer, cardId }) {
  const [isFlipped, setIsFlipped]   = useState(false);
  const [rated, setRated]           = useState(false);
  const [xpPop, setXpPop]          = useState(null);
  const mastered = isMastered(cardId);

  const handleRate = (quality) => {
    if (rated) return;
    reviewCard(cardId, quality);
    let earned = XP.REVIEW_CARD;
    if (quality === 4) earned += XP.REVIEW_GOOD;
    if (quality === 5) earned += XP.REVIEW_EASY;
    addXP(earned);
    setXpPop(`+${earned} XP`);
    setRated(true);
    setTimeout(() => setXpPop(null), 1000);
  };

  return (
    <div className="flashcard-wrap">
      {mastered && <div className="fc-mastered-badge">✓ Mastered</div>}

      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => !isFlipped && setIsFlipped(true)}
      >
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

      {isFlipped && !rated && (
        <div className="fc-ratings">
          {RATINGS.map(r => (
            <button
              key={r.quality}
              className={`review-rating-btn ${r.cls} fc-rate-btn`}
              onClick={() => handleRate(r.quality)}
            >
              {r.label}
            </button>
          ))}
        </div>
      )}

      {rated && (
        <div className="fc-rated-msg">
          {xpPop && <span className="review-xp-pop fc-xp-pop">{xpPop}</span>}
          <span className="fc-rated-label">Scheduled for review ✓</span>
        </div>
      )}
    </div>
  );
}
