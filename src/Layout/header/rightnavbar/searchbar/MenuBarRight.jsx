import { Box, Button, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import NavigateToComponents from "../../../../core/router/NavigateToComponents"
import { useUser } from '../../../../ui/Providers/user/UserProvider';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../../../core/hooks/users/useUsers';
const MenuBarRight = () => {
  const navigate=useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const {handleLogOutUser}=useUsers()
  const {user}=useUser()
  function onLogout(){
    handleCloseUserMenu()
    handleLogOutUser()
    return navigate(NavigateToComponents.CardPage)

  }
  return (

<>

{user && 

<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='me' src='/assets/images/avatar.png'></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               {user && (
        <Box>
          <Link to={NavigateToComponents.USER_PROFILE}>
            <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          </Link>
          <Link to={NavigateToComponents.Edit_User}>
            <MenuItem onClick={handleCloseUserMenu}>Edit account</MenuItem>
          </Link>
          <Link to={NavigateToComponents.LoginPage}>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </Link>
          <Link to={NavigateToComponents.About}>
        <MenuItem onClick={handleCloseUserMenu}>About</MenuItem>
      </Link>
        </Box>
        
      )}
 <Box>
  <Box>

    {!user && (
<>

<Link to={NavigateToComponents.LoginPage} sx={{ display: { xs: "block", md: "none" } }}>
            <MenuItem onClick={handleCloseUserMenu}>Login</MenuItem>
          </Link>
          <Link to={NavigateToComponents.SignUp}     sx={{ display: { xs: "block", md: "none" } }}>
            <MenuItem onClick={handleCloseUserMenu}>SignUp</MenuItem>
          </Link>
</>
      
    )}
  </Box>



 </Box>

    
            </Menu>
          </Box>


}

</>

  )
}

export default MenuBarRight

