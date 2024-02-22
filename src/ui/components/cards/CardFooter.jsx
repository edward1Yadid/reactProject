import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModeIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import usecustomCard from "../../../core/hooks/cards/usecustomCard";
import { useNavigate, useParams } from "react-router-dom";
import NavigateToComponents from "../../../core/router/NavigateToComponents";
import { useUser } from "../../Providers/user/UserProvider";
import useFetchCards from "../../../core/hooks/cards/useFetchCards";
import Banner from "./Banner";

const CardFooter = ({ card, deleteMyCard ,likedCard}) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { hadleLikeCard } = useFetchCards();
  function likeCard() {
    return !!user && !!card.likes.find((userid) => userid === user._id);
  }
  const [memoizedLikedCardState, toggleLikedCard] = useState(likeCard);

  const [isDialogOpen, setIsDialogOpenorClose] = useState(false);

  const handleBanner = (term) => {
    if (term === "open") {
      setIsDialogOpenorClose(true);
    } else {
      setIsDialogOpenorClose(false);
    }
  };
  const handleDialogClose = () => {
    handleBanner(false);
    deleteMyCard(card._id);
  };
  const handleLikeCARD = async () => {
    toggleLikedCard((memoizedLikedCardState) => !memoizedLikedCardState);
    await hadleLikeCard(card._id);
    await likedCard()
  };
  return (
    <>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {user && (user._id === card.user_id || user.isAdmin) && (
            <IconButton onClick={() => handleBanner("open")}>
              <DeleteIcon />
            </IconButton>
          )}
          {user && user._id === card.user_id && (
            <IconButton
              onClick={() =>
                navigate(`${NavigateToComponents.EDIT_CARD}/${card._id}`)
              }
            >
              <EditModeIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton onClick={handleLikeCARD}>
            <FavoriteIcon
              sx={{ color: memoizedLikedCardState ? "red" : "inherit" }}
            />
          </IconButton>
        </Box>
      </CardActions>
      <Banner
        isDialogOpen={isDialogOpen}
        handleDIalogPopUp={handleBanner}
        OnDeleteCard={handleDialogClose}
      ></Banner>
    </>
  );
};

export default CardFooter;
