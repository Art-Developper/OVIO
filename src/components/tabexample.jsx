import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LanguageIcon from '@mui/icons-material/Language';
import TvIcon from '@mui/icons-material/Tv';
import WifiIcon from '@mui/icons-material/Wifi';

// Փաթեթների տվյալներ
const packages = {
  '1': [
    { title: 'Plan 1', internet: '100 Մբ/վ', tv: 'Wink TV', price: '7,500 ֏' },
    { title: 'Plan 2', internet: '200 Մբ/վ', tv: 'All Channels', price: '9,000 ֏' },
    { title: 'Plan 3', internet: '300 Մբ/վ', tv: 'Premium', price: '12,000 ֏' },
    { title: 'Plan 4', internet: '500 Մբ/վ', tv: 'Ultra HD', price: '15,000 ֏' },
    { title: 'Plan 5', internet: '1 Գբ/վ', tv: 'Full Pack', price: '20,000 ֏' },
  ],
  '2': [
    { title: 'All In 1', internet: '50 Մբ/վ', tv: 'Basic TV', price: '5,500 ֏' },
    { title: 'All In 2', internet: '150 Մբ/վ', tv: 'All Channels', price: '8,500 ֏' },
  ],
  '3': [
    { title: 'Wi-Fly 1', internet: '75 Մբ/վ', tv: 'Wi-Fly TV', price: '6,500 ֏' },
    { title: 'Wi-Fly 2', internet: '250 Մբ/վ', tv: 'Wi-Fly TV HD', price: '10,500 ֏' },
  ],
};

// Փաթեթի քարտ
function PackageCard({ pkg }) {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3, minWidth: 250, textAlign: 'center', mx: 1 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {pkg.title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
        <LanguageIcon color="primary" sx={{ mr: 1 }} />
        <Typography>Ինտերնետ՝ {pkg.internet}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
        <TvIcon color="secondary" sx={{ mr: 1 }} />
        <Typography>{pkg.tv}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
        <WifiIcon sx={{ mr: 1 }} />
        <Typography>WiFi</Typography>
      </Box>
      <Typography variant="h6" sx={{ mt: 2 }}>
        {pkg.price} / ամիս
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Միացնել հիմա
      </Button>
    </Paper>
  );
}

// Tabs + multi-card carousel կոմպոնենտ
export default function TabsWithMultiCarousel() {
  const [tabValue, setTabValue] = React.useState('1');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState('left');

  const itemsPerPage = 3; // Միանգամից քանի փաթեթ ցույց տալ

  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
    setCurrentIndex(0);
    setDirection('left');
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < packages[tabValue].length) {
      setDirection('left');
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection('right');
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentPackages = packages[tabValue].slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="Tabs with carousel">
            <Tab label="Լավագույնը" value="1" />
            <Tab label="All in" value="2" />
            <Tab label="Wi-Fly" value="3" />
          </TabList>
        </Box>

        {/* Carousel */}
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 450,
          }}
        >
          <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
            <ArrowBackIosIcon />
          </IconButton>

          <Box
            sx={{
              mx: 2,
              width: 1000, // parent Box լայնություն՝ երեք քարտի համար
              display: 'flex',
              justifyContent: 'flex-start',
              overflow: 'hidden',
            }}
          >
            <Slide
              direction={direction}
              in={true}
              mountOnEnter
              unmountOnExit
              key={`${tabValue}-${currentIndex}`}
            >
              <Box sx={{ display: 'flex' }}>
                {currentPackages.map((pkg) => (
                  <PackageCard key={pkg.title} pkg={pkg} />
                ))}
              </Box>
            </Slide>
          </Box>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= packages[tabValue].length}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </TabContext>
    </Box>
  );
}
