import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { MdOutlineReadMore } from "react-icons/md";
import FormatAlignJustifySharpIcon from '@mui/icons-material/FormatAlignJustifySharp';
import NavigateToComponents from '../../core/router/NavigateToComponents';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../ui/Providers/user/UserProvider';
const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const {user}=useUser()
const navigate=useNavigate()
  const handleToggleDrawer = () => {
    setOpen(prev=>!prev);
  };
  const handleDrawerClose = () => {
    handleToggleDrawer();  // Close the drawer
  };
  return (
    <div>
      <IconButton onClick={handleToggleDrawer} edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "flex", md: "none" },ml:"1rem" } }>
        <MdOutlineReadMore  />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleToggleDrawer}>
  <div onMouseLeave={handleDrawerClose}>
    <List>
      <ListItem button onClick={() => navigate(NavigateToComponents.About)}>
        <ListItemText primary="About" />
     
      </ListItem>
      {user &&  (
      <ListItem  onClick={() => navigate(NavigateToComponents.FavoriteCardPage)}>
        <ListItemText primary="FAV CARDS" />
      </ListItem>
      )}
      {user && user.isBusiness && (
      <ListItem  onClick={() => navigate(NavigateToComponents.MyCardsPage)}>
        <ListItemText primary="MY CARDS" />
      </ListItem>
      )}
    </List>
  </div>
</Drawer>

    </div>
  );
};

export default SideMenu;
