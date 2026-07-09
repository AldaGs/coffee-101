# Task 3 — Simulator Challenges (Goal-Directed Mode)

## Overview

The app already has three interactive simulators embedded in specific topics:

| Simulator | Type key | Location |
|---|---|---|
| Roast Curve | `roast-curve` | roasting/m1 → topic "Thermal momentum" |
| Brew Chart | `brew-chart` | brewing/m1 (multiple topics) |
| Espresso Flow | `espresso-flow` | espresso/m1 |

Currently these are **free-play**: the student adjusts knobs and observes the output with no stated objective. Task 3 adds a **challenge layer** on top — a specific goal the student must hit, with live feedback, a success state, and XP reward.

---

## Design Principle

> "Dial into the gold cup zone" is more memorable than "read about the gold cup zone."

A challenge turns passive reading into active problem-solving. The student must internalize the concept well enough to manipulate the simulator toward a target — the same mental model required in a real café.

Each challenge should:
1. State a clear goal in plain language.
2. Give live feedback as the student adjusts (green/red/amber zones).
3. Require understanding the *why*, not just trial-and-error (i.e., the solution space should be narrow enough that lucky guessing is unlikely).
4. Reward success with XP and a short explanation of what they did right.

---

## Challenge Design per Simulator

### 1. Roast Curve (`roast-curve`) — "Hit First Crack at 8:00"

**Concept tested:** Thermal momentum and inertia (roasting/m1, topic 2).

**Goal:** Reach First Crack (exothermic transition, ~196°C) at exactly 8:00 ± 20 seconds on the roast clock.

**Knobs available:**
- Charge temperature (160–220°C)
- Gas level (%), adjustable at any point during the roast
- Airflow / damper (%)

**Live feedback:**
- Rate of Rise (RoR) line shown in real time on the curve chart
- Color bands: green = on-track trajectory, amber = arriving too early/late, red = danger zone (scorch / stall)
- A projected First Crack arrival time ("ETA: 7:42 — too fast")

**Success condition:** First Crack between 7:40 and 8:20.

**Failure states:**
- RoR crashes to 0 before FC → "Stalled roast — the beans baked. Raise gas earlier next time."
- FC arrives before 6:30 → "Scorched — too much heat too fast. Lower charge temp."
- Clock passes 10:00 without FC → "Under-developed. More heat in the Maillard phase needed."

**XP reward:** 25 XP on success. First completion unlocks a "Roast Master" badge candidate.

---

### 2. Brew Chart (`brew-chart`) — "Hit the Gold Cup Zone"

**Concept tested:** Extraction yield and brew strength / TDS (brewing/m1–m2).

**Goal:** Land inside the SCA Gold Cup rectangle: **18–22% extraction yield** AND **1.15–1.35% TDS**.

**Knobs available:**
- Dose (g)
- Water volume (ml) → sets brew ratio
- Grind size (coarse ↔ fine) → affects extraction yield
- Water temperature (°C)
- Brew time (minutes)

**Live feedback:**
- A 2D chart (x = TDS, y = Extraction Yield) with the Gold Cup rectangle highlighted
- A dot representing the student's current recipe, updating live as knobs change
- Arrows showing which direction each variable moves the dot

**Success condition:** Dot lands inside the Gold Cup rectangle.

**Failure states (with coaching):**
- Too strong + over-extracted → "Bitter and thick. Coarser grind or shorter brew."
- Too weak + under-extracted → "Sour and thin. Finer grind or higher temperature."
- Strong but under-extracted → "Intense but sour. Increase brew time or temperature."
- Weak but over-extracted → "Hollow and bitter. Increase dose, decrease brew time."

**XP reward:** 20 XP on success.

---

### 3. Espresso Flow (`espresso-flow`) — "Dial in the Shot"

**Concept tested:** Dose, yield, grind as the espresso recipe triad (espresso/m1–m3).

**Goal:** Pull a shot that hits all three targets simultaneously:
- Yield: 36g ± 2g (1:2 ratio from an 18g dose)
- Time: 25–35 seconds
- Visual: shot color transitions from dark to golden-blond before 30s (no blonding before 20s)

**Knobs available:**
- Grind size (micro-stepped, most sensitive)
- Dose (17–21g)
- Yield target (stop weight)
- Pressure profile (flat 9 bar, or a simple ramp-up/ramp-down selector)

**Live feedback:**
- Animated shot stream (color + flow rate) responding to settings
- Running clock and scale weight
- "Too fast / On track / Choking" indicator

**Success condition:** All three targets hit in a single pull.

**Failure coaching:**
- Shot runs in <18s → "Gushing — grind finer."
- Shot chokes (no flow after 10s) → "Choked — grind coarser."
- Blonding starts before 20s → "Shot ran out of extraction too early — try a shorter yield or finer grind."

**XP reward:** 30 XP on success. Unlocks "Barista" badge candidate.

---

## Implementation Plan

### Data layer (`src/data/*/m*.js`)
Add a `challenges` array to any topic that has a `simulator` field:

```js
"simulator": "roast-curve",
"challenges": [
  {
    "id": "roast:m1:first-crack-8min",
    "title": "Hit First Crack at 8:00",
    "desc": "Adjust charge temperature, gas, and airflow to reach First Crack between 7:40 and 8:20.",
    "xp": 25,
    "successMsg": "Perfect momentum. Your RoR carried the beans right into First Crack on time.",
    "target": { "fcTime": [460, 500] }
  }
]
```

### State layer (`src/game.js`)
Extend the XP/badge system:
- `completeChallenge(id)` — awards XP, marks `challenge:${id}` in localStorage, checks badge triggers.
- New badges: `first_challenge`, `roast_master`, `espresso_ace`, `gold_cup`.

### UI layer
Each simulator component receives an optional `challenge` prop. When present:
1. A **challenge banner** appears above the simulator (goal + current status).
2. The simulator's internal state is evaluated against `challenge.target` on every tick.
3. On success: a **success overlay** slides in (confetti optional) with XP pop and explanation.
4. A "Skip challenge / Free play" link is always visible for students who just want to explore.

### Route
No new route needed. Challenges are surfaced inline within the topic where the simulator already lives, triggered by a "Start Challenge" button below the free-play simulator.

---

## XP & Badge Summary

| Badge | Trigger |
|---|---|
| `first_challenge` | Complete any simulator challenge |
| `gold_cup` | Hit the Gold Cup zone in brew-chart challenge |
| `roast_master` | Hit First Crack on time in roast-curve challenge |
| `espresso_ace` | Dial in the shot in espresso-flow challenge |

Total new XP available from challenges: **75 XP** (25 + 20 + 30).

---

## Open Questions

1. **Difficulty tiers?** Each challenge could have Easy / Hard variants (wider vs. tighter target windows). Start with one difficulty; add tiers if needed.
2. **Retry tracking?** Track attempt count? Could add "Got it in 1 try" bonus XP.
3. **Mobile layout?** The 2D Gold Cup chart may need a simplified view on narrow screens.
