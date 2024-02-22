import React from "react";
import Typography from "@mui/material/Typography";
import CardGeneral from "./CardGeneral";
import { Container, Stack } from "@mui/material";
import useFetchCards from "../../../core/hooks/cards/useFetchCards";

function Cards({ cards, deleteMyCard ,likedCard}) {
  const methods = { deleteMyCard ,likedCard};

  if (!cards.length) {
    return (
      <Typography variant="h4" color="initial">
        No cards found
      </Typography>
    );
  }

  return (
    <Container>
      <Stack
        spacing={1}
        gap={2}
        direction="row"
        my={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        {cards.map((card, index) => {
          return (
            <CardGeneral card={card} key={index} {...methods}></CardGeneral>
          );
        })}
      </Stack>
    </Container>
  );
}

export default Cards;
