import { AppBar, Box } from '@mui/material'
import React from 'react'
import Leftnavbar from "./leftnavbar/Leftnavbar"
import Rightnavbar from './rightnavbar/Rightnavbar'
const Navbar = () => {
  return (
  <AppBar position="sticky" sx={{top:0,left:0,right:0}}>

<Box sx={{
  display:"flex",
  justifyContent:"space-between"
}}>
<Leftnavbar/>
<Rightnavbar/>
</Box>

  </AppBar>
  )
}

export default Navbar
