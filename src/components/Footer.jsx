import React from "react";
import "./Footer.css";
import blackLogo from "../assets/black_logo.png";
import { FaYoutube, FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={blackLogo} alt="OVIO logo" />
      </div>

      <div className="footer-section">
        <h3>Կայքի բաժինները</h3>
        <ul>
          <li>Տան համար</li>
          <li>Հատուկ առաջարկներ</li>
          <li>All in փաթեթներ</li>
          <li>Ինտերնետ</li>
          <li>Հեռախոսակապ</li>
          <li>Հեռախոսային սպասարկում</li>
          <li>Գրասենյակներ և ծածկույթ</li>
          <li>Միջազգային հավաստագրեր</li>
          <li>Գաղտնիության քաղաքականություն</li>
        </ul>
        <ul>
          <li>Բիզնեսի համար</li>
          <li>Օպերատորներ</li>
          <li>Օգնություն</li>
          <li>Պայմաններ</li>
          <li>Արխիվ</li>
          <li>Աշխատատեղեր</li>
          <li>Այլ հատուկ առաջարկներ</li>
          <li>Այլ աշխատանքներ</li>
          <li>Այլ</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Սպասարկման քարտեզ</h3>
        <div className="map-box">
          <img src="/images/map.png" alt="Քարտեզ" />
        </div>
        <div className="social-icons">
          <FaYoutube />
          <FaFacebook />
          <FaInstagram />
          <FaPaperPlane />
        </div>
      </div>

      <div className="footer-section">
        <h3>Որակի վերահսկում</h3>
        <form className="control-form">
          <select>
            <option>Ընտրել նպատակը</option>
            <option>Հարց</option>
            <option>Առաջարկ</option>
            <option>Բողոք</option>
          </select>
          <input type="text" placeholder="Ձեր անունը" />
          <input type="email" placeholder="Ձեր էլ. փոստը" />
          <input type="tel" placeholder="Հեռ. 091XXXXXX" />
          <textarea placeholder="Ձեր հաղորդագրությունը"></textarea>
          <button type="submit">Ուղարկել</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
