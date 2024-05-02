import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, img, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      border: bodyPart === item ? '5px solid #DE7456':'#fff',
     background: '#fff',
      borderBottomLeftRadius: '20px',
      width: '250px', 
      height: '260px', 
      cursor: 'pointer',
       gap: '47px' } }
  

    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={img} alt="bodypart.png" style={{ width: '50px', height: '50px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#2B3240" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;