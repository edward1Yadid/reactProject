import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigateToComponents from "../../../../core/router/NavigateToComponents"

import { useUser } from '../../../../ui/Providers/user/UserProvider'
const NotLoggedinUser = () => {
    const {user}=useUser()
    const navigate=useNavigate()
  return (
    <>
    {!user && 
  <Box sx={{display:{xs:"none",md:"flex"}}}>
  <Button variant="outlined" sx={{color:"white"}} onClick={()=>navigate(NavigateToComponents.SignUp)}>
    <Typography variant="h5" color="white">Sing up</Typography>
  </Button>
  <Button variant="outlined" sx={{color:"white"}} onClick={()=>navigate(NavigateToComponents.LoginPage)}>
    <Typography variant="h5" color="white">Login</Typography>
  </Button>
  </Box>
}
    </>
  )
}

export default NotLoggedinUser
