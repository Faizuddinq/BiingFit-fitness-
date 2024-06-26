import { Box } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail]=useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const {id}=useParams();

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(()=>{
    const fetchExercisesData=async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
        ///q and query ka error tha isliye 400 aaya
      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents); //contents tha

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);

    }
    fetchExercisesData();
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos 
      exerciseVideos={exerciseVideos}
      name={exerciseDetail.name}
      />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}
      equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetails