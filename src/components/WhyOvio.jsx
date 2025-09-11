import React, { useState } from "react";
import "./WhyOvio.css";

const steps = [
  {
    number: 1,
    title: "Հուսալի է",
    description: "Եթե միջազգայնորեն ճանաչված բրաուզեր ունեք",
    color: "#00e9dd",
  },
  {
    number: 2,
    title: "Կարյուն է",
    description: "Համատեղել դիվերսիֆիկացված մեթոդներ",
    color: "#5e00b3",
  },
  {
    number: 3,
    title: "Վստահելի է",
    description: "Տրամադրում է տվյալներ ՀՀ 19 քաղաքներում",
    color: "#00e9dd",
  },
  {
    number: 4,
    title: "Նորարար է",
    description: "Թվային ծառայությունների համար",
    color: "#5e00b3",
  },
  {
    number: 5,
    title: "Ճկուն է",
    description: "Ծառայությունների ընտրության լայն հնարավորություն է",
    color: "#00e9dd",
  },
];

const CARD_WIDTH = 280;
const CARD_MARGIN_RIGHT = 20;
const VISIBLE_CARDS = 2;

const WhyOvio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = steps.length - VISIBLE_CARDS;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="why-ovio-wrapper">
      <h2>Ի՞նու է OVIO-ն</h2>

      <div className="steps-wrapper">
        <button
          className="scroll-button.left scroll-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="steps-container">
          <div
            className="steps-inner"
            style={{
              transform: `translateX(-${
                currentIndex * (CARD_WIDTH + CARD_MARGIN_RIGHT)
              }px)`,
            }}
          >
            {steps.map(({ number, title, description, color }) => (
              <div className="step" key={number}>
                <div
                  className="step-number"
                  style={{ backgroundColor: color }}
                >
                  {number}
                </div>
                <div className="step-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
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
  );
};

export default WhyOvio;