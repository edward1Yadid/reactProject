import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchBar from './searchbar/SearchBar'
import { Box, IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuBarRight from './searchbar/MenuBarRight';
import NotLoggedinUser from './searchbar/NotLoggedinUser';
import { useTheme } from '../../../ui/Providers/ThemeProvider';
import { useUser } from '../../../ui/Providers/user/UserProvider';
function Rightnavbar() {
  const {isDark,toggleDarkMode}=useTheme()
  const {user}=useUser()
  return (
   <Box sx={{maxWidth:"550px",display:"flex", flexDirection:"row ", alignItems:"center", gap:"3rem"}}>
<SearchBar></SearchBar>
<IconButton onClick={toggleDarkMode}>

{isDark ? <LightModeIcon/> : <DarkModeIcon/>}
</IconButton>

{!user && (
  <NotLoggedinUser/>
)}
{user && (
  <MenuBarRight></MenuBarRight>

)}




  
   </Box>
    
    
  )
}

export default Rightnavbar
