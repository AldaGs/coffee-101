// Node / gating model for the Learning Path.
//
// A "node" is a module (m1, m2, …) within a course tier. Completion is derived
// from the SAME localStorage keys the classic Syllabus/Topic view already
// writes (`${courseId}-syllabus:${modId}-${topicIdx}-done`), so existing
// progress carries over and the two views stay in sync — no new source of truth.

import { SUBJECTS, getModules } from './courseData.js';
import { getCard, isNew } from './sr.js';
import { getCrown } from './game.js';

// ── Per-module progress ─────────────────────────────────────
export function getModuleProgress(courseId, mod) {
  const total = (mod.topics || []).length;
  let done = 0;
  for (let i = 0; i < total; i++) {
    if (localStorage.getItem(`${courseId}-syllabus:${mod.id}-${i}-done`) === '1') done++;
  }
  return { done, total };
}

// Stable card ids for every flashcard in a module.
export function getModuleCardIds(courseId, mod) {
  const ids = [];
  (mod.topics || []).forEach((top, ti) => {
    (top.flashcards || []).forEach((_, ci) => ids.push(`${courseId}:${mod.id}:${ti}:${ci}`));
  });
  return ids;
}

// A completed module is "cracked" when cards it has actually been quizzed on
// have fallen due for spaced-repetition review. New (never-quizzed) cards do
// not crack a node, so reading-only completion isn't nagged prematurely.
export function getModuleDue(courseId, mod) {
  const now = Date.now();
  let due = 0;
  for (const id of getModuleCardIds(courseId, mod)) {
    if (!isNew(id) && getCard(id).due <= now) due++;
  }
  return due;
}

export function isModuleComplete(courseId, mod) {
  const { done, total } = getModuleProgress(courseId, mod);
  return total > 0 && done === total;
}

// ── Subject path (flattened, sequentially gated) ────────────
// Returns unit blocks (one per tier) whose nodes carry a lifecycle state:
//   'complete' | 'current' | 'available' | 'locked'
// The first incomplete node in the whole subject becomes 'current'; everything
// after the first incomplete node is 'locked' until the chain is unblocked.
export function getSubjectPath(subjectId, lang = 'en') {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return null;

  let unlockedChainBroken = false; // flips true once we hit the first incomplete node
  let currentAssigned = false;

  const units = subject.tiers.map((courseId, tierIdx) => {
    const modules = getModules(courseId, lang);
    const nodes = modules.map((mod) => {
      const { done, total } = getModuleProgress(courseId, mod);
      const complete = total > 0 && done === total;

      let state;
      if (complete) {
        state = 'complete';
      } else if (!unlockedChainBroken) {
        // First incomplete node reachable from the top of the subject.
        unlockedChainBroken = true;
        state = 'current';
        currentAssigned = true;
      } else {
        state = 'locked';
      }

      const crown = getCrown(courseId, mod.id);
      const cracked = complete && getModuleDue(courseId, mod) > 0;

      return {
        courseId,
        modId: mod.id,
        modNum: mod.mod,
        title: mod.title,
        desc: mod.desc,
        topicCount: total,
        done,
        state,
        crown,
        cracked,
        globalIndex: `${courseId}:${mod.id}`,
      };
    });

    return {
      courseId,
      tierIdx,
      nodes,
      done: nodes.filter(n => n.state === 'complete').length,
      total: nodes.length,
    };
  });

  // When no 'current' was assigned, every reachable node is complete.
  const allComplete = !currentAssigned && units.every(u => u.total > 0 && u.done === u.total);
  return { subject, units, allComplete };
}

// All completed modules that have fallen due for review (for the Practice hub).
export function getCrackedModules(lang = 'en') {
  const out = [];
  for (const subject of SUBJECTS) {
    for (const courseId of subject.tiers) {
      for (const mod of getModules(courseId, lang)) {
        const { done, total } = getModuleProgress(courseId, mod);
        if (total === 0 || done !== total) continue;
        const due = getModuleDue(courseId, mod);
        if (due > 0) {
          out.push({ subjectId: subject.id, courseId, modId: mod.id, modNum: mod.mod, title: mod.title, due });
        }
      }
    }
  }
  return out;
}

// ── Subject-level rollup (for Home cards) ───────────────────
export function getSubjectSummary(subjectId, lang = 'en') {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return { done: 0, total: 0 };
  let done = 0;
  let total = 0;
  subject.tiers.forEach(courseId => {
    getModules(courseId, lang).forEach(mod => {
      total++;
      if (isModuleComplete(courseId, mod)) done++;
    });
  });
  return { done, total };
}
