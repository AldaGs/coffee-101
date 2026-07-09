import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppShell from './AppShell';
import Home from './Home';
import LearningPath from './LearningPath';
import LessonPlayer from './LessonPlayer';
import Syllabus from './Syllabus';
import Review from './Review';
import Practice from './Practice';
import SimulatorsHub from './SimulatorsHub';
import Profile from './Profile';

const RoastingLabSimulator = lazy(() => import('./simulators/RoastingLabSimulator'));

function App() {
  const lang = localStorage.getItem('coffee101-lang') || 'en';
  return (
    <Routes>
      {/* Browse screens share the persistent top bar + bottom tab nav */}
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/path/:subjectId" element={<LearningPath />} />
        <Route path="/course/:courseId" element={<Syllabus />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/simulators" element={<SimulatorsHub />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Full-screen sessions (own chrome, no tab bar) */}
      <Route path="/lesson/:courseId/:modId" element={<LessonPlayer />} />
      <Route path="/review" element={<Review />} />
      <Route path="/simulators/roasting" element={
        <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--ink-soft)' }}>Loading simulator...</div>}>
          <RoastingLabSimulator lang={lang} />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;
