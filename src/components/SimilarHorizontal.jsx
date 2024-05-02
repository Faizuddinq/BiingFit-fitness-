import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import ExerciseCard from './ExerciseCard';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

//added app.css for error in horiz bar otherwise can install older ver 
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  
  
  const SimilarHorizontal=({targetMuscleExercises})=>{
    

return (
  <>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        { //data tha
            targetMuscleExercises?.map((item)=>(
        <Box
            key={item.id || item.text}
            itemId={item.id || item.text}
            title={item.id || item.text}
            m="0 40px">  
                <ExerciseCard exercise={item}/>

        </Box>
            ))
        }
    </ScrollMenu>
  </>

)

}
export default SimilarHorizontal;