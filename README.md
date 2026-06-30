# Coffee 101 PWA

A Progressive Web Application (PWA) dedicated to deep, technical coffee knowledge. This app covers **7 comprehensive syllabi** spanning the full spectrum of coffee education — from farm-level agronomy to bar-level service. It acts as an offline-first learning hub where you can read rich lessons, track your progress, and take local notes.

## Courses

| Course | Modules | Description |
|--------|---------|-------------|
| **Brewing Theory** | 10 | Water chemistry, particle dynamics, brew device physics, and recipe design. |
| **Espresso Theory** | 9 | Pump dynamics, puck resistance, pre-infusion, and advanced dial-in heuristics. |
| **Coffee Roasting** | 12 | Heat transfer, Maillard and pyrolysis chemistry, profile design, and machine application. |
| **Coffee History & Origins** | 4 | The global spread of coffee, the three waves, and Mexico's rich heritage. |
| **Agronomy & Terroir** | 4 | Cultivars, altitude, volcanic soils, and post-harvest processing (Washed/Natural/Honey/Anaerobic). |
| **Sensory & SCA Standards** | 4 | Physiology of taste, cupping protocols, defect identification, and the 100-point scale. |
| **Barista 101** | 4 | Hospitality, dialing in espresso, milk science, and bar workflow efficiency. |

## Features
- **Bilingual (EN/ES)**: Global language toggle on the hub that persists across all courses. All content is available in English and Spanish.
- **Offline First**: Built with `vite-plugin-pwa`, allowing the app to be installed natively on mobile devices and used without an internet connection.
- **Rich Text Lessons**: Uses `react-markdown` to render complex technical articles, external links, and formatting directly in the app.
- **Local Progress Tracking**: Your checkboxes and notes are saved to your browser's `localStorage`. They persist across sessions safely without requiring an account.
- **Modular Data Structure**: All syllabus data is stored in clean ES modules under `src/data/<course>/`, making it incredibly simple to add new courses, modules, or lessons.

## Getting Started

To run this project locally:

1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```
   This generates the optimized build and the Service Workers required for PWA installation in the `dist` directory.

## Adding Content

Content is organized as one file per module inside `src/data/<course>/`:

```
src/data/
├── brewing/
│   ├── index.js      # Re-exports all modules as { brewingData }
│   ├── m1.js         # Module 1 data (EN + ES)
│   ├── m2.js
│   └── ...
├── roasting/
├── espresso/
├── history/
├── agronomy/
├── sensory/
└── barista/
```

Each module file exports an object with `en` and `es` keys:

```javascript
export default {
  en: {
    mod: "Module 1",
    title: "Topic Title",
    id: "m1",
    desc: "Short description.",
    topics: [
      {
        t: "Topic Title",
        b: "Short blurb",
        content: `Your **rich markdown** text goes here. [External Link](https://example.com)`,
        points: ["Key point 1", "Key point 2"],
        refs: ["Optional reference citations"]
      }
    ]
  },
  es: { /* Spanish translation with identical structure */ }
};
```

To add a new module, create the file (e.g., `m5.js`), then import it in the course's `index.js`.

## Tech Stack
- **React** — UI library
- **Vite** — Build tool and dev server
- **React Router** — Navigation between courses
- **Vite PWA** — Service worker generation and manifest configuration
- **React Markdown** — Rich text lesson rendering
