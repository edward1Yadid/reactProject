import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import NavigateToComponents from '../core/router/NavigateToComponents';
import { useUser } from '../ui/Providers/user/UserProvider';
function Navitem({card}) { 
  const navigate=useNavigate()
  const {user}=useUser()
  return (

  <>
  <Box sx={{display:{xs:"none",md:"flex"}}}>
<Button variant="filled" sx={{color:"white"}}  onClick={()=>navigate(NavigateToComponents.About)}>
  <Typography variant="h5" color="white">About</Typography>
  </Button>
  {user && (
    <Button variant="filled" sx={{color:"white"}}  onClick={()=>navigate(NavigateToComponents.FavoriteCardPage)}>
  <Typography variant="h5" color="white">FAV CARDS</Typography>
</Button>
  )}

{user && user.isBusiness && (
<Button variant="filled" sx={{color:"white"}} onClick={()=>navigate(NavigateToComponents.MyCardsPage)}>
<Typography variant="h5" color="white">MY CARDS</Typography>
</Button>
)}
 
<Button variant="filled" sx={{color:"white"}}  onClick={()=>navigate(NavigateToComponents.Edit_User)}>
  <Typography variant="h5" color="white">edit_user</Typography>
  </Button>



</Box>
<Box sx={{display:{xs:"flex",md:"none"}}} >
<IconButton size='large' edge="start">
<MenuIcon  sx={{color:"white"}}></MenuIcon>
</IconButton>
</Box>
  </>

  )
}

export default Navitem
