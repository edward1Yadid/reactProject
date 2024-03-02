import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Grid,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useUser } from "../Providers/user/UserProvider";
import axios from "axios";
import { ApiUrl } from "../../core/services/axios/userApiAxios";
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/system";
import { List, ListItem } from "@mui/material";
import {  FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import GeneralPageComponent from "../components/generalPage/GeneralPageCompenent";



const UserProlie = () => {
  const [initialDataFromApi, setInitDataFromnApi] = useState(null);
  const { user } = useUser();
  const UniqeToken = localStorage.getItem("tokenUniqe");
  const getUserById = async (user) => {
    try {
      axios.defaults.headers.common["x-auth-token"] = UniqeToken;
      const data = await axios.get(`${ApiUrl}/${user}`);
      return data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error.message);
    }
  };
  useEffect(() => {
    getUserById(user._id)
      .then((datafrom) => {
        const { data: userFromApi } = datafrom;
        setInitDataFromnApi(userFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user, setInitDataFromnApi]);
  const handleEmailClick = () => {
    window.location.href = `mailto:${initialDataFromApi?.email}`;
  };
 
  return (

    <Container 
      sx={{ mt: 10, width: "100%", height: "95%", padding: 2, borderRadius: 2   
      }}
      elevation={3}
    >

      <GeneralPageComponent title="Your Professional Profile" subtitle={"Showcase Your Skills and Contact Information"} />
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={initialDataFromApi?.image?.url}
            alt={initialDataFromApi?.image?.alt}
            style={{ width: 400, height: 400 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h3"textAlign={"left"}>
            Owner name: {initialDataFromApi?.name?.first}{" "}
            {initialDataFromApi?.name?.last}
          </Typography>
<Divider></Divider>
          <Box sx={{ bottom: 0, left: 0, right: 0 }}>
          <Typography variant="h4" textAlign="left" m={2}>
  Phone: {initialDataFromApi?.phone}
</Typography>

<Typography variant="h4" textAlign="left" m={2}>
  Email: {initialDataFromApi?.email}
</Typography>

<Typography variant="h4" textAlign="left" m={2}>
  Address:{" "}
 {initialDataFromApi?.address?.country} , {initialDataFromApi?.address?.city},{initialDataFromApi?.address?.street},{initialDataFromApi?.address?.houseNumber}
</Typography>
          </Box>
         
          <Grid container >
      
          <List component="nav" sx={{ border: "2px solid gray", borderRadius: "20px" ,"&:hover": { backgroundColor: "ActiveBorder" },mt:5 }}>
  <Typography variant="h5" color="initial">
    Connect with Us
  </Typography>

  <ListItem sx={{ width: "350px", "&:hover": { backgroundColor: "#f0f0f0" ,color:"inherit"} }}>
    <ListItemIcon>
      <FaGoogle />
    </ListItemIcon>
    <Link to={"https://www.google.com/"} target="_blank" rel="noopener">
      <ListItemText primary="Google" />
    </Link>
  </ListItem>

  <ListItem sx={{ width: "350px", "&:hover": { backgroundColor: "#f0f0f0" ,color:"inherit"} }}>
    <ListItemIcon>
      <FaTwitter />
    </ListItemIcon>
    <Link to={"https://twitter.com/"} target="_blank" rel="noopener">
      <ListItemText primary="Twitter" />
    </Link>
  </ListItem>
  <ListItem sx={{ width: "350px", "&:hover": { backgroundColor: "#f0f0f0" ,color:"inherit"} }}>
    <ListItemIcon>
      <MdDrafts />
    </ListItemIcon>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
      component="button"
      onClick={handleEmailClick}
    >
      <ListItemText primary="Send a Message" />
    </Link>
  </ListItem>

  <ListItem sx={{ width: "350px", "&:hover": { backgroundColor: "#f0f0f0" ,color:"inherit"} }}>
    <ListItemIcon>
      <FaSquareFacebook />
    </ListItemIcon>
    <Link to={"https://www.facebook.com/"} target="_blank" rel="noopener">
      <ListItemText primary="Facebook" />
    </Link>
  </ListItem>

  <ListItem sx={{ width: "350px", "&:hover": { backgroundColor: "#f0f0f0" ,color:"inherit"} }}>
    <ListItemIcon>
      <TbReportSearch />
    </ListItemIcon>
    <Link to={"https://www.tase.co.il/he"} target="_blank" rel="noopener">
      <ListItemText primary="Financial Reports" />
    </Link>
  </ListItem>
</List>


    </Grid>
        </Grid>
        
      </Grid>

    </Container>
  );
};

export default UserProlie;
