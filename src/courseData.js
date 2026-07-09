// Single source of truth for course content + the subject/tier structure that
// drives both the classic Syllabus view and the gamified Learning Path.

import { brewingData }   from './data/brewing/index.js';
import { brewing2Data }  from './data/brewing2/index.js';
import { brewing3Data }  from './data/brewing3/index.js';
import { espressoData }  from './data/espresso/index.js';
import { espresso2Data } from './data/espresso2/index.js';
import { espresso3Data } from './data/espresso3/index.js';
import { roastingData }  from './data/roasting/index.js';
import { roasting2Data } from './data/roasting2/index.js';
import { roasting3Data } from './data/roasting3/index.js';
import { historyData }   from './data/history/index.js';
import { history2Data }  from './data/history2/index.js';
import { history3Data }  from './data/history3/index.js';
import { agronomyData }  from './data/agronomy/index.js';
import { agronomy2Data } from './data/agronomy2/index.js';
import { agronomy3Data } from './data/agronomy3/index.js';
import { sensoryData }   from './data/sensory/index.js';
import { sensory2Data }  from './data/sensory2/index.js';
import { sensory3Data }  from './data/sensory3/index.js';
import { baristaData }   from './data/barista/index.js';
import { barista2Data }  from './data/barista2/index.js';
import { barista3Data }  from './data/barista3/index.js';

// courseId -> { en: [modules], es: [modules] }
export const DATA_MAP = {
  brewing:   brewingData,
  brewing2:  brewing2Data,
  brewing3:  brewing3Data,
  espresso:  espressoData,
  espresso2: espresso2Data,
  espresso3: espresso3Data,
  roasting:  roastingData,
  roasting2: roasting2Data,
  roasting3: roasting3Data,
  history:   historyData,
  history2:  history2Data,
  history3:  history3Data,
  agronomy:  agronomyData,
  agronomy2: agronomy2Data,
  agronomy3: agronomy3Data,
  sensory:   sensoryData,
  sensory2:  sensory2Data,
  sensory3:  sensory3Data,
  barista:   baristaData,
  barista2:  barista2Data,
  barista3:  barista3Data,
};

// A "subject" is a full learning track. Its three tiers become units on the
// path (101 → Intermediate → Advanced), unlocking in sequence.
export const SUBJECTS = [
  { id: 'brewing',  icon: '💧', theme: '',              tiers: ['brewing',  'brewing2',  'brewing3'] },
  { id: 'espresso', icon: '⚡', theme: '',              tiers: ['espresso', 'espresso2', 'espresso3'] },
  { id: 'roasting', icon: '🔥', theme: 'theme-roasting', tiers: ['roasting', 'roasting2', 'roasting3'] },
  { id: 'agronomy', icon: '🌱', theme: 'theme-agronomy', tiers: ['agronomy', 'agronomy2', 'agronomy3'] },
  { id: 'sensory',  icon: '👅', theme: 'theme-sensory',  tiers: ['sensory',  'sensory2',  'sensory3'] },
  { id: 'history',  icon: '📜', theme: 'theme-history',  tiers: ['history',  'history2',  'history3'] },
  { id: 'barista',  icon: '☕', theme: 'theme-barista',  tiers: ['barista',  'barista2',  'barista3'] },
];

// Tier labels shown as unit sub-headers.
export const TIER_LABELS = {
  en: ['101 · Foundations', 'Intermediate', 'Advanced'],
  es: ['101 · Fundamentos', 'Intermedio', 'Avanzado'],
};

export function getSubject(subjectId) {
  return SUBJECTS.find(s => s.id === subjectId) || null;
}

// Look up which subject a raw courseId (e.g. "brewing2") belongs to.
export function subjectOfCourse(courseId) {
  return SUBJECTS.find(s => s.tiers.includes(courseId)) || null;
}

// Return the module list for a course in the requested language, falling back
// to English when a translation is absent.
export function getModules(courseId, lang = 'en') {
  const data = DATA_MAP[courseId];
  if (!data) return [];
  return data[lang] || data.en || [];
}
