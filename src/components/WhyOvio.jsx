import React, { useState } from "react";
// import "./WhyOvio.css"; // Սա հեռացնում ենք, քանի որ օգտագործում ենք Tailwind

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

const CARD_WIDTH = 380;
const CARD_MARGIN_RIGHT = 20;
const VISIBLE_CARDS_CALC = 1; 

const WhyOvio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = steps.length - VISIBLE_CARDS_CALC; 

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="p-5 max-w-[80%] mx-auto font-sans">
      <h2 className="mb-6 font-bold text-3xl text-left">Ի՞նչու է OVIO-ն</h2>

      <div className="relative flex items-center justify-center gap-2.5 w-full max-w-full px-2.5 box-border overflow-hidden">
        <button
          className="scroll-button-common -left-16 text-[#e60073] shadow-[0_0_8px_rgba(255,0,128,0.4)]"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          &lt;
        </button>

        <div className="w-full overflow-hidden rounded-xl bg-white shadow-md relative">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out py-5 box-content"
            style={{
              transform: `translateX(-${
                currentIndex * (CARD_WIDTH + CARD_MARGIN_RIGHT)
              }px)`,
            }}
          >
            {steps.map(({ number, title, description, color }) => (
              <div
                className="step-card flex-shrink-0 flex p-5 relative rounded-xl shadow-lg bg-white w-[380px] h-[125px]"
                key={number}
              >
                {/* Step Number */}
                <div
                  className="step-number-style flex items-center justify-center mr-5 relative -left-4 w-15 h-25 rounded-r-full text-white font-bold text-2xl select-none shadow-[0_0_8px_rgb(0_0_0_/_0.1)]"
                  style={{ backgroundColor: color }}
                >
                  {number}
                </div>
                {/* Step Content */}
                <div className="step-content">
                  <h3 className="m-0 mb-2 text-xl font-semibold">{title}</h3>
                  <p className="m-0 text-[#666] text-sm leading-tight">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="scroll-button-common right-2.5 text-[#e60073] shadow-[0_0_14px_rgba(255,0,128,0.6)]"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex} // Changed condition for maxIndex
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default WhyOvio;