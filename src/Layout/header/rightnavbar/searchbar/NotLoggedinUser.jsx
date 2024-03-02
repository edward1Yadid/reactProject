import {
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigateToComponents from "../../../../core/router/NavigateToComponents";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
import { useUser } from "../../../../ui/Providers/user/UserProvider";
const NotLoggedinUser = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Button
          variant="filled"
          sx={{ color: "white" }}
          onClick={() => navigate(NavigateToComponents.SignUp)}
        >
          <Typography variant="h5" color="white">
            Sing up
          </Typography>
        </Button>
        <Button
          variant="filled"
          sx={{ color: "white" }}
          onClick={() => navigate(NavigateToComponents.LoginPage)}
        >
          <Typography variant="h5" color="white">
            Login
          </Typography>
        </Button>
      </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LinearScaleOutlinedIcon
                  sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                />
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            sx={{
              mt: "25px",
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
            <Box>
              <ListItem onClick={() => navigate(NavigateToComponents.SignUp)}>
                <ListItemText primary="SignUp" />
              </ListItem>
              <ListItem
                onClick={() => navigate(NavigateToComponents.LoginPage)}
              >
                <ListItemText primary="Login" />
              </ListItem>
            </Box>

            <Box></Box>
          </Menu>
        </Box>

    </>
  );
};

export default NotLoggedinUser;
