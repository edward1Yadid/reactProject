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


const useFetchCards = () => {
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

useEffect(() => {
    if(cards) {
        const filtered = cards.filter(c => c.title.includes(query) || String(c.bizNumber).includes(query));
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
      requestStatus(null, cards, false, null);
    } catch (error) {
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
      requestStatus(null, cards, false, null);
    } catch (error) {
      requestStatus(null, null, false, error);
    }
  }, []);

  const handleCreateNewCard = useCallback(async (cardNormalized) => {
    try {
      setIsLoading(true);
      const normlizedNEWcARD = normalizeCard(cardNormalized);
      const card = await CreateaNewCard(normlizedNEWcARD);
      navigate(NavigateToComponents.MyCardsPage);
      requestStatus(card, null, false, null);
    } catch (error) {
      requestStatus(null, null, false, error);
    }
  }, []);

  const handleDeleteCard = useCallback(async (idOfCard) => {
    try {
      setIsLoading(true);
      await userDeleteCard(idOfCard);
    } catch {
      requestStatus(null, null, false, error);
    }
  }, []);

  const handleUpdateCard = useCallback(async (idOfCard, cardNormalized) => {
    try {
      setIsLoading(true);
      const card = await updateUserCard(idOfCard, cardNormalized);
      requestStatus(card, null, null, false);
      navigate(NavigateToComponents.MyCardsPage);
    } catch (error) {
      requestStatus(null, null, null, error);
    }
  }, []);

  const hadleLikeCard = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const card = await userLikeCard(id);
      requestStatus(card, cards, false, null);
    } catch (error) {
      requestStatus(null, null, null, error);
    }
  }, []);

  const handleGetMyFavCard = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getAllCards();
      const fevCard = cards.filter(
        (card) => !!card.like.find((id) => id === user._id)
      );
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
