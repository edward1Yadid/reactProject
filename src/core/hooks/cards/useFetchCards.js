import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CreateaNewCard,
  getAllCards,
  getAllUserCards,
  getCardForDetail,
  updateUserCard,
  userDeleteCard,
  userLikeCard,
} from "../../services/axios/cardsApiAxios";
import { useInterceptors } from "../../services/axios/useInterceptors";
import { normalizeCard } from "../../services/card/normalization/nomaliztionCard";
import NavigateToComponents from "../../router/NavigateToComponents";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../../../ui/Providers/user/UserProvider";
import { useSnackbar } from "../../../ui/Providers/SnackBarProvider";

const useFetchCards = () => {
  const snackMessage = useSnackbar();

  const { user } = useUser();
  const [Isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);

  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);
  useInterceptors();
  useEffect(() => {
    if (cards) {
      const filtered = cards.filter(
        (c) => c.title.includes(query) || String(c.bizNumber).includes(query)
      );
      setFilteredCards(filtered);
    }
  }, [query, cards]);

  const navigate = useNavigate();
  const requestStatus = (card, cards, Isloading, error) => {
    setCard(card);
    setCards(cards);
    setIsLoading(Isloading);
    setError(error);
  };

  useInterceptors();

  const handleGetAllCard = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getAllCards();

      snackMessage("welcome to the homepage this is all the business cards", {
        color: "success",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(null, cards, false, null);
    } catch (error) {
      snackMessage("Opps sometinhg happend faild to load the cards", {
        color: "error",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(null, null, false, error);
    }
  }, []);

  const handleGetoneCard = useCallback(async (idOfCard) => {
    try {
      setIsLoading(true);
      const card = await getCardForDetail(idOfCard);
      requestStatus(card, null, false, null);
      return card;
    } catch (error) {
      requestStatus(null, null, false, error);
    }
  }, []);
  const handleGetMyCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getAllUserCards();
      snackMessage("Woohoo! Your cards are ready to roll!", {
        color: "success",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(null, cards, false, null);
    } catch (error) {
      snackMessage(
        " 'Oops, something went wrong loading your cards. Please try again later.",
        {
          color: "error",
          variant: "filled",
          duration: 5000,
        }
      );
      requestStatus(null, null, false, error);
    }
  }, []);

  const handleCreateNewCard = useCallback(async (cardNormalized) => {
    try {
      setIsLoading(true);
      const normlizedNEWcARD = normalizeCard(cardNormalized);
      const card = await CreateaNewCard(normlizedNEWcARD);
      navigate(NavigateToComponents.MyCardsPage);
      snackMessage("Card created successfully!", {
        color: "success",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(card, null, false, null);
    } catch (error) {
      snackMessage("There was an error creating your card", {
        color: "error",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(null, null, false, error);
    }
  }, []);

  const handleDeleteCard = useCallback(async (idOfCard) => {
    try {
      setIsLoading(true);
      await userDeleteCard(idOfCard);
      snackMessage("Card deleted successfully!",{

        color: "success",
        variant: "filled",
        duration: 5000,
      });
    } catch (error) {
      snackMessage("There was an error deleting your card",{
        color: "error",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(null, null, false, error);
    }
  }, []);

  const handleUpdateCard = useCallback(async (idOfCard, cardNormalized) => {
    try {
      setIsLoading(true);
      const card = await updateUserCard(idOfCard, cardNormalized);
      snackMessage("Card updated! Your new information is now reflected.", {
        color: "success",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(card, null, null, false);
      navigate(NavigateToComponents.MyCardsPage);
    } catch (error) {
      snackMessage( "We apologize for the inconvenience. Our team is here to help if you need it.",{
        color: "error",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(null, null, null, error);
    }
  }, []);

  const hadleLikeCard = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const card = await userLikeCard(id);
      snackMessage("You've liked this card! 🎉", {
        color: 'success',
        variant: 'filled',
        duration: 5000,
      });
      requestStatus(card, cards, false, null);
    } catch (error) {
      requestStatus(null, null, null, error);
   
    }
  }, []);

  const handleGetMyFavCard = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getAllCards();
      const fevCard = cards.filter(card => !!card.likes.find(id => id === user._id));
      snackMessage("Your favorite cards are loaded! 🌟", {
        color: "success",
        variant: "filled",
        duration: 5000,
      });
      requestStatus(null, fevCard, false, null);
    } catch (error) {
      requestStatus(null, null, null, error);
    }
  });

  const value = useMemo(() => {
    return { cards, card, Isloading, error, filteredCards };
  }, [cards, card, Isloading, error, filteredCards]);

  return {
    value,
    handleGetAllCard,
    handleGetoneCard,
    handleCreateNewCard,
    handleGetMyCards,
    handleDeleteCard,
    handleUpdateCard,
    hadleLikeCard,
    handleGetMyFavCard,
  };
};
export default useFetchCards;
