import React from "react";
import blackLogo from "../assets/black_logo.png";
import { FaYoutube, FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between bg-[#101828] text-white p-10">
      {/* Logo */}
      <div className="w-full text-left mb-6 border-b border-gray-500 pb-4">
        <img src={blackLogo} alt="OVIO logo" className="h-24" />
      </div>

      {/* Կայքի բաժինները */}
      <div className="w-[30%] min-w-[280px] mb-6">
        <h3 className="text-lg mb-4 font-semibold">Կայքի բաժինները</h3>
        <div className="flex flex-row flex-wrap gap-8">
          <ul className="list-none space-y-1 text-sm">
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
          <ul className="list-none space-y-1 text-sm">
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

      {/* Սպասարկման քարտեզ */}
      <div className="w-[30%] min-w-[280px] mb-6">
        <h3 className="text-lg mb-4 font-semibold">Սպասարկման քարտեզ</h3>
        <div className="relative overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.114631263792!2d44.45453626080043!3d40.17462049080225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdaa42ee6895%3A0xcb433ecac1894517!2zT1ZJTyDQnNCw0LvQsNGC0LjRjyDRgdC10YDQstC40YEt0YbQtdC90YLRgA!5e1!3m2!1sen!2sam!4v1758689085074!5m2!1sen!2sam"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ovio map"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <FaYoutube className="w-8 h-8 cursor-pointer hover:text-red-500" />
          <FaFacebook className="w-8 h-8 cursor-pointer hover:text-blue-500" />
          <FaInstagram className="w-8 h-8 cursor-pointer hover:text-pink-500" />
          <FaPaperPlane className="w-8 h-8 cursor-pointer hover:text-purple-400" />
        </div>
      </div>

      {/* Որակի վերահսկում */}
      <div className="w-[30%] min-w-[280px] mb-6">
        <h3 className="text-lg mb-4 font-semibold">Որակի վերահսկում</h3>
        <form className="flex flex-col gap-3">
          <select className="p-2 rounded-md bg-[rgb(16,24,40)] text-white text-sm">
            <option>Ընտրել նպատակը</option>
            <option>Հարց</option>
            <option>Առաջարկ</option>
            <option>Բողոք</option>
          </select>
          <input
            type="text"
            placeholder="Ձեր անունը"
            className="p-2 rounded-md text-black bg-white text-sm"
          />
          <input
            type="email"
            placeholder="Ձեր էլ. փոստը"
            className="p-2 rounded-md text-black bg-white text-sm"
          />
          <input
            type="tel"
            placeholder="Հեռ. 091XXXXXX"
            className="p-2 rounded-md text-black text-sm bg-white"
          />
          <textarea
            placeholder="Ձեր հաղորդագրությունը"
            className="p-2 rounded-md text-black text-sm bg-white"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            Ուղարկել
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
