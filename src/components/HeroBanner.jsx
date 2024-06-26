import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/hero_banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#DE7456" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} color='#2B3240' sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      <span style={{color:'#2B3240'}}>Sweat, </span> Smile <br />
      And Repeat 
    </Typography>
    <Typography color='#43597D' fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#DE7456', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '12px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;