import Card from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateToComponents from "../../../core/router/NavigateToComponents";
import CardFooter from "./CardFooter";

export default function CardGeneral({ card,deleteMyCard,likedCard }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        minWidth: 280,
        maxWidth: 350,
        backgroundColor: "#cccccc",
        opacity: 0.9,
        m: 2,
      }}
    >
      <CardActionArea
        sx={{ display: "flex", flexDirection: "column" }}
        onClick={() =>
          navigate(`${NavigateToComponents.Card_deatils}/${card._id}`)
        }
      >
        <CardHead image={card.image}></CardHead>
        <CardBody card={card}></CardBody>
      </CardActionArea>
      <CardFooter {...{ deleteMyCard, card,likedCard }}></CardFooter>
    </Card>
  );
}
