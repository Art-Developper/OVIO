import React from "react";
import Slider from "react-slick";
import "./OvioCarousel.css";

import Img1 from "../assets/OVIO.png";
import Img2 from "../assets/Special.png";
import Img3 from "../assets/Special-2.png";

const MyCarousel = () => {
const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  swipe: true,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  lazyLoad: true,
};
  const slides = [
    {
      image: Img1,
      title: "Մինչև 40 000 ֏ նվեր",
      description:
        "Միացիր All in կամ Wi-fly փաթեթներից մեկին և ստացիր մինչև 40 000 դրամ նվեր բոնուսային հաշվին 💜",
    },
    {
      image: Img2,
      title: "Մյուս ակցիան",
      description:
        "Ստացիր յուրահատուկ առաջարկներ մեր մյուս ծառայություններից օգտվելիս։",
    },
    {
      image: Img3,
      title: "Երրորդ սլայդ",
      description: "Սա օրինակ է թե ինչպես ավելացնել տարբեր սլայդներ՝ նույն ոճով։",
    },
  ];

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-content" key={index}>
            <div className="carousel-text">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="carousel-buttons">
                <button className="btn-outline">Իմացիր ավելին</button>
                <button className="btn-filled">Միացիր հիմա</button>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
