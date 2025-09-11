import React, { useState } from "react";
import "./SpecialOffers.css";
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
    buttons: ["learn"],
  },
  {
    image: Img2,
    title: "2 ամիս անվճար",
    description: "Տեսահսկման ծառայություն պատվերների ստացման կետերի համար",
    buttons: ["learn"],
  },
  {
    image: Img3,
    title: "Վերածի՜ր հին գադջեթներն արագ․․․",
    description: "PowerPlay-ի և GFN.AM-ի հետ ցանկացած սարք խաղային է",
    buttons: ["learn"],
  },
  {
    image: Img4,
    title: "OVIO-ն և Վեգան ներկայացնում են",
    description: "Միացի՛ր OVIO-ին և կատարիր գնումներ Վեգայից ՄԵԾԱԾԱԽ գներով",
    buttons: ["learn"],
  },
];

const CARD_WIDTH = 532;
const CARD_MARGIN_RIGHT = 20;
const VISIBLE_CARDS = 3;

const SpecialOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = steps.length - VISIBLE_CARDS;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };
  return (
    <>
      <div className="special-offers-card">
        <h2>Հատուկ առաջարկներ</h2>

        <div className="special-offers-wrapper">
          <button
            className="scroll-button.left scroll-button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="special-offers-container">
            <div
              className="special-offers-inner"
              style={{
                transform: `translateX(-${
                  currentIndex * (CARD_WIDTH + CARD_MARGIN_RIGHT)
                }px)`,
              }}
            >
              {offers.map(({ image, title, description, buttons }, index) => (
                <div key={index} className="offer-card">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="offer-buttons">
                    {buttons.map((btn, i) => (
                      <button key={i} className="offer-btn">
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="scroll-button right"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
};
