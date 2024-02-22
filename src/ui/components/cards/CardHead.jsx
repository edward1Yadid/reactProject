import { CardMedia } from "@mui/material";
import React from "react";

function CardHead({ image }) {
  const { url, alt } = image;
  return (
    <CardMedia
      component={"img"}
      style={{ maxWidth: "190px" }}
      image={url}
      alt={alt}
      sx={{ borderRadius: "10%" }}
    ></CardMedia>
  );
}

export default CardHead;
