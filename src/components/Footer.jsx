import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo_name.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img className='footer_logo' src={Logo} alt="logo" style={{ width: '280px', height: '58px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '26px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">&#169; Fitness Project 2024<br/> 
    This is an educational purpose project.
    </Typography>
  </Box>
);

export default Footer;