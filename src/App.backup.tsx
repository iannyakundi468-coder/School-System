import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function TestHome() {
  return <h1 style={{ color: 'white' }}>Home Page Works</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestHome />} />
      </Routes>
    </Router>
  );
}
