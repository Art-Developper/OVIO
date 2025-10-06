import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import ServicesAccessibility from "./components/ServicesTable";
import Reports from "./components/Reports";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/services_accessibility" element={<ServicesAccessibility />} />
        <Route path="/about/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App