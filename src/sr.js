// SM-2 spaced repetition engine
const STORE = 'sr:cards';

function load() {
  try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; }
}
function save(cards) {
  try { localStorage.setItem(STORE, JSON.stringify(cards)); } catch {}
}

// quality: 0=blackout, 1=wrong, 2=wrong-easy, 3=correct-hard, 4=correct, 5=perfect
export function reviewCard(id, quality) {
  const cards = load();
  let c = cards[id] || { interval: 1, ef: 2.5, reps: 0, due: 0 };

  if (quality < 3) {
    c.reps = 0;
    c.interval = 1;
  } else {
    if (c.reps === 0) c.interval = 1;
    else if (c.reps === 1) c.interval = 6;
    else c.interval = Math.round(c.interval * c.ef);
    c.reps++;
  }

  c.ef = Math.max(1.3, c.ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  c.due = Date.now() + c.interval * 24 * 60 * 60 * 1000;
  cards[id] = c;
  save(cards);
  return c;
}

export function getCard(id) {
  return load()[id] || { interval: 1, ef: 2.5, reps: 0, due: 0 };
}

export function isNew(id) {
  return !load()[id];
}

export function isMastered(id) {
  const c = getCard(id);
  return c.reps >= 3 && c.interval >= 7;
}

export function getDueIds(allIds) {
  const now = Date.now();
  return allIds.filter(id => {
    const c = load()[id];
    return !c || c.due <= now;
  });
}

export function getAllCardState() {
  return load();
}
