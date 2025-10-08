// Header.jsx
import { useState } from "react";
import OVIOLogo from "../assets/OVIOLogo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [submenu, setSubmenu] = useState({ main: null, sub: null });

  const businessItems = [
    { name: "Բոլորը" },
    {
      name: "Տվյալներ մշակման կենտրոն",
      subItems: [
        "Տվյալների մշակման կենտորնի մասին",
        "OVIO Cloud",
        "Colocation",
        "Դոմեն",
        "Հոսթինգ",
      ],
    },
    {
      name: "Ինտերնետ",
      subItems: [
        "Երաշխավորված ինտերնետ",
        "Mono Office Ինտերնետ",
        "Տվյալների փոխանցում",
        "WI-FI Promo",
      ],
    },
    {
      name: "Տեսահսկում և տեսավերլուծություն",
      subItems: ["Տեսահսկում բիզնեսի համար", "Տեսահսկում պատվերների ստացման կետեր"],
    },
    {
      name: "Սմարթ TV",
      subItems: ["Wink կորպորատիվ", "Wink TV Office", "Wink Hotels"],
    },
    {
      name: "Հեռախոսի ծառայություններ",
      subItems: [
        "Կորպորատիվ հեռախոսակապ",
        "SOHO հեռախոսակապ",
        "Քառանիշ համար",
        "Cloud ԱՀԿ",
        "Վիրտուալ ԱՀԿ",
        "Free Phone",
      ],
    },
    { name: "Օպերատորներ" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 bg-white border-b border-gray-300 font-sans relative z-50">
      {/* Logo */}
      <div className="logo">
        <Link to="/home">
          <img src={OVIOLogo} alt="Ovio Logo" className="h-24" />
        </Link>
      </div>

      {/* Menu */}
      <nav className="menu">
        <ul className="flex gap-6">
          {/* Հատուկ առաջարկներ */}
          <li
            className="relative font-medium cursor-pointer"
            onMouseEnter={() => setSubmenu({ main: "special", sub: null })}
            onMouseLeave={() => setSubmenu({ main: null, sub: null })}
          >
            Հատուկ առաջարկներ
            {submenu.main === "special" && (
              <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-xl grid grid-cols-2 gap-5 min-w-[400px] p-4">
                <ul className="flex flex-col gap-2">
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Բոլորը</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Մինչև 40 000 ֏ նվեր</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">2 ամսի անվճար․ տեսահսկում</li>
                </ul>
                <ul className="flex flex-col gap-2">
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">PowerPlay խաղային ծառայություն</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">OVIO - Վեգա</li>
                </ul>
              </div>
            )}
          </li>

          {/* Տան համար */}
          <li
            className="relative font-medium cursor-pointer"
            onMouseEnter={() => setSubmenu({ main: "courses", sub: null })}
            onMouseLeave={() => setSubmenu({ main: null, sub: null })}
          >
            Տան համար
            {submenu.main === "courses" && (
              <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-xl grid grid-cols-2 gap-5 min-w-[400px] p-4">
                <ul className="flex flex-col gap-2">
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Բոլորը</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">All in փաթեթներ</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Ինտերնետ</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Wink TV</li>
                </ul>
                <ul className="flex flex-col gap-2">
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Wink TV հավելված</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Տեսահսկում</li>
                  <li className="hover:bg-gray-100 hover:text-purple-700 px-3 py-1 rounded-md">Հեռախոսակապ</li>
                </ul>
              </div>
            )}
          </li>

          {/* Բիզնեսի համար */}
          <li
            className="relative font-medium cursor-pointer"
            onMouseEnter={() => setSubmenu({ main: "for-business", sub: null })}
            onMouseLeave={() => setSubmenu({ main: null, sub: null })}
          >
            Բիզնեսի համար
            {submenu.main === "for-business" && (
              <ul className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-xl flex flex-col gap-2 min-w-[220px] p-3">
                {businessItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative px-3 py-1 rounded-md hover:bg-gray-100 hover:text-purple-700"
                    onMouseEnter={() =>
                      item.subItems ? setSubmenu({ main: "for-business", sub: index }) : null
                    }
                    onMouseLeave={() =>
                      item.subItems ? setSubmenu({ main: "for-business", sub: null }) : null
                    }
                  >
                    {item.name}
                    {submenu.sub === index && item.subItems && (
                      <ul className="absolute top-0 left-full ml-2 bg-white shadow-lg border border-gray-200 rounded-xl flex flex-col gap-2 min-w-[220px] p-3">
                        {item.subItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-purple-700"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/about" className="hover:text-purple-700">Մեր մասին</Link></li>
          <li><Link to="/Pay" className="hover:text-purple-700">Վճարել</Link></li>
          <li><Link to="/contact" className="hover:text-purple-700">Օգնություն</Link></li>
        </ul>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-5 border-l border-black pl-4 h-10">
        <Link to="/login">
        <span className="flex items-center gap-2 cursor-pointer text-black">
        <FaUser  size={20} /> Մուտք
        </span>
        </Link>
        
        <Link
          to="/login"
          className="px-5 py-2 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-900 transition"
        >
          Միացի՜ր հիմա
        </Link>
      </div>
    </header>
  );
};

export default Header;
