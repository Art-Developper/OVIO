import React, { useState } from "react";
import blue_background from "../assets/background_blue.png";
import green_background from "../assets/background_green.png";

const itsConvenientWithUs = [
  {
    background: blue_background,
    description: "Տան համար",
    text: "Ստացի՜ր հեռահաղորդակցության բոլոր ծառայությունները մեկ փաթեթով՝ գերարագ Ինտերներտ, Սմարթ TV և որակյալ հեռախոսակապ։",
    number: "1 / 3",
  },
  {
    background: green_background,
    description: "Հեռախոսային սպասարկում",
    text: "Կատարի՜ր գործարքներ ընդամենը մեկ զանգի միջողով՝ 060 46 00 00։",
    number: "2 / 3",
  },
  {
    background: blue_background,
    description: "Ձեր հաջողակ բիզնեսի համար",
    text: "Լավագույն նորարարական լուծումները Ձեր բիզնեսի համար՝ մատչելի պայմաններով։",
    number: "3 / 3",
  },
];

const CARD_WIDTH = 670;
const CARD_MARGIN_RIGHT = 20;
const VISIBLE_CARDS = 1;

const ItsConvenientWithUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = itsConvenientWithUs.length - VISIBLE_CARDS;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const translateX = -(currentIndex * (CARD_WIDTH + CARD_MARGIN_RIGHT));

  return (
    <div className="relative w-full max-w-[670px] mx-auto my-12 overflow-visible">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Previous"
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white text-2xl px-4 py-2 rounded-xl shadow-lg 
                   hover:bg-black/80 hover:scale-110 transition disabled:opacity-40 z-10"
      >
        ‹
      </button>

      {/* Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {itsConvenientWithUs.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[670px] min-h-[400px] mr-5 rounded-2xl shadow-xl p-8 flex flex-col justify-end text-white"
              style={{
                backgroundImage: `url(${card.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">{card.description}</h3>
              <p className="text-base leading-relaxed">{card.text}</p>
              <span className="mt-4 text-sm font-semibold">{card.number}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        aria-label="Next"
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white text-2xl px-4 py-2 rounded-xl shadow-lg 
                   hover:bg-black/80 hover:scale-110 transition disabled:opacity-40 z-10"
      >
        ›
      </button>
    </div>
  );
};

export default ItsConvenientWithUs;
