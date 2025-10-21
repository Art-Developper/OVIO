// Header.jsx
import { useState, useEffect } from "react"; // Added useEffect
import OVIOLogo from "../assets/OVIOLogo.png";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

const Header = () => {
 
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-white border-b border-gray-300 font-sans relative z-50">
      <div className="logo">
        <Link to="/">
          <img src={OVIOLogo} alt="Ovio Logo" className="h-24" />
        </Link>
      </div>
    </header>
  );
};

export default Header;