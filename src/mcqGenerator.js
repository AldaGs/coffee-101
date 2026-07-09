// MCQ distractor generator — pulls wrong answers from the same course's answer pool
import { brewingData }   from './data/brewing/index.js';
import { espressoData }  from './data/espresso/index.js';
import { roastingData }  from './data/roasting/index.js';
import { roasting2Data } from './data/roasting2/index.js';
import { historyData }   from './data/history/index.js';
import { history2Data }  from './data/history2/index.js';
import { history3Data }  from './data/history3/index.js';
import { agronomyData }  from './data/agronomy/index.js';
import { sensoryData }   from './data/sensory/index.js';
import { baristaData }   from './data/barista/index.js';
import { barista2Data }  from './data/barista2/index.js';
import { barista3Data }  from './data/barista3/index.js';

const DATA_MAP = {
  brewing:   brewingData,
  espresso:  espressoData,
  roasting:  roastingData,
  roasting2: roasting2Data,
  history:   historyData,
  history2:  history2Data,
  history3:  history3Data,
  agronomy:  agronomyData,
  sensory:   sensoryData,
  barista:   baristaData,
  barista2:  barista2Data,
  barista3:  barista3Data,
};

// Collect all answer strings from a given course (lang-aware)
function collectCourseAnswers(courseId, lang = 'en') {
  const data = DATA_MAP[courseId];
  if (!data) return [];
  const modules = data[lang] || data.en || [];
  const answers = [];
  for (const mod of modules) {
    for (const topic of (mod.topics || [])) {
      for (const fc of (topic.flashcards || [])) {
        answers.push(fc.a);
      }
    }
  }
  return answers;
}

// Collect ALL answers across every course
function collectAllAnswers(lang = 'en') {
  const all = [];
  for (const courseId of Object.keys(DATA_MAP)) {
    all.push(...collectCourseAnswers(courseId, lang));
  }
  return all;
}

// Simple seeded shuffle (deterministic per cardId within a session)
function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = hashStr(seed);
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * Generate MCQ options for a flashcard.
 * Returns { question, correctAnswer, options: string[4] }
 * where options is shuffled and includes the correct answer.
 */
export function generateMCQ(cardId, question, correctAnswer, courseId, lang = 'en') {
  // Try same-course pool first
  let pool = collectCourseAnswers(courseId, lang).filter(a => a !== correctAnswer);

  // If not enough distractors in the same course, pull from all courses
  if (pool.length < 3) {
    pool = collectAllAnswers(lang).filter(a => a !== correctAnswer);
  }

  // Deduplicate
  pool = [...new Set(pool)];

  // Pick 3 distractors (seeded shuffle for consistency)
  const shuffled = seededShuffle(pool, cardId);
  const distractors = shuffled.slice(0, 3);

  // Combine and shuffle all 4 options
  const options = seededShuffle([correctAnswer, ...distractors], cardId + ':opts');

  return {
    question,
    correctAnswer,
    options,
  };
}
