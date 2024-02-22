import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import GeneralPageCompenent from '../components/generalPage/GeneralPageCompenent';
import { useParams } from 'react-router-dom';
import useFetchCards from '../../core/hooks/cards/useFetchCards';
import { Box, Typography } from '@mui/material';


const CardDetailPage = () => {
    
    const { id } = useParams();

    const { value: {card} , handleGetoneCard } = useFetchCards();
    useEffect( () => {
      handleGetoneCard(id);
    }, [id]);

    const items = [ `title:${card?.title}`, `phone:${card?.phone}`, `subtitle:${card?.subtitle}`];

  return (
<Container maxWidth="xl" >
  
  <GeneralPageCompenent
  title={"Business Details"}
  subtitle='Here you can find all the information about the customer business card.'
  >
  </GeneralPageCompenent>
 <Container maxWidth="lg" sx={{display:"flex", gap:"2rem",alignItems:"start",flexWrap:"wrap"}} >
  <Box sx={{display:"flex", gap:"2rem",alignItems:"start",flexDirection:"row",maxWidth:"lg"}} >
  <Box  >
<img src={`${card?.image.url}`} alt={`${card?.image.alt}`}/>
</Box>
<Box >
{
    items.map((item, index) => (
      <Typography key={index} variant="h1" color="initial">
       {index+1}:{item}
      </Typography>
 ))}
</Box>

  </Box>

 </Container>
</Container>




  )
}

export default CardDetailPage
