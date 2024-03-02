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
    <>
     <div
      style={{
        display: "inline-block", 
        borderRadius: "12px", 
        borderTop: "4px solid #a0a0a0", 
        borderBottom: "4px solid #a0a0a0", 
        overflow: "hidden", 
      }}
    ></div>


    <Card
    sx={{
      minWidth: 280,
      maxWidth: 350,
      backgroundColor: "#f0f0f0", 
      borderRadius: "inherit",
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
    </>
   
  );
}
