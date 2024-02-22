import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import GeneralPageCompenent from "../components/generalPage/GeneralPageCompenent";
import useFetchCards from "../../core/hooks/cards/useFetchCards";
import ExpirienceCustomers from "../../core/store/ExpirienceCustomers";

const CardPage = ({}) => {
  const {
    value: {isloading, error ,filteredCards},
    handleGetAllCard,
    handleDeleteCard,
    handleGetMyCards
  } = useFetchCards();

useEffect(
  function fetchdat() {
    handleGetAllCard();
  },
  [handleGetAllCard]
);
const deleteMyCard= async (cardid)=>{
  await handleDeleteCard(cardid)
  await  handleGetMyCards()
}


  return (
    <Container>
      <GeneralPageCompenent
        title="cards of all customers"
        subtitle="Here you can find business cards from all categories from all the customers"
      />
      <ExpirienceCustomers isloading={isloading} errro={error} cards={filteredCards} deleteMyCard={deleteMyCard}/>
    </Container>
  );
};

export default CardPage;
