import React from "react";
import GeneralPageCompenent from "../../ui/components/generalPage/GeneralPageCompenent";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateToComponents from "../router/NavigateToComponents";

function ErrorPage({ errorFromApi }) {
  const navigate=useNavigate()
  return (
    <>
    <Container >
    <GeneralPageCompenent
      title="Error 404"
      subtitle='page not found'
      />
         <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" color="initial">
                        Sorry, this page does not exist.
                    </Typography>
                    <Button variant="text" color="primary" onClick={()=>navigate(NavigateToComponents.HomePage)}>
                        Go back to homepage
                    </Button>
                </Grid>
                <Grid item xs={12} md={4} justifyContent="center">
                    <img src="/assets/images/ErrorPicture.png" alt="ErrorPicture" width="100%"
                    
    
                    />
                </Grid>
            </Grid>
    </Container>


    </>
  );
}

export default ErrorPage;
