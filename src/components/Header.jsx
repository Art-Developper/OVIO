// Header.jsx
import { useState } from "react";
import OVIOLogo from "../assets/OVIOLogo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [submenu, setSubmenu] = useState({ main: null, sub: null });

  const businessItems = [
    { name: "Բոլորը" },
    { 
      name: "Տվյալներ մշակման կենտրոն", 
      subItems: ["Տվյալների մշակման կենտորնի մասին", "OVIO Cloud", "Colocation","Դոմեն","Հոսթինգ"] 
    },
    { 
      name: "Ինտերնետ", 
      subItems: ["Երաշխավորված ինտերնետ", "Mono Office Ինտերնետ","Տվյալների փոխանցում","WI-FI Promo"] 
    },
    { 
      name: "Տեսահսկում և տեսավերլուծություն", 
      subItems: ["Տեսահսկում բիզնեսի համար", "Տեսահսկում պատվերների ստացման կետեր"] 
    },
    { name: "Սմարթ TV" ,
      subItems: ["Wink կորպորատիվ", "Wink TV Office","Wink Hotels"] 
    },
    { name: "Հեռախոսի ծառայություններ",
      subItems: ["Կորպորատիվ հեռախոսակապ","SOHO հեռախոսակապ","Քառանիշ համար","Cloud ԱՀԿ","Վիրտուալ ԱՀԿ","Free Phone"]
     },
    { name: "Օպերատորներ" }
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={OVIOLogo} alt="Ovio Logo" />
        </Link>
      </div>

      <nav className="menu">
        <ul>
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
                {businessItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() =>
                      item.subItems ? setSubmenu({ main: "for-business", sub: index }) : null
                    }
                    onMouseLeave={() =>
                      item.subItems ? setSubmenu({ main: "for-business", sub: null }) : null
                    }
                  >
                    {item.name}
                    {submenu.sub === index && item.subItems && (
                      <ul className="submenu sub-submenu">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
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
        <span className="user-icon">
          <FaUser size={20} />Մուտք
        </span>
        <Link to="/login" className="login-btn">
          Միացի՜ր հիմա
        </Link>
      </div>
    </header>
  );
};

export default Header;