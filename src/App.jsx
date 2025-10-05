import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import ServicesAccessibility from "./components/ServicesTable";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/services_accessibility" element={<ServicesAccessibility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App