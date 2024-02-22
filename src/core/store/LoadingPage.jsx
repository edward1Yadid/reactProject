import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
function LoadingPage() {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        justify: "center",
        alignItems: "center",
        mt: 30,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress sx={{ marginBottom: "100px" }} />
        <Divider></Divider>
        <Typography variant="h3" color="blue">
          Loading...
        </Typography>
        <Divider></Divider>
        <LinearProgress sx={{ marginTop: "100px" }} />
      </Box>
    </Container>
  );
}

export default LoadingPage;
