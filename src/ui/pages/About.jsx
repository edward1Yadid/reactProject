import React from "react";
import GeneralPageComponent from "../components/generalPage/GeneralPageCompenent";
import {
  Button,
  Typography,
  Container,
  Box,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateToComponents from "../../core/router/NavigateToComponents";
import { useUser } from "../Providers/user/UserProvider";

const About = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const sectionStyles = {
    margin: "10px 0",
    padding: "1rem",
    textAlign: "left",
  };

  return (
    <>
      <GeneralPageComponent
        title=" About Business Card App"
        subtitle={"Learn More About Our Mission and Vision"}
      />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "self-start",
          gap: "1rem",
        }}
      >
        <Box>
          <section style={sectionStyles}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" gutterBottom>
              At Business Card App, we believe in the power of meaningful
              connections. Our mission is to provide a platform where
              professionals can effortlessly create, share, and connect through
              digital business cards. We aim to revolutionize the way
              individuals and businesses present themselves in the digital
              landscape.
            </Typography>
          </section>
        </Box>

        <Box>
          <section style={sectionStyles}>
            <Typography variant="h4" gutterBottom>
              Key Features
            </Typography>
            <List
              style={{ listStyleType: "none", padding: 0, textAlign: "left" }}
            >
             <ListItem >
                <ListItemText >
                  {"1."} {" "}
              Create Stunning Business Cards: Unleash your creativity with our
              user-friendly card creator. Craft personalized and visually
              appealing business cards that reflect your professional identity.
              Choose from a variety of templates, colors, and fonts to make your
              card stand out in any crowd.
              </ListItemText>
              </ListItem>
              <ListItem >
                <ListItemText >
                {"2."} {" "}
              Like and Connect: Discover other professionals on the platform and
              express your appreciation by liking their cards. Build your
              network by connecting with like-minded individuals and potential
              collaborators.
              </ListItemText>
              </ListItem>
              <ListItem >
                <ListItemText >
                {"3."} {" "}
              Edit Anytime, Anywhere: Your professional journey is dynamic, and
              so should be your business card. With Business Card App, you can
              update and edit your card anytime, ensuring that your contacts
              always have access to your latest information.
              </ListItemText>
              </ListItem>
            </List>
          </section>
        </Box>

        <Box>
          <section style={sectionStyles}>
            <Typography variant="h4" gutterBottom>
              How It Works
            </Typography>
            <List
                  style={{ listStyleType: "none", padding: 0, textAlign: "left" }}
            >
              <ListItem >
                <ListItemText >
                {"1."} {" "}
                  Create Your Card: Start by entering your professional details
                  and choose a design that resonates with your brand.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                {"2."} {" "}
                  Connect with Others: Explore a diverse community of
                  professionals, discover interesting businesses, and connect
                  with individuals who inspire you.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                {"3."} {" "}
                  Customize and Edit: Keep your card up-to-date. Whether you
                  change jobs, update contact information, or just want a fresh
                  look – editing is a breeze.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                {"4."} {" "}
                  Build Your Network: Like cards that interest you, and connect
                  with professionals who can contribute to your network and
                  career growth.
                </ListItemText>
              </ListItem>
            </List>
          </section>
        </Box>

        <Box>
          <section style={sectionStyles}>
            <Typography variant="h4" gutterBottom>
              Join Our App Today
            </Typography>
            <Typography variant="body1" gutterBottom>
              Elevate your professional presence with Business Card App. Join
              our community of forward-thinking individuals who understand the
              value of a strong digital identity. Whether you're an
              entrepreneur, freelancer, or corporate professional, Business Card
              App is here to help you leave a lasting impression.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {!user && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(NavigateToComponents.SignUp)}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => navigate(NavigateToComponents.LoginPage)}
                  >
                    Have account?
                  </Button>
                </>
              )}

              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate(NavigateToComponents.HomePage)}
              >
                Home Page
              </Button>
            </Box>
          </section>
        </Box>
      </Container>
    </>
  );
};

export default About;
