import React, { useCallback, useEffect } from 'react'
import GeneralPageCompenent from '../components/generalPage/GeneralPageCompenent'
import useFetchCards from '../../core/hooks/cards/useFetchCards'
import ExpirienceCustomers from '../../core/store/ExpirienceCustomers'


function FavoriteCard() {
  const {value:{Isloading,error,cards},handleDeleteCard,handleGetMyFavCard}=useFetchCards()


useEffect( ()=>{
   handleGetMyFavCard()
},[ ])


const changeCardsFev=useCallback(async()=>{
  await handleGetMyFavCard()
  
})
const deleteMyCard=useCallback(async(cardid)=>{
  await handleDeleteCard(cardid)
  await handleGetMyFavCard()
},[])
  return (
<>
<GeneralPageCompenent title={"Favorite Business Cards"} subtitle={"Easily Access and Prioritize Your Top Connections"}></GeneralPageCompenent>
   <ExpirienceCustomers Isloading={Isloading} errro={error} cards={cards} likedCard={changeCardsFev} deleteMyCard={deleteMyCard}/>
</>


  )
}

export default FavoriteCard
