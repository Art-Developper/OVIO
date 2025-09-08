import { useState } from "react";
import OVIOLogo from "../assets/OVIOLogo.png";
import {UserIcon} from "react-icons/fa";
import "./Header.css";

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [submenu, setSubmenu] = useState(null);
    return(
        <>
            <header className="Header">
                <div className="logo">
                    <Link to="/">
                        <img src={OVIOLogo} alt="OvioLogo" className="img"/>
                    </Link>
                </div>
                <div className="relative">
                    {/* Բուրգեր կոճակ */}
                    <button
                        className="p-2 border rounded-md"
                        onClick={() => {
                        setIsOpen(!isOpen);
                        setSubmenu(null); // եթե փակում ենք, reset անի submenu-ն
                        }}
                    >
                        ☰
                    </button>

                    {/* Մենյու */}
                    {isOpen && (
                        <div className="absolute top-12 left-0 w-64 bg-white shadow-lg p-4 rounded-xl z-50">
                        {/* Եթե submenu բացված չէ */}
                        {!submenu && (
                            <ul className="space-y-3">
                            <li><a href="#">Home</a></li>
                            <li>
                                <button
                                onClick={() => setSubmenu("courses")}
                                className="w-full text-left"
                                >
                                Courses ➤
                                </button>
                            </li>
                            <li><a href="#">Contact</a></li>
                            </ul>
                        )}

                        {/* Courses submenu */}
                        {submenu === "courses" && (
                            <div>
                            <button
                                onClick={() => setSubmenu(null)}
                                className="mb-3 text-sm text-gray-500"
                            >
                                ← Back
                            </button>
                            <ul className="space-y-2">
                                <li><a href="#">React</a></li>
                                <li><a href="#">Node.js</a></li>
                                <li><a href="#">Python</a></li>
                            </ul>
                            </div>
                        )}
                        </div>
                    )}
                </div>
                <div className="right"></div>
            </header>        
        </>
    )
}

export default Header