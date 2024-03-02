import React, { useEffect } from "react";
import GeneralPageCompenent from "../components/generalPage/GeneralPageCompenent";
import { useParams } from "react-router-dom";
import useFetchCards from "../../core/hooks/cards/useFetchCards";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";

const CardDetailPage = () => {
  const { id } = useParams();

  const {
    value: {card},
    handleGetoneCard,
  } = useFetchCards();
  useEffect(() => {
    handleGetoneCard(id);
  }, [id]);
  const companyInfo = {
    title: `${card?.title}`,
    subtitle: `${card?.subtitle}`,
    description: `${card?.description}`,
    established: "2020",
  };
  return (
    <Container maxWidth="xl">
      <GeneralPageCompenent
        title={"Business Details"}
        subtitle="Here you can find all the information about the customer business card."
      ></GeneralPageCompenent>
      <Container sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"1rem",justifyContent:"space-around"}}>
        <Box>
        <Card sx={{ maxWidth: 600, margin: "auto", marginTop: 5 }}>
          <CardMedia
            component="img"
            alt={card?.image?.alt || "Card Image"}
sx={{maxHeight:"25rem"}}
            width={"auto"}
            image={card?.image?.url}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {companyInfo.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {companyInfo.subtitle}
            </Typography>
            <Divider sx={{ margin: "12px 0" }} />
            <Typography variant="body1" paragraph>
              {companyInfo.description}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2">
                  <strong>Phone:</strong> {card?.phone}
                </Typography>
                <Typography variant="body2">
                  <strong>Email:</strong>{" "}
                  <Link href={`mailto:${card?.email}`}>{card?.email}</Link>
                </Typography>
                <Typography variant="body2">
                  <strong>Website:</strong>{" "}
                  <Link href={card?.web} target="_blank" rel="noopener noreferrer">
                    {card?.web}
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2">
                  <strong>Address:</strong>{" "}
                  {` ${card?.address?.state}, ${card?.address?.country}, ${card?.address?.city}, ${card?.address?.street},${card?.address?.houseNumber} `}
                </Typography>
              </Grid>
            </Grid>
            {/* Generic company information */}
            <Divider sx={{ margin: "12px 0" }} />
            <Typography variant="h6" gutterBottom>
              About {companyInfo.title}
            </Typography>
            <Typography variant="body2" paragraph>
              {companyInfo.title} is a leading company in the{" "}
              {companyInfo.subtitle} industry. With a team of{" "}
              {companyInfo.description} dedicated professionals, we have been
              providing high-quality services since our establishment in{" "}
              {companyInfo.established}.
            </Typography>
          </CardContent>
        </Card>
        </Box>
       
        <Box mt={5} sx={{border: "2px solid gray",p:1}}>
          <Typography variant="h4" color="initial" sx={{textDecoration:"underline"}}>company Address:</Typography>
        <iframe 
          title="Google Maps"
          width="100%"
          height="520"
          loading="lazy"
          allowFullScreen
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC6oPieiC3i5m1OCvo04wh1jJCPSRwZcOQ&q=${card?.address?.state}, ${card?.address?.country}, ${card?.address?.city}, ${card?.address?.street},${card?.address?.houseNumber}`}>
      
        </iframe>
        </Box>
      
      </Container>
    </Container>
  );
};

export default CardDetailPage;
