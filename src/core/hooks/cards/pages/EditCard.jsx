import React, { useEffect, useState } from "react";
import GeneralPageCompenent from "../../../../ui/components/generalPage/GeneralPageCompenent";
import useFetchCards from "../../../../core/hooks/cards/useFetchCards";
import useCustomf from "../../../../core/hooks/form/useCustomf";
import { initialCard } from "../../../../core/services/card/initialcard/initialCard";
import { schemaCard } from "../../../../core/services/card/joischema/joischemaCard";
import { Box, Container } from "@mui/material";
import FormInputControl from "../../../../ui/components/form/FormInputControl";
import NavigateToComponents from "../../../../core/router/NavigateToComponents";
import Input from "../../../../ui/components/form/Input";
import { normalizeCard } from "../../../../core/services/card/normalization/nomaliztionCard";
import { nestedCardFromApi } from "../../../services/model/nestedCardFromApi";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../../../ui/Providers/user/UserProvider";

const EditCard = () => {
  const { id: cardid } = useParams();
  const {
    handleGetoneCard,
    handleUpdateCard,
    value: { card },
  } = useFetchCards();
  const [initialDataFromApi, setInitDataFronApi] = useState(initialCard);
  const navigaie = useNavigate();

  const {
    value: { datafromApi, errorsFromApi },
    ...rest
  } = useCustomf(initialCard, schemaCard, () => {
    handleUpdateCard(cardid, {
      ...normalizeCard(datafromApi),
  
    });
  });

  useEffect(() => {
    handleGetoneCard(cardid)
      .then((datafromApi) => {
        if (user._id !== datafromApi.user_id)
          navigaie(NavigateToComponents.HomePage);
        const nestedCardFromApiCard = nestedCardFromApi(datafromApi);
        setInitDataFronApi(nestedCardFromApiCard);
        rest.setdatafromApi(nestedCardFromApiCard);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cardid]);
  const { user } = useUser();
  if (!user || !user.isBusiness)
    return <Navigate to={NavigateToComponents.HomePage}></Navigate>;

  return (
    <>
      <GeneralPageCompenent
        title="edit your business card"
        subtitle="here you can edit your cards"
      ></GeneralPageCompenent>

      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <FormInputControl
          title=""
          handleSubmit={rest.handleonSubmitFun}
          handleReset={() => rest.setdatafromApi(initialDataFromApi)}
          styles={{ maxWidth: "600px" }}
          onChange={rest.formValidate}
          to={NavigateToComponents.HomePage}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box>
                <Input
                  name="title"
                  label="title"
                  data={datafromApi}
                  error={errorsFromApi.title}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="subtitle"
                  label="Subtitle"
                  data={datafromApi}
                  error={errorsFromApi.subtitle}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="description"
                  label="description"
                  data={datafromApi}
                  error={errorsFromApi.description}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="phone"
                  label="Phone"
                  type="phone"
                  data={datafromApi}
                  error={errorsFromApi.phone}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="email"
                  label="email"
                  type="email"
                  data={datafromApi}
                  error={errorsFromApi.email}
                  handleChangeFun={rest.onchangeCheckValid}
                />{" "}
                <Input
                  name="webUrl"
                  label="web url"
                  data={datafromApi}
                  error={errorsFromApi.webUrl}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="imageUrl"
                  label="image url"
                  data={datafromApi}
                  error={errorsFromApi.imageUrl}
                  handleChangeFun={rest.onchangeCheckValid}
                />
              </Box>
              <Box>
                <Input
                  name="imageAlt"
                  label="image alt"
                  data={datafromApi}
                  error={errorsFromApi.imageAlt}
                  handleChangeFun={rest.onchangeCheckValid}
                />

                <Input
                  name="state"
                  label="state"
                  data={datafromApi}
                  error={errorsFromApi.state}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="country"
                  label="country"
                  data={datafromApi}
                  error={errorsFromApi.country}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="street"
                  label="street"
                  data={datafromApi}
                  error={errorsFromApi.street}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="city"
                  label="city"
                  data={datafromApi}
                  error={errorsFromApi.city}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="houseNumber"
                  label="houseNumber"
                  type="number"
                  data={datafromApi}
                  error={errorsFromApi.houseNumber}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="zip"
                  label="zip"
                  data={datafromApi}
                  error={errorsFromApi.zip}
                  handleChangeFun={rest.onchangeCheckValid}
                  required={false}
                />
              </Box>
            </Box>
          </Container>
        </FormInputControl>
      </Container>
    </>
  );
};

export default EditCard;
