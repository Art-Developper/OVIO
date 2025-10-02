import React from "react";
import Slider from "react-slick";

// Ներմուծեք react-slick-ի CSS ֆայլերը (սա շատ կարևոր է)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const slides = [
  {
    image: Img1,
    title: "Մինչև 40 000 ֏ նվեր",
    description: "Միացիր All in կամ Wi-fly փաթեթներից մեկին և ստացիր մինչև 40 000 դրամ նվեր բոնուսային հաշվին 💜",
    buttons: ["learn", "join"],
  },
  {
    image: Img2,
    title: "2 ամիս անվճար․ տեսահսկում",
    description: "Ընտրե՛ք անվտանգ լուծում պատվերների ստացման կետերի համար, ստացե՛ք հուսալի ամպային...",
    buttons: ["learn"],
  },
  {
    image: Img3,
    title: "Ամպային տեսահսկման ծառայություն",
    description: "Տեսահսկի՛ր տունդ, մուտքդ, մեքենադ՝ վճարելով ամսական սկսած 1550 դրամից",
    buttons: ["learn"],
  },
  {
    image: Img4,
    title: "OVIO տվյալների մշակման կնետրոն",
    description: "Պահպանե՛ք ձեր տվյալները Հայաստանում միակ TIER III սերտիֆիկացված տվյալների մշակման կենտրոնում ",
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
    buttons: ["learn", "join"],
  },
  {
    image: Img9,
    title: "Զգա՛ խաղը, փոխի՛ր իրականությունը",
    description: "Վերածե՛ք հին և թույլ համակարգիչը, պլանշետը կամ սմարթֆոնը սուպեր արագ սարքի մեկ քլիքով",
    buttons: ["learn", "powerplay"],
  },
  {
    image: Img10,
    title: "OVIO-ն ունի նոր հարթակ",
    description: "գտե՜ք ավելի քան 50 000 ֆիլմեր և սերիալներ, շատ TV ալիքներ Wink-ում՝ բաժանորդագրվելով OVIO-ին",
    buttons: ["learn", "join"],
  },
  {
    image: Img11,
    title: "Թեք StartUp",
    description: "Դիտե՜ք սիթքոմի բոլոր սերիաները Wink TV հարթակում",
    buttons: ["learn", "follow"],
  },
  {
    image: Img12,
    title: "OVIO",
    description: "Բացահայտիր․․․",
    buttons: [],
  },
];

const MyCarousel = () => {
  const settings = {
    dots: true,
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

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px", 
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px", display: "flex", gap: "10px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#fff", 
          opacity: "0.5",
          transition: "opacity 0.3s ease",
        }}
      ></div>
    ),
  };

  return (
    <div className="relative w-full bg-[#4B0082] text-white font-sans overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}

            className="flex flex-col md:flex-row items-center justify-center min-h-[500px] md:min-h-[774px] relative" 
          >

            <div className="w-full md:w-[45%] z-10 text-center md:text-left p-6 md:p-12 md:pl-24 order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
              <h1 className="text-3xl md:text-[3.5rem] font-light text-cyan-400 mb-4 md:mb-[15px] leading-tight md:text-left">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg mb-8 md:mb-[30px] max-w-[90%] mx-auto md:mx-0 md:text-left">
                {slide.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-[15px]">
                {slide.buttons.includes("learn") && (
                  <button className="px-6 py-3 text-base rounded-lg border border-white text-[#09020e] bg-white hover:bg-gray-200 transition">
                    Իմացիր ավելին
                  </button>
                )}
                {slide.buttons.includes("join") && (
                  <button className="px-6 py-3 text-base rounded-lg bg-cyan-400 text-[#4B0082] hover:bg-cyan-500 transition">
                    Միացիր հիմա
                  </button>
                )}
                {slide.buttons.includes("powerplay") && (
                  <button className="px-6 py-3 text-base rounded-lg bg-cyan-400 text-[#4B0082] hover:bg-cyan-500 transition">
                    Միացրու PowerPlay-ը
                  </button>
                )}
                {slide.buttons.includes("follow") && (
                  <button className="px-6 py-3 text-base rounded-lg bg-cyan-400 text-[#4B0082] hover:bg-cyan-500 transition">
                    Բաժանորդագրվի՜ր
                  </button>
                )}
              </div>
            </div>

            
            <div className="w-full md:w-[55%] flex justify-center md:justify-end items-center md:items-end overflow-hidden order-1 md:order-2 md:absolute md:right-0 md:top-0 md:h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}

                className="w-full h-auto md:h-full object-cover rounded-none md:rounded-l-[50%]"
                style={{objectFit: slide.image === Img12 ? 'contain' : 'cover',width: slide.image === Img12 ? '90%' : '100%' }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;