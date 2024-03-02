import { AppBar, Box } from "@mui/material";
import React from "react";
import Leftnavbar from "./leftnavbar/Leftnavbar";
import Rightnavbar from "./rightnavbar/Rightnavbar";
const Navbar = () => {
  return (
    <AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Leftnavbar />
        <Rightnavbar />
      </Box>
    </AppBar>
  );
};

export default Navbar;
