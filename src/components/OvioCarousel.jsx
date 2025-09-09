import React from "react";
import Slider from "react-slick";
import "./OvioCarousel.css";

import Img1 from "../assets/OVIO.png";
import Img2 from "../assets/Special.png";
import Img3 from "../assets/Special-2.png";
import Img4 from "../assets/OVIO-Data-Center.png";
import Img5 from "../assets/FastSport.png";
import Img6 from "../assets/Girlwithrobot.png";
import Img7 from "../assets/OVIOawatch.png";
import Img8 from "../assets/Happygirl.png";
import Img9 from "../assets/Game.png";
import Img10 from "../assets/Happyman.png";
import Img11 from "../assets/StartUp.png";
import Img12 from "../assets/UfoyzfEOudalkFWsAaV4waAUt6OHoU8MchUCNKWY.jpg";

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
    adaptiveHeight: false,
    lazyLoad: true,
  };

  const slides = [
    {
      image: Img1,
      title: "Մինչև 40 000 ֏ նվեր",
      description:
        "Միացիր All in կամ Wi-fly փաթեթներից մեկին և ստացիր մինչև 40 000 դրամ նվեր բոնուսային հաշվին 💜",
      buttons: ["learn", "join"],
    },
    {
      image: Img2,
      title: "2 ամիս անվճար․ տեսահսկում",
      description:
        "Ընտրե՛ք անվտանգ լուծում պատվերների ստացման կետերի համար, ստացե՛ք հուսալի ամպային...",
      buttons: ["learn"],
    },
    {
      image: Img3,
      title: "Ամպային տեսահսկման ծառայություն",
      description:
        "Տեսահսկի՛ր տունդ, մուտքդ, մեքենադ՝ վճարելով ամսական սկսած 1550 դրամից",
      buttons: ["learn"],
    },
    {
      image: Img4,
      title: "OVIO տվյալների մշակման կնետրոն",
      description:
        "Պահպանե՛ք ձեր տվյալները Հայաստանում միակ TIER III սերտիֆիկացված տվյալների մշակման կենտրոնում ",
      buttons: ["learn"],
    },
    {
      image: Img5,
      title: "Դիտի՜ր ֆուտբոլի TOP լիգաները",
      description: "Սպորտն ավելի մոտ է OIVO-ի հետ",
      buttons: [],
    },
    {
      image: Img6,
      title: "Երաշխավորված ինտերնետ",
      description: "Ձեր հաջողակ բիզնեսի համար",
      buttons: ["learn"],
    },
    {
      image: Img7,
      title: "Ստեղծի՛ր սմարթ իրականություն",
      description: "Գնի՛ր սմարթ սարքեր OVIO-ի սպասարկման սրահներից",
      buttons: ["learn"],
    },
    {
      image: Img8,
      title: "OVIO-ի հետ հարմար է",
      description: "Մեծածախ գներ Վեգայում՝ միայն OVIO-ի բաժանորդների համար",
      buttons: ["learn","join"],
    },
    {
      image: Img9,
      title: "Զգա՛ խաղը, փոխի՛ր իրականությունը",
      description:
        "Վերածե՛ք հին և թույլ համակարգիչը, պլանշետը կամ սմարթֆոնը սուպեր արագ սարքի մեկ քլիքով",
      buttons: ["learn","powerplay"],
    },
    {
      image: Img10,
      title: "OVIO-ն ունի նոր հարթակ",
      description:
        "գտե՜ք ավելի քան 50 000 ֆիլմեր և սերիալներ, շաատ TV ալիքներ Wink-ում՝ բաժանորդագրվելով OVIO-ին",
      buttons: ["learn", "join"],
    },
    {
      image: Img11,
      title: "Թեք StartUp",
      description: "Դիտե՜ք սիթքոմի բոլոր սերիաները Wink TV հարթակում",
      buttons: ["learn","follow"],
    },
    {
      image: Img12,
      title: "OVIO",
      description: "Բացահայտիր․․․",
      buttons: [],
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
                {slide.buttons.includes("learn") && (
                  <button className="btn-outline">Իմացիր ավելին</button>
                )}
                {slide.buttons.includes("join") && (
                  <button className="btn-filled">Միացիր հիմա</button>
                )}
                {slide.buttons.includes("powerplay") && (
                  <button className="btn-filled">Միացրու PowerPlay-ը</button>
                )}
                {slide.buttons.includes("follow") &&(
                  <button className="btn-filled">Բաժանորդագրվի՜ր</button>
                )}
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