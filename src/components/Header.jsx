import { useState } from "react";
import OVIOLogo from "../assets/OVIOLogo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [submenu, setSubmenu] = useState({ main: null, sub: null });

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={OVIOLogo} alt="Ovio Logo" />
        </Link>
      </div>

      <nav className="menu">
        <ul>
          {/* Հատուկ առաջարկներ */}
          <li
            onMouseEnter={() => setSubmenu({ main: "special", sub: null })}
            onMouseLeave={() => setSubmenu({ main: null, sub: null })}
          >
            Հատուկ առաջարկներ
            {submenu.main === "special" && (
              <ul className="submenu">
                <li>Բոլորը</li>
                <li>Մինչև 40 000 ֏ նվեր</li>
                <li>2 ամսի անվճար․ տեսահսկում</li>
                <li>PowerPlay խաղային ծառայություն</li>
                <li>OVIO - Վեգա</li>
              </ul>
            )}
          </li>

          {/* Տան համար */}
          <li
            onMouseEnter={() => setSubmenu({ main: "courses", sub: null })}
            onMouseLeave={() => setSubmenu({ main: null, sub: null })}
          >
            Տան համար
            {submenu.main === "courses" && (
              <ul className="submenu">
                <li>Բոլորը</li>
                <li>All in փաթեթներ</li>
                <li>Ինտերնետ</li>
                <li>Wink TV</li>
                <li>Wink TV հավելված</li>
                <li>Տեսահսկում</li>
                <li>Հեռախոսակապ</li>
              </ul>
            )}
          </li>

          <li
            onMouseEnter={() => setSubmenu({ main: "for-business", sub: null })}
            onMouseLeave={() => setSubmenu({ main: null, sub: null })}
          >
            Բիզնեսի համար
            {submenu.main === "for-business" && (
              <ul className="submenu">
                {/* 1-ին li՝ առանց sub-submenu */}
                <li>Ընդհանուր ծառայություններ</li>

                {/* 2-րդից մինչև 6-րդ li՝ sub-submenu-ով */}
                {["Փաթեթներ", "Սպասարկումներ", "Տեխնիկական աջակցություն", "Հեռահաղորդակցություն", "Տեսահսկում"].map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() =>
                      setSubmenu({ main: "for-business", sub: index })
                    }
                    onMouseLeave={() =>
                      setSubmenu({ main: "for-business", sub: null })
                    }
                  >
                    {item}
                    {submenu.sub === index && (
                      <ul className="submenu sub-submenu">
                        <li>{item} A</li>
                        <li>{item} B</li>
                        <li>{item} C</li>
                      </ul>
                    )}
                  </li>
                ))}

                <li>Վերջնական ծառայություն</li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/about">Մեր մասին</Link>
          </li>
          <li>
            <Link to="/Pay">Վճարել</Link>
          </li>
          <li>
            <Link to="/contact">Օգնություն</Link>
          </li>
        </ul>
      </nav>

      <div className="right">
        <span>
          <FaUser size={20} />
          Մուտք
        </span>
        <Link to="/login" className="login-btn">
          Միացի՜ր հիմա
        </Link>
      </div>
    </header>
  );
};

export default Header;
