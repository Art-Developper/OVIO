import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/AboutPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App