import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Syllabus from './Syllabus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:courseId" element={<Syllabus />} />
    </Routes>
  );
}

export default App;
