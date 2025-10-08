import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import ServicesAccessibility from "./components/ServicesTable";
import Reports from "./components/Reports";
import RegFrame from "./components/RegulatoryFramework";
import RequiredDocuments from "./components/RequiredDocuments";
import Purchases from "./components/Purchase";
import Login from "./components/Login";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/about/services_accessibility" element={<ServicesAccessibility />} />
        <Route path="/about/reports" element={<Reports />} />
        <Route path="/about/regulatory-framework" element={<RegFrame />}/>
        <Route path="/about/required-documents" element={<RequiredDocuments />} />
        <Route path="/about/purchases" element={<Purchases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App