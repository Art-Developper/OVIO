import HeadBar from "../components/headBar";
import Header from "../components/Header";
import OvioCarousel from "../components/OvioCarousel"
import WhyOvio from "../components/WhyOvio";
import SpecialOffers from "../components/SpecialOffers";
import ItsConvenientWithUs from "../components/It'sconvenientwithus";

const HomePage = () => {
  return (
    <>
    <HeadBar></HeadBar>
    <Header></Header>
    <OvioCarousel></OvioCarousel>
    <WhyOvio></WhyOvio>
    <SpecialOffers></SpecialOffers>
    <ItsConvenientWithUs></ItsConvenientWithUs>
    </>
  );
};

export default HomePage;
