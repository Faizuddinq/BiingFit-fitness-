import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import All from "../assets/icons/All.png";
import Arms from "../assets/icons/arms.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import LowerLegs from "../assets/icons/LowerLegs.png";
import UpperLegs from "../assets/icons/upperLegs.png";
import Neck from "../assets/icons/neck.png";
import Shoulder from "../assets/icons/shoulder.png";
import Waist from "../assets/icons/waist.png";
import Cardio from "../assets/icons/cardio.png";
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
  

const HorizontalScrollbar=({data, BodyParts, setBodyPart, isBodyParts})=>{
  const BodyPartImage = [
    {
      text: "1",
      img: All,
    },
    {
      text: "2",
      img: Back,
    },
    {
      text: "3",
      img: Cardio,
    },
    {
      text: "4",
      img: Chest,
    },
    {
      text: "5",
      img: Arms,
    },
    {
      text: "6",
      img: LowerLegs,
    },
    {
      text: "7",
      img: Neck,
    },
    {
      text: "8",
      img: Shoulder,
    },
    {
      text: "9",
      img: Arms,
    },
    {
      text: "10",
      img: UpperLegs,
    },
    {
      text: "11",
      img: Waist,
    },
  ];

  for (let i = 0; i < 11; i++) {
    BodyPartImage[i].text = data[i];
  }


return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        { //data tha
            BodyPartImage.map((item)=>(
        <Box
            key={item.id || item.text}
            itemId={item.id || item.text}
            title={item.id || item.text}
            m="0 40px">
                
                {isBodyParts ? < BodyPart item={item.text}
                img={item.img}
                BodyPart={BodyPart} setBodyPart={setBodyPart}/> : 
                <ExerciseCard exercise={item}/>}
        </Box>
            ))
        }
    </ScrollMenu>
)

}
export default HorizontalScrollbar;