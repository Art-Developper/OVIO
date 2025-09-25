import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse"; // Ավելացնում ենք Collapse կոմպոնենտը
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LanguageIcon from "@mui/icons-material/Language";
import TvIcon from "@mui/icons-material/Tv";
import WifiIcon from "@mui/icons-material/Wifi";
import FlashOnIcon from "@mui/icons-material/FlashOn"; // Նոր Icon
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay"; // Նոր Icon (հեռուստացույցի համար)
import DevicesIcon from "@mui/icons-material/Devices"; // Նոր Icon (էկրանների համար)
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Նոր Icon (Catch-Up-ի համար)
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"; // Նոր Icon (Նվերի համար)
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Նոր Icon (սլաքի համար)
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Նոր Icon (սլաքի համար)

// Փաթեթների տվյալներ
const packages = {
  1: [
    {
      title: "All in տարեկան 1",
      internet: "100 Մբ/վ",
      tvPlatform: "Wink TV հարթակ",
      tvDescription: "Լավագույն ֆիլմերն ու սերիալները",
      channels: "115",
      screens: "5 էկրանով",
      catchUp: "3 օր",
      wifi: true,
      specialOffer: {
        text: "Հատուկ առաջարկ նախատեսված է նոր բաժանորդների համար",
        gift: "8,000 ֏",
      },
      price: "7,500 ֏",
      buttonText: "Միացնել հիմա",
    },
    {
      title: "All in տարեկան 2",
      internet: "150 Մբ/վ",
      tvPlatform: "Wink TV հարթակ",
      tvDescription: "Լավագույն ֆիլմերն ու սերիալները",
      channels: "150",
      screens: "5 էկրանով",
      catchUp: "7 օր",
      wifi: true,
      price: "8,500 ֏",
      buttonText: "Միացնել հիմա",
    },
    {
      title: "All in տարեկան 3",
      internet: "300 Մբ/վ",
      tvPlatform: "Wink TV հարթակ",
      tvDescription: "Լավագույն ֆիլմերն ու սերիալները",
      channels: "200",
      screens: "10 էկրանով",
      catchUp: "14 օր",
      wifi: true,
      specialOffer: {
        text: "Մեծ զեղչ նոր բաժանորդների համար",
        gift: "10,000 ֏",
      },
      price: "9,900 ֏",
      buttonText: "Միացնել հիմա",
    },
    {
      title: "Wi-fly տարեկան 1",
      internet: "100 Մբ/վ",
      wifi: true,
      price: "6,000 ֏",
      buttonText: "Միացնել հիմա",
    },
    {
      title: "Wi fly տարեկան 2",
      internet: "200 Մբ/վ",
      wifi: true,
      price: "7,000 ֏",
      buttonText: "Միացնել հիմա",
    },
  ],
  2: [
    {
      title: "All In 1",
      internet: "50 Մբ/վ",
      tvPlatform: "Basic TV",
      channels: "80",
      screens: "5 էկրանով",
      wifi: true,
      price: "5,500 ֏",
      buttonText: "Միացնել հիմա",
    },
    {
      title: "All In 2",
      internet: "150 Մբ/վ",
      tvPlatform: "All Channels",
      channels: "130",
      screens: "5 էկրանով",
      catchUp: "3 օր",
      wifi: true,
      price: "8,500 ֏",
      buttonText: "Միացնել հիմա",
    },
    {
      title: "All in տարեկան 3",
      internet: "300 Մբ/վ",
      tvPlatform: "All Channels",
      channels: "130",
      screens: "5 էկրանով",
      catchUp: "3 օր",
      wifi: true,
      tv: "Premium",
      price: "9,900 ֏",
    },
    { title: "All in տարեկան 4" },
    { title: "All in տարեկան 5" },
  ],
  3: [
    {
      title: "Wi-Fly 1",
      internet: "75 Մբ/վ",
      wifi: true,
      price: "6,500 ֏",
      buttonText: "Միացնել հիմա",
    },
    {
      title: "Wi-Fly 2",
      internet: "250 Մբ/վ",
      wifi: true,
      price: "10,500 ֏",
      buttonText: "Միացնել հիմա",
    },
    {},
    {},
  ],
};

// Փաթեթի քարտ
function PackageCard({ pkg }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Եթե փաթեթը դատարկ է, ոչինչ չենք ցուցադրում
  if (!pkg || !pkg.title) {
    return null;
  }

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        minWidth: 280, // Ավելացնում ենք լայնությունը նկարին համապատասխան
        height: "auto", // Բարձրությունը դարձնում ենք auto
        textAlign: "left", // Տեքստը դեպի ձախ
        mx: 1,
        mb: 2, // Մի փոքր բացատ ցույց տալու համար
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Բովանդակությունը տարածել քարտի բարձրությամբ
        overflow: "hidden", // Թաքցնել այն, ինչը դուրս է գալիս քարտի սահմաններից
      }}
    >
      {/* Վերևի մանուշակագույն հատված */}
      <Box
        sx={{
          background: "linear-gradient(45deg, #7B24B3 30%, #4B0082 90%)", // Մանուշակագույն գրադիենտ
          color: "white",
          p: 2,
          pb: 4, // Ավելի մեծ ներքևի բացատ
          borderRadius: "12px 12px 0 0", // Միայն վերևի անկյունները կլորացված
          textAlign: "center",
          mb: 2, // Բացատ ներքևի բովանդակության հետ
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {pkg.title}
        </Typography>
      </Box>

      {/* Ծառայությունների ցանկ */}
      <Box sx={{ p: 2, flexGrow: 1 }}>
        {" "}
        {/* flexGrow-ը թույլ կտա այս հատվածին զբաղեցնել առավելագույն տարածքը */}
        {pkg.internet && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <LanguageIcon color="primary" sx={{ mr: 1 }} />
            <Typography>Ինտերնետ՝ {pkg.internet}</Typography>
          </Box>
        )}
        {pkg.tvPlatform && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <FlashOnIcon color="action" sx={{ mr: 1, color: "#FF5722" }} />{" "}
            {/* Օրինակ՝ նարնջագույն */}
            <Typography>{pkg.tvPlatform}</Typography>
          </Box>
        )}
        {pkg.tvDescription && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, ml: 3 }}>
            {" "}
            {/* Ներքաշված */}
            {/* <MovieIcon sx={{ mr: 1, color: 'text.secondary' }} /> */}
            <Typography variant="body2" color="text.secondary">
              {pkg.tvDescription}
            </Typography>
          </Box>
        )}
        {pkg.channels && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <SmartDisplayIcon color="info" sx={{ mr: 1 }} />
            <Typography>Ալիքներ՝ {pkg.channels}</Typography>
          </Box>
        )}
        {pkg.screens && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <DevicesIcon color="success" sx={{ mr: 1 }} />
            <Typography>Միաժամանակ՝ {pkg.screens}</Typography>
          </Box>
        )}
        {pkg.catchUp && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <AccessTimeIcon color="warning" sx={{ mr: 1 }} />
            <Typography>Catch-Up՝ {pkg.catchUp}</Typography>
          </Box>
        )}
        {pkg.wifi && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <WifiIcon sx={{ mr: 1 }} />
            <Typography>WiFi</Typography>
          </Box>
        )}
      </Box>

      {/* Հատուկ առաջարկի բաժին */}
      {pkg.specialOffer && (
        <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
          <Button
            onClick={handleExpandClick}
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "text.primary",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            <Typography variant="body2" color="text.secondary">
              {pkg.specialOffer.text}
            </Typography>
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
                ml: 1,
                p: 1,
                borderRadius: 1,
                background: "#f5f5f5",
              }}
            >
              <CardGiftcardIcon color="error" sx={{ mr: 1 }} />
              <Typography variant="body1" fontWeight="bold">
                Նվեր {pkg.specialOffer.gift}
              </Typography>
            </Box>
          </Collapse>
        </Box>
      )}

      {/* Գին և կոճակ */}
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mt: 2, color: "#4B0082" }}
        >
          {" "}
          {/* Մանուշակագույն գին */}
          {pkg.price}
          <Typography
            component="span"
            variant="body1"
            sx={{ ml: 1, color: "text.secondary" }}
          >
            / Ամսական
          </Typography>
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            background: "linear-gradient(45deg, #7B24B3 30%, #4B0082 90%)", // Մանուշակագույն գրադիենտ կոճակ
            color: "white",
            borderRadius: 2,
            py: 1.5,
            px: 4,
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          {pkg.buttonText || "Միացնել հիմա"}
        </Button>
      </Box>
    </Paper>
  );
}

export default function TabsWithMultiCarousel() {
  const [tabValue, setTabValue] = React.useState("1");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState("left");

  const itemsPerPage = 3;

  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
    setCurrentIndex(0);
    setDirection("left");
  };

  const handleNext = () => {
    if (
      packages[tabValue] &&
      currentIndex + itemsPerPage < packages[tabValue].length
    ) {
      setDirection("left");
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("right");
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentPackages = packages[tabValue]
    ? packages[tabValue].slice(currentIndex, currentIndex + itemsPerPage)
    : [];

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="Tabs with carousel">
            <Tab label="Լավագույնը" value="1" />
            <Tab label="All in" value="2" />
            <Tab label="Wi-Fly" value="3" />
          </TabList>
        </Box>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 600, // Ավելացրել ենք բարձրությունը, քանի որ քարտերը ավելի մեծ են դարձել
          }}
        >
          <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
            <ArrowBackIosIcon />
          </IconButton>

          <Box
            sx={{
              mx: 2,
              width: 1000,
              display: "flex",
              justifyContent: "flex-start",
              overflow: "hidden",
            }}
          >
            <Slide
              direction={direction}
              in={true}
              mountOnEnter
              unmountOnExit
              key={`${tabValue}-${currentIndex}`}
            >
              <Box sx={{ display: "flex" }}>
                {currentPackages.map((pkg, index) => (
                  <PackageCard key={pkg.title || `empty-${index}`} pkg={pkg} />
                ))}
              </Box>
            </Slide>
          </Box>

          <IconButton
            onClick={handleNext}
            disabled={
              !packages[tabValue] ||
              currentIndex + itemsPerPage >= packages[tabValue].length
            }
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </TabContext>
    </Box>
  );
}
