import { Link } from 'react-router-dom';

function Home() {
  const courses = [
    { id: 'brewing', title: 'Brewing Theory', desc: 'A deep technical syllabus on filter coffee extraction.' },
    { id: 'espresso', title: 'Espresso Theory', desc: 'A deep technical syllabus on espresso extraction.' },
    { id: 'roasting', title: 'Coffee Roasting Theory', desc: 'A deep technical syllabus on heat transfer and chemistry.' }
  ];

  return (
    <div className="home-container">
      <header style={{ padding: '0 0 24px 0', borderBottom: '1px solid var(--line)', marginBottom: '32px', maxWidth: '100%' }}>
        <h1>Coffee 101</h1>
        <p className="sub">Technical coffee knowledge hubs, saved directly on your device.</p>
      </header>
      
      <main style={{ padding: 0, maxWidth: '100%' }}>
        {courses.map(c => (
          <Link key={c.id} to={`/course/${c.id}`} className="course-card">
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Home;
