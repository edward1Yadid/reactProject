import {
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import NavigateToComponents from "../../../../core/router/NavigateToComponents";
import { useUser } from "../../../../ui/Providers/user/UserProvider";
import { useNavigate } from "react-router-dom";
import useUsers from "../../../../core/hooks/users/useUsers";
import LinearScaleOutlinedIcon from '@mui/icons-material/LinearScaleOutlined';
const MenuBarRight = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { handleLogOutUser } = useUsers();
  const { user } = useUser();

  function onLogout() {
    handleCloseUserMenu();
    handleLogOutUser();
    return navigate(NavigateToComponents.CardPage);
  }

  return (
    <>
      {user && (
        <Box sx={{ flexGrow: 0 }}>
          <Box >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="me" src="./assets/images/avatar.png" sx={{ display: { xs: "none", md: "flex" } }}> </Avatar>
              <LinearScaleOutlinedIcon sx={{display: { xs: "flex", md: "none" },mr:1}} />
            </IconButton>
          </Tooltip>
          </Box>
        
          <Menu
            sx={{
              mt: "45px",
            }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {user && (
              <Box>
                <Link
                  onClick={() => navigate(NavigateToComponents.USER_PROFILE)}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                </Link>
                <Link
                  onClick={() => navigate(NavigateToComponents.Edit_User)}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    Edit account
                  </MenuItem>
                </Link>
                <Link
                  onClick={() => navigate(NavigateToComponents.LoginPage)}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={onLogout}>Logout</MenuItem>
                </Link>
                <Link
                  onClick={() => navigate(NavigateToComponents.About)}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>About</MenuItem>
                </Link>
              </Box>
            )}
            <Box>

            </Box>
          </Menu>
        </Box>
      )}
                    <Box>
                {!user && (
                  <>
                    <Link
                      to={NavigateToComponents.LoginPage}
                      sx={{
                        display: { xs: "block", md: "none" },
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>Login</MenuItem>
                    </Link>
                    <Link
                      to={NavigateToComponents.SignUp}
                      sx={{
                        display: { xs: "block", md: "none" },
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>SignUp</MenuItem>
                    </Link>
                  </>
                )}
              </Box>
    </>
  );
};

export default MenuBarRight;
