import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PortraitIcon from "@mui/icons-material/Portrait";
import { Box } from '@mui/material';
import NavigateToComponents from '../../core/router/NavigateToComponents';
import { useUser } from '../../ui/Providers/user/UserProvider';
import { useNavigate } from 'react-router-dom';
function Fotter() {
  const {user}=useUser()
  const navigate=useNavigate()
  return (
    <Box   sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}>

<BottomNavigation
sx={{backgroundColor:"blue"}}
>
  <BottomNavigationAction   label="About"
          icon={<InfoIcon />} onClick={() => navigate(NavigateToComponents.About)}/>
               {user && (
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}onClick={() => navigate(NavigateToComponents.FavoriteCardPage)}/>
  )}
     {user && user.isBusiness && (
  <BottomNavigationAction label="My Cards" icon={<PortraitIcon />}   onClick={() => navigate(NavigateToComponents.MyCardsPage)}/>
  )}
</BottomNavigation>
  
    </Box>

  )
}

export default Fotter
