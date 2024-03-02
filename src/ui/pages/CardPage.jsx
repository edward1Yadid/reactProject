import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import GeneralPageCompenent from "../components/generalPage/GeneralPageCompenent";
import useFetchCards from "../../core/hooks/cards/useFetchCards";
import ExpirienceCustomers from "../../core/store/ExpirienceCustomers";

const CardPage = ({}) => {
  const {
    value: {Isloading, error ,filteredCards},
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
        title="Welcome to Your Business Card Hub"
        subtitle="Manage and Showcase Your Professional Identity"
      />
      <ExpirienceCustomers Isloading={Isloading} errro={error} cards={filteredCards} deleteMyCard={deleteMyCard}/>
    </Container>
  );
};

export default CardPage;
