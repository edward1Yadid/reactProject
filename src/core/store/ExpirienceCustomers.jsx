import React from "react";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import Cards from "../../ui/components/cards/Cards";
import { bool, string } from "prop-types";
import { Typography } from "@mui/material";
const ExpirienceCustomers = ({ Isloading, error, cards, deleteMyCard ,likedCard}) => {
  if (Isloading) return <LoadingPage />;

  if (error) return <ErrorPage errorMessage={error} />;

  if (cards && !cards.length)
    return (
      <Typography>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  if (cards && !!cards.length)
    return <Cards cards={cards} deleteMyCard={deleteMyCard} likedCard={likedCard} />;
};
ExpirienceCustomers.propTypes = {
  error: string,
};
ExpirienceCustomers.defaultProps={
  likedCard: async ()=>{}
}
export default ExpirienceCustomers;
