// XP, levels, streaks, badges
const KEYS = {
  xp: 'game:xp',
  streak: 'game:streak',
  lastDate: 'game:lastDate',
  badges: 'game:badges',
  daily: 'game:daily',
  crowns: 'game:crowns',
};

// XP thresholds for levels 0-10
const LEVEL_XP = [0, 50, 150, 350, 700, 1200, 2000, 3000, 5000, 8000, 12000];

export const XP = {
  READ_TOPIC: 5,
  COMPLETE_TOPIC: 10,
  REVIEW_CARD: 5,
  REVIEW_GOOD: 3,   // bonus on top of REVIEW_CARD
  REVIEW_EASY: 5,  // bonus on top of REVIEW_CARD
  REVIEW_CORRECT: 10, // MCQ correct answer
  REVIEW_WRONG: 2,    // MCQ wrong answer (still rewards trying)
};

export function addXP(amount) {
  const next = getXP() + amount;
  try { localStorage.setItem(KEYS.xp, next); } catch {}
  addDailyXP(amount);
  checkBadges();
  return next;
}

// ── Daily goal ──────────────────────────────────────────────
export const DAILY_GOAL = 40; // XP per day

function addDailyXP(amount) {
  const today = new Date().toDateString();
  const xp = getDailyXP() + amount;
  try { localStorage.setItem(KEYS.daily, JSON.stringify({ date: today, xp })); } catch {}
}

export function getDailyXP() {
  const today = new Date().toDateString();
  try {
    const d = JSON.parse(localStorage.getItem(KEYS.daily));
    return d && d.date === today ? d.xp : 0;
  } catch { return 0; }
}

export function getDailyProgress() {
  const xp = getDailyXP();
  return { xp, goal: DAILY_GOAL, progress: Math.min(1, xp / DAILY_GOAL), met: xp >= DAILY_GOAL };
}

// ── Crowns / mastery ────────────────────────────────────────
export const MAX_CROWN = 3;

function loadCrowns() {
  try { return JSON.parse(localStorage.getItem(KEYS.crowns)) || {}; } catch { return {}; }
}

export function getCrown(courseId, modId) {
  return loadCrowns()[`${courseId}:${modId}`] || 0;
}

// Called when a lesson session is completed; levels up mastery to a cap.
export function bumpCrown(courseId, modId) {
  const crowns = loadCrowns();
  const key = `${courseId}:${modId}`;
  crowns[key] = Math.min(MAX_CROWN, (crowns[key] || 0) + 1);
  try { localStorage.setItem(KEYS.crowns, JSON.stringify(crowns)); } catch {}
  return crowns[key];
}

export function getXP() {
  return parseInt(localStorage.getItem(KEYS.xp) || '0', 10);
}

export function getLevel() {
  const xp = getXP();
  let level = 0;
  for (let i = 0; i < LEVEL_XP.length; i++) {
    if (xp >= LEVEL_XP[i]) level = i;
    else break;
  }
  const prevXP = LEVEL_XP[level];
  const nextXP = LEVEL_XP[level + 1] ?? null;
  const progress = nextXP ? (xp - prevXP) / (nextXP - prevXP) : 1;
  return { level, xp, prevXP, nextXP, progress };
}

// Call once per day when the user opens the app or does a review
export function touchStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem(KEYS.lastDate);
  if (last === today) return getStreak();

  const yesterday = new Date(Date.now() - 86_400_000).toDateString();
  const streak = last === yesterday
    ? parseInt(localStorage.getItem(KEYS.streak) || '0', 10) + 1
    : 1;

  try {
    localStorage.setItem(KEYS.streak, streak);
    localStorage.setItem(KEYS.lastDate, today);
  } catch {}

  checkBadges();
  return streak;
}

export function getStreak() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86_400_000).toDateString();
  const last = localStorage.getItem(KEYS.lastDate);
  if (last !== today && last !== yesterday) return 0;
  return parseInt(localStorage.getItem(KEYS.streak) || '0', 10);
}

// ── Badges ─────────────────────────────────────────────────
export const BADGE_DEFS = [
  { id: 'first_review',     icon: '🎓', label: 'First Review',   desc: 'Complete your first card review.' },
  { id: 'streak_3',         icon: '🔥', label: '3-Day Streak',   desc: 'Review 3 days in a row.' },
  { id: 'streak_7',         icon: '⚡', label: 'Week Streak',    desc: 'Review 7 days in a row.' },
  { id: 'streak_30',        icon: '🌟', label: 'Month Streak',   desc: 'Review 30 days in a row.' },
  { id: 'xp_100',           icon: '☕', label: 'Apprentice',     desc: 'Earn 100 XP.' },
  { id: 'xp_500',           icon: '🫘', label: 'Journeyman',     desc: 'Earn 500 XP.' },
  { id: 'xp_1000',          icon: '🏅', label: 'Expert',         desc: 'Earn 1,000 XP.' },
  { id: 'xp_2000',          icon: '🏆', label: 'Master Barista', desc: 'Earn 2,000 XP.' },
  { id: 'first_challenge',  icon: '🎯', label: 'First Challenge',desc: 'Complete any simulator challenge.' },
  { id: 'roast_master',     icon: '🌡️', label: 'Roast Master',   desc: 'Hit First Crack on time in the roast-curve challenge.' },
  { id: 'gold_cup',         icon: '🏅', label: 'Gold Cup',       desc: 'Land in the SCA Gold Cup zone in the brew-chart challenge.' },
  { id: 'espresso_ace',     icon: '☕', label: 'Espresso Ace',   desc: 'Dial in the perfect espresso shot.' },
];

export function getEarnedBadges() {
  try { return JSON.parse(localStorage.getItem(KEYS.badges)) || []; } catch { return []; }
}

export function checkBadges() {
  const earned = getEarnedBadges();
  const xp = getXP();
  const streak = getStreak();
  const newBadges = [];

  const unlock = (id) => {
    if (!earned.includes(id)) { earned.push(id); newBadges.push(id); }
  };

  if (xp >= 100)  unlock('xp_100');
  if (xp >= 500)  unlock('xp_500');
  if (xp >= 1000) unlock('xp_1000');
  if (xp >= 2000) unlock('xp_2000');
  if (streak >= 3)  unlock('streak_3');
  if (streak >= 7)  unlock('streak_7');
  if (streak >= 30) unlock('streak_30');

  if (newBadges.length) {
    try { localStorage.setItem(KEYS.badges, JSON.stringify(earned)); } catch {}
  }
  return newBadges.map(id => BADGE_DEFS.find(b => b.id === id)).filter(Boolean);
}

// ── Challenges ──────────────────────────────────────────────
const CHALLENGE_KEY = 'game:challenges';

export function getChallengesCompleted() {
  try { return JSON.parse(localStorage.getItem(CHALLENGE_KEY)) || []; } catch { return []; }
}

export function isChallengeCompleted(id) {
  return getChallengesCompleted().includes(id);
}

export function completeChallenge(id, xp, badgeId) {
  const completed = getChallengesCompleted();
  const isNew = !completed.includes(id);
  if (isNew) {
    completed.push(id);
    try { localStorage.setItem(CHALLENGE_KEY, JSON.stringify(completed)); } catch {}
    addXP(xp);
    awardBadge('first_challenge');
    if (badgeId) awardBadge(badgeId);
  }
  return isNew;
}

export function awardBadge(id) {
  const earned = getEarnedBadges();
  if (!earned.includes(id)) {
    earned.push(id);
    try { localStorage.setItem(KEYS.badges, JSON.stringify(earned)); } catch {}
  }
}
