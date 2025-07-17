import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Education from './pages/education/Education';
import Coworking from './pages/coworking/Coworking';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/education" element={<Education />} />
        <Route path="/agents-coworking" element={<Coworking />} />
      </Routes>
    </Router>
  )
}