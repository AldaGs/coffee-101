import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { reviewCard, isMastered } from './sr';
import { addXP, XP } from './game';
import { generateMCQ } from './mcqGenerator';

export default function KnowledgeCheck({ flashcards, courseId, modId, topicIdx, lang }) {
  if (!flashcards || flashcards.length === 0) return null;

  return (
    <div className="knowledge-check">
      <h3 className="kc-title">Knowledge Check</h3>
      <div className="flashcards-container">
        {flashcards.map((fc, idx) => {
          const cardId = `${courseId}:${modId}:${topicIdx}:${idx}`;
          return (
            <QuizCard
              key={idx}
              question={fc.q}
              answer={fc.a}
              cardId={cardId}
              courseId={courseId}
              lang={lang}
            />
          );
        })}
      </div>
    </div>
  );
}

function QuizCard({ question, answer, cardId, courseId, lang }) {
  const [selected, setSelected] = useState(null);
  const [xpPop, setXpPop]      = useState(null);
  const mastered = isMastered(cardId);

  const mcq = useMemo(
    () => generateMCQ(cardId, question, answer, courseId, lang),
    [cardId, question, answer, courseId, lang]
  );

  const handleSelect = (option) => {
    if (selected !== null) return; // already answered
    setSelected(option);

    const isCorrect = option === mcq.correctAnswer;
    const quality = isCorrect ? 5 : 1;
    const earned  = isCorrect ? XP.REVIEW_CORRECT : XP.REVIEW_WRONG;

    reviewCard(cardId, quality);
    addXP(earned);
    setXpPop(`+${earned} XP`);
    setTimeout(() => setXpPop(null), 1200);
  };

  const LETTERS = ['A', 'B', 'C', 'D'];

  return (
    <div className="flashcard-wrap">
      {mastered && <div className="fc-mastered-badge">✓ Mastered</div>}

      <div className="mcq-card">
        <div className="mcq-question">
          <ReactMarkdown>{question}</ReactMarkdown>
        </div>

        <div className="mcq-options">
          {mcq.options.map((opt, i) => {
            let cls = 'mcq-option';
            if (selected !== null) {
              if (opt === mcq.correctAnswer) cls += ' correct';
              if (opt === selected && opt !== mcq.correctAnswer) cls += ' wrong';
              if (opt !== selected && opt !== mcq.correctAnswer) cls += ' dimmed';
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleSelect(opt)}
                disabled={selected !== null}
              >
                <span className="mcq-letter">{LETTERS[i]}</span>
                <span className="mcq-text">{opt}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="mcq-result">
            {xpPop && <span className="review-xp-pop fc-xp-pop">{xpPop}</span>}
            <span className={`mcq-result-label ${selected === mcq.correctAnswer ? 'mcq-correct-label' : 'mcq-wrong-label'}`}>
              {selected === mcq.correctAnswer ? 'Correct! ✓' : 'Not quite — review the answer above'}
            </span>
            <span className="fc-rated-label">Scheduled for review ✓</span>
          </div>
        )}
      </div>
    </div>
  );
}
