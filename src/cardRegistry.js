import { brewingData }  from './data/brewing/index.js';
import { espressoData } from './data/espresso/index.js';
import { roastingData } from './data/roasting/index.js';
import { historyData }  from './data/history/index.js';
import { agronomyData } from './data/agronomy/index.js';
import { sensoryData }  from './data/sensory/index.js';
import { baristaData }  from './data/barista/index.js';

const DATA_MAP = {
  brewing:  brewingData,
  espresso: espressoData,
  roasting: roastingData,
  history:  historyData,
  agronomy: agronomyData,
  sensory:  sensoryData,
  barista:  baristaData,
};

// Stable ID: "${courseId}:${modId}:${topicIdx}:${cardIdx}"
export function getAllCardIds() {
  const ids = [];
  for (const [courseId, data] of Object.entries(DATA_MAP)) {
    const modules = data.en || [];
    modules.forEach((mod) => {
      (mod.topics || []).forEach((topic, topicIdx) => {
        (topic.flashcards || []).forEach((_, cardIdx) => {
          ids.push(`${courseId}:${mod.id}:${topicIdx}:${cardIdx}`);
        });
      });
    });
  }
  return ids;
}

export function getCardContent(id, lang = 'en') {
  const parts = id.split(':');
  if (parts.length !== 4) return null;
  const [courseId, modId, topicIdxStr, cardIdxStr] = parts;
  const data = DATA_MAP[courseId];
  if (!data) return null;
  const modules = data[lang] || data.en || [];
  const mod = modules.find(m => m.id === modId);
  if (!mod) return null;
  const topic = mod.topics?.[parseInt(topicIdxStr, 10)];
  if (!topic?.flashcards) return null;
  const card = topic.flashcards[parseInt(cardIdxStr, 10)];
  if (!card) return null;
  return {
    q: card.q,
    a: card.a,
    courseId,
    modId,
    topicTitle: topic.t,
    modTitle: mod.title,
  };
}
