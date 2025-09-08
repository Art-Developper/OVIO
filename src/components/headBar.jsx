import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./HeadBar.css";

const TopBar = () => {
  return (
    <>
        <div className="top-bar">
            <div className="top-left">
                <div>
                <FaPhone className="icon" /> <span className="number">+374 60 46 46 46</span>
                </div>
                <div>
                <FaEnvelope className="icon" /> <span className="mail">info@ovio.am</span>
                </div>
                <div>
                <FaMapMarkerAlt className="icon" /> <span className="map">Գործնականներ և Ճանապարհ</span>
                </div>
            </div>
            <div className="top-right">
                <div className="lang">
                <span>Լրացուցիչ</span>
                <img src="https://flagcdn.com/w20/am.png" alt="Armenian" />
                </div>
            </div>
        </div>
    </>
  );
};

export default TopBar;