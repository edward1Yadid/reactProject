import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import GeneralPageCompenent from '../components/generalPage/GeneralPageCompenent'
import NavigateToComponents from '../../core/router/NavigateToComponents';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import ExpirienceCustomers from '../../core/store/ExpirienceCustomers'
import useFetchCards from '../../core/hooks/cards/useFetchCards';
import { useUser } from '../Providers/user/UserProvider';
function MyCardPage() {
  const {value:{isloading,error,cards},handleGetMyCards,handleDeleteCard}=useFetchCards()
  const { user } = useUser();
  const navigate=useNavigate()

  useEffect(  ()=>  {
    if(!user) {navigate(NavigateToComponents.LoginPage)}
    else (handleGetMyCards())
  }, [user]);


  const deleteMyCard= async (cardid)=>{
    await handleDeleteCard(cardid)
    await  handleGetMyCards()
  }

  return (
    <div>
   
      <GeneralPageCompenent title={"my Business Card Page"} subtitle={"here you can see your card that you created"}></GeneralPageCompenent>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={()=>{navigate(NavigateToComponents.CREATE_CARD)}}>
        <AddIcon />
      </Fab>
      </Box>
      <ExpirienceCustomers isloading={isloading} errro={error} cards={cards} deleteMyCard={deleteMyCard} />

    </div>
  )
}

export default MyCardPage
