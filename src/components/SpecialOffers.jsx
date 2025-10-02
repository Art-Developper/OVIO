import React, { useState } from "react";
import Img1 from "../assets/OVIO.png";
import Img2 from "../assets/Special.png";
import Img3 from "../assets/Game.png";
import Img4 from "../assets/Happygirl.png";

const offers = [
  {
    image: Img1,
    title: "Մինչև 40 000 ֏ նվերը քեզ է սպասում",
    description:
      "Միացի՛ր All in կամ Wi-fly փաթեթներին, ստացի՛ր մինչև 40 000 դրամ նվեր բաժանորդային հաշվիդ",
    buttons: ["Իմանալ ավելին"],
  },
  {
    image: Img2,
    title: "2 ամիս անվճար",
    description: "Տեսահսկման ծառայություն պատվերների ստացման կետերի համար",
    buttons: ["Իմանալ ավելին"],
  },
  {
    image: Img3,
    title: "Վերածի՜ր հին գադջեթներն արագ․․․",
    description: "PowerPlay-ի և GFN.AM-ի հետ ցանկացած սարք խաղային է",
    buttons: ["Իմանալ ավելին"],
  },
  {
    image: Img4,
    title: "OVIO-ն և Վեգան ներկայացնում են",
    description: "Միացի՛ր OVIO-ին և կատարիր գնումներ Վեգայից ՄԵԾԱԾԱԽ գներով",
    buttons: ["Իմանալ ավելին"],
  },
];

const CARD_WIDTH = 532;
const CARD_MARGIN_RIGHT = 20;
const VISIBLE_CARDS = 3;

const SpecialOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = offers.length - VISIBLE_CARDS;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="p-10 bg-white rounded-2xl overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-left">Հատուկ առաջարկներ</h2>

      <div className="flex items-center relative">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`bg-white text-2xl p-3 rounded-full shadow-md mr-2 transition-opacity ${
            currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
          }`}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (CARD_WIDTH + CARD_MARGIN_RIGHT)
              }px)`,
            }}
          >
            {offers.map(({ image, title, description, buttons }, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[532px] h-[500px] mr-5 rounded-2xl relative flex items-end text-white shadow-lg"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                <div className="relative z-10 p-5 w-full rounded-b-2xl flex flex-col">
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{title}</h3>
                  <p className="text-sm mb-5 drop-shadow-lg">{description}</p>
                  <div className="mt-auto">
                    {buttons.map((btn, i) => (
                      <button
                        key={i}
                        className="bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className={`bg-white text-2xl p-3 rounded-full shadow-md ml-2 transition-opacity ${
            currentIndex === maxIndex ? "opacity-40 cursor-not-allowed" : ""
          }`}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SpecialOffers;
