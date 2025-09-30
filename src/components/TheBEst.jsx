import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// Images
import viju from "../assets/viju.jpg";
import vijusport from "../assets/VijuSport.jpg";
import vijuplanet from "../assets/VijuPlanet.jpg";
import vijuserial from "../assets/VijuSerial.jpg";
import vijucomedy from "../assets/VijuComedy.jpg";
import vijumegahit from "../assets/VijuMegajit.jpg";
import vijuhistory from "../assets/VijuHistory.jpg";
import vijunature from "../assets/VijuNature.jpg";
import vijuexplore from "../assets/VijuExplore.jpg";
import vijutv1000action from "../assets/VijuTv1000Action.jpg";
import vijutv1000russian from "../assets/VijuTv1000Russian.jpg";
import davinchi from "../assets/DaVinchi.jpg";

import shanttv from "../assets/Shant.png";
import shantpremium from "../assets/Shant_HD.png";
import shanthd from "../assets/Shant_HD_1629105724.png";
import shantserial from "../assets/Shant_Serial.png";
import shantgyumri from "../assets/Shant_Gyumri.png";
import shantmusic from "../assets/Shant_Music.png";
// import shantnews from "../assets/ShantNews.png";

const channels = {
  viju: [
    { background_image: viju, text: "viju", description: "viju լավագույն ալիքները" },
    { background_image: vijusport, text: "viju+sport" },
    { background_image: vijuplanet, text: "viju+planet" },
    { background_image: vijuserial, text: "viju+serial" },
    { background_image: vijucomedy, text: "viju+comedy" },
    { background_image: vijumegahit, text: "viju+megahit" },
    { background_image: vijuhistory, text: "viju+history" },
    { background_image: vijunature, text: "viju+nature" },
    { background_image: vijuexplore, text: "viju+explore" },
    { background_image: vijutv1000action, text: "viju tv 1000 action" },
    { background_image: vijutv1000russian, text: "viju tv 1000 русское" },
    { background_image: davinchi, text: "da vinchi" },
  ],
  shant: [
    { background_image: shanttv, text: "Shant TV" },
    { background_image: shantpremium, text: "Shant Premium" },
    { background_image: shanthd, text: "Shant HD" },
    { background_image: shantserial, text: "Shant Serial" },
    { background_image: shantgyumri, text: "Shant Gyumri" },
    { background_image: shantmusic, text: "Shant Music" },
    // { background_image: shantnews, text: "Shant News" },
  ],
};

export default function ChannelCarousel() {
  const [tab, setTab] = React.useState("viju");
  const scrollRef = React.useRef(null);
  const scrollAmount = 250;

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden", p: 2 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Լավագույն ալիքներ
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab value="viju" label="Viju" />
        <Tab value="shant" label="Shant" />
      </Tabs>

      {/* Carousel */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          onClick={() => scroll("left")}
          aria-label="scroll left"
          sx={{
            display: { xs: "none", md: "flex" },
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            py: 1,
          }}
        >
          {channels[tab].map((channel, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: 650,
                height: 400,
                backgroundImage: `url(${channel.background_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                color: "white",
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
                scrollSnapAlign: "start",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 0 15px rgba(0,0,0,0.6)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  p: 1.5,
                }}
              >
                <Typography variant="subtitle1" noWrap>
                  {channel.text}
                </Typography>
                {channel.description && (
                  <Typography variant="caption" noWrap sx={{ opacity: 0.8 }}>
                    {channel.description}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={() => scroll("right")}
          aria-label="scroll right"
          sx={{
            display: { xs: "none", md: "flex" },
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
