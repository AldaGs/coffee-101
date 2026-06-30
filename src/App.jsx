import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Syllabus from './Syllabus';
import Review from './Review';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:courseId" element={<Syllabus />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default App;
