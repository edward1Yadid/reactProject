import React from "react";
import GeneralPageCompenent from "../components/generalPage/GeneralPageCompenent";
import useFetchCards from "../../core/hooks/cards/useFetchCards";
import useCustomf from "../../core/hooks/form/useCustomf";
import { initialCard } from "../../core/services/card/initialcard/initialCard";
import { schemaCard } from "../../core/services/card/joischema/joischemaCard";
import { Box, Container } from "@mui/material";
import FormInputControl from "../components/form/FormInputControl";
import NavigateToComponents from "../../core/router/NavigateToComponents";
import Input from "../components/form/Input";
import { useUser } from "../Providers/user/UserProvider";
import { Navigate } from "react-router-dom";

const CreateNewCard = () => {
  const { handleCreateNewCard } = useFetchCards();
  const {
    value: { datafromApi, errorsFromApi },
    ...rest
  } = useCustomf(initialCard, schemaCard, handleCreateNewCard);
  const { user } = useUser();
  if (!user || !user.isBusiness)
    return <Navigate to={NavigateToComponents.HomePage}></Navigate>;
  return (
    <>
      <GeneralPageCompenent
        title="create card form"
        subtitle="here you can see your cards and create your business card"
      ></GeneralPageCompenent>

      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <FormInputControl
          title=""
          handleSubmit={rest.handleonSubmitFun}
          handleReset={rest.resetDataFromForm}
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
                  label="Title"
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
                  name="city"
                  label="city"
                  data={datafromApi}
                  error={errorsFromApi.city}
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

export default CreateNewCard;
