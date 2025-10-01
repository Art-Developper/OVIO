import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-300 flex justify-between items-center text-sm text-gray-600 mt-2 px-6 py-2 flex-wrap w-full">
      {/* Left */}
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-500 text-base" />
          <span className="hover:text-purple-700 cursor-pointer">
            +374 60 46 46 46
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500 text-base" />
          <span className="hover:text-purple-700 cursor-pointer">
            info@ovio.am
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500 text-base" />
          <span className="hover:text-purple-700 cursor-pointer">
            Գործնականներ և Ճանապարհ
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <span>Լրացուցիչ</span>
          <img
            src="https://flagcdn.com/w20/am.png"
            alt="Armenian"
            className="w-6 h-4 border border-gray-300 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
