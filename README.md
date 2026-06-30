# Coffee 101 PWA

A Progressive Web Application (PWA) dedicated to deep, technical coffee knowledge. This app covers comprehensive syllabi for Coffee Roasting, Espresso, and Filter Brewing. It acts as an offline-first learning hub where you can read rich lessons, track your progress, and take local notes.

## Features
- **Offline First**: Built with `vite-plugin-pwa`, allowing the app to be installed natively on mobile devices and used without an internet connection.
- **Rich Text Lessons**: Uses `react-markdown` to render complex technical articles, external links, and formatting directly in the app.
- **Local Progress Tracking**: Your checkboxes and notes are saved to your browser's `localStorage`. They persist across sessions safely without requiring an account.
- **Modular Data Structure**: All syllabus data is stored in clean Javascript arrays (`src/data/`), making it incredibly simple to add new courses, modules, or lessons.

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

To add new content or modify existing lessons:
1. Navigate to the `src/data/` directory.
2. Open the relevant file (e.g., `roasting.js`).
3. Locate the module and topic you want to edit.
4. Add or modify the `content` property using Markdown syntax. For example:
   ```javascript
   {
     t: "Topic Title",
     b: "Short blurb",
     content: `Your **rich markdown** text goes here. [External Link](https://example.com)`,
     // ...
   }
   ```
5. Save the file. The app will automatically render the new Markdown content.

## Tech Stack
- **React**: UI library
- **Vite**: Build tool and dev server
- **React Router**: For navigation between courses
- **Vite PWA**: For service worker generation and manifest configuration
- **React Markdown**: For rendering rich text lessons
