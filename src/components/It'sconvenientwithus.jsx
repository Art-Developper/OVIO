import React, { useState } from "react";
import blue_background from "../assets/background_blue.png";
import green_background from "../assets/background_green.png";
import "./It`sconvenientwithus.css";

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

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const translateX = -(currentIndex * (CARD_WIDTH + CARD_MARGIN_RIGHT));

    return (
        <div className="carousel-container">
            <button
                className="scroll-button left"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous"
            >
                ‹
            </button>
            <div className="carousel-wrapper">
                <div
                    className="carousel-cards"
                    style={{
                        transform: `translateX(${translateX}px)`,
                        transition: "transform 0.5s ease",
                    }}
                >
                    {itsConvenientWithUs.map((card, index) => (
                        <div
                            className="carousel-card"
                            key={index}
                            style={{
                                width: CARD_WIDTH,
                                marginRight: CARD_MARGIN_RIGHT,
                                backgroundImage: `url(${card.background})`,
                            }}
                        >
                            <h3>{card.description}</h3>
                            <p>{card.text}</p>
                            <span>{card.number}</span>
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
    );
};

export default ItsConvenientWithUs;
