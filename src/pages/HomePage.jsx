import HeadBar from "../components/headBar";
import Header from "../components/Header";
import OvioCarousel from "../components/OvioCarousel"
import WhyOvio from "../components/WhyOvio";
import SpecialOffers from "../components/SpecialOffers";
import ItsConvenientWithUs from "../components/It'sconvenientwithus";
import TabsWithSlide from "../components/tabexample";
import OvioViedo from "../components/OvioViedo";
import Footer from "../components/footer";
import TheBest from "../components/TheBEst";
// import ChatWidget from "../components/ChatWidget";

const HomePage = () => {
  return (
    <>
    <HeadBar></HeadBar>
    <Header></Header>
    <OvioCarousel></OvioCarousel>
    <WhyOvio></WhyOvio>
    <SpecialOffers></SpecialOffers>
    <TabsWithSlide></TabsWithSlide>
    <OvioViedo></OvioViedo>
    <ItsConvenientWithUs></ItsConvenientWithUs>
    <TheBest></TheBest>
    {/* <ChatWidget></ChatWidget> */}
    <Footer></Footer>
    </>
  );
};

export default HomePage;
