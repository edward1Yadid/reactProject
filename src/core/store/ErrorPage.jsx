import React from "react";
import GeneralPageCompenent from "../../ui/components/generalPage/GeneralPageCompenent";
import { Container, Typography } from "@mui/material";

function ErrorPage({ errorFromApi }) {
  return (
    <>
      <GeneralPageCompenent
        title={"Oops something wrong..."}
        subtitle={"Looks like this page went on vacation."}
      />
      <Container>
        <Typography variant="h1" color="initial">
          {errorFromApi}
        </Typography>
        <img
          src="/assets/images/ErrorPicture.png"
          alt="ErrorPicture"
          width={"50%"}
          height={"auto"}
        />
      </Container>
    </>
  );
}

export default ErrorPage;
