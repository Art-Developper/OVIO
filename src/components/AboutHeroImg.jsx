import Img from "../assets/UfoyzfEOudalkFWsAaV4waAUt6OHoU8MchUCNKWY.jpg";

const AboutHeroSection = () => {
  return (
    <div className="relative w-full bg-[#4B0082] text-white font-sans overflow-hidden min-h-[500px] flex items-center justify-center">
      <div className="w-full md:w-1/2 z-10 text-center md:text-left p-6 md:pl-24 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-light text-cyan-400 mb-2 leading-tight">
          OVIO
        </h1>
        <p className="text-xl md:text-2xl max-w-[90%] mx-auto md:mx-0">
          Բացահայտի՛ր...
        </p>
      </div>

    
      <div className="relative w-full md:w-1/2 flex justify-center items-center md:items-end h-full md:min-h-[500px]">
        <img
          src={Img}
          alt="OVIO - Բացահայտի՛ր"
          className="w-full h-full object-cover rounded-none md:rounded-l-[50%]"
        />
        {/* Եթե ցանկանում եք նկարի վրա ունենալ "բացահայտի՛ր" տեքստը, կարող եք այն ավելացնել այստեղ։ */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold">
          Բացահայտի՛ր
        </div> */}
      </div>
    </div>
  );
};

export default AboutHeroSection;