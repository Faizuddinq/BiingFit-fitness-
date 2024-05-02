import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link 
  to={`/exercise/${exercise.id}`}
  className="exercise-card" 
  >
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button className='exer-card-btn' sx={{ ml: '21px', color: '#fff', background: '#FFA9A9','&:hover': {
      backgroundColor: '#5BC0EB',
    }, fontSize: '14px', borderRadius: '20px' }}>
        {exercise.bodyPart}
      </Button>
      <Button className='exer-card-btn' sx={{ ml: '21px', color: '#fff', background: '#FCC757','&:hover': {
      backgroundColor: '#5BC0EB',
    }, fontSize: '14px', borderRadius: '20px' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;