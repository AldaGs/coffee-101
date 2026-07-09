import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './Home';
import LearningPath from './LearningPath';
import Syllabus from './Syllabus';
import Review from './Review';
import SimulatorsHub from './SimulatorsHub';

const RoastingLabSimulator = lazy(() => import('./simulators/RoastingLabSimulator'));

function App() {
  const lang = localStorage.getItem('coffee101-lang') || 'en';
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/path/:subjectId" element={<LearningPath />} />
      <Route path="/course/:courseId" element={<Syllabus />} />
      <Route path="/review" element={<Review />} />
      <Route path="/simulators" element={<SimulatorsHub />} />
      <Route path="/simulators/roasting" element={
        <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--ink-soft)' }}>Loading simulator...</div>}>
          <RoastingLabSimulator lang={lang} />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;
