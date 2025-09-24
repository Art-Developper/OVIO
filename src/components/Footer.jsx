import React from "react";
import "./Footer.css";
import blackLogo from "../assets/black_logo.png";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={blackLogo} alt="OVIO logo" />
      </div>

      <div className="footer-section">
        <h3>Կայքի բաժինները</h3>
        <div className="footer-section-1">
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
      </div>

      <div className="footer-section">
        <h3>Սպասարկման քարտեզ</h3>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <a
            href="https://yandex.com/maps/org/ovio/112582271163/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Ovio
          </a>
          <a
            href="https://yandex.com/maps/10262/yerevan/category/telecommunication_company/184107799/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Телекоммуникационная компания в Ереване
          </a>
          <a
            href="https://yandex.com/maps/10262/yerevan/category/data_center/171647048345/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "28px",
            }}
          >
            Дата-центр в Ереване
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.114631263792!2d44.45453626080043!3d40.17462049080225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdaa42ee6895%3A0xcb433ecac1894517!2zT1ZJTyDQnNCw0LvQsNGC0LjRjyDRgdC10YDQstC40YEt0YbQtdC90YLRgA!5e1!3m2!1sen!2sam!4v1758689085074!5m2!1sen!2sam"
            width="600"
            height="250"
            style={{ border: 1, borderRadius: "20px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="social-icons">
          <FaYoutube className="icon" />
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaPaperPlane className="icon" />
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
