import React from "react";
import useCustomf from "../../core/hooks/form/useCustomf";
import initialSignUpform from "../../core/services/form/initialSignUpform";
import FormInputControl from "../components/form/FormInputControl";
import { Box, Checkbox, Container, FormControlLabel } from "@mui/material";
import GeneralPageCompenent from "../components/generalPage/GeneralPageCompenent";
import NavigateToComponents from "../../core/router/NavigateToComponents";
import initialschemasnignup from "../../core/services/form/initialschemasnignup";
import useUsers from "../../core/hooks/users/useUsers";
import Input from "../components/form/Input";

function Signup() {
  const { handleSignUpuser } = useUsers();
  const { value, ...rest } = useCustomf(
    initialSignUpform,
    initialschemasnignup,
    handleSignUpuser
  );

  return (
    <>
      <GeneralPageCompenent  title="Register"></GeneralPageCompenent>

      <Container sx={{ display: "flex", flexDirection: "row" ,}}>
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
                  name="first"
                  label="first name"
                  data={value.datafromApi}
                  error={value.errorsFromApi.first}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="middle"
                  label="middle name"
                  data={value.datafromApi}
                  error={value.errorsFromApi.middle}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="last"
                  label="last name"
                  data={value.datafromApi}
                  error={value.errorsFromApi.last}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="phone"
                  label="phone"
                  type="phone"
                  data={value.datafromApi}
                  error={value.errorsFromApi.phone}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="email"
                  label="email"
                  type="email"
                  data={value.datafromApi}
                  error={value.errorsFromApi.email}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="password"
                  label="password"
                  type="password"
                  data={value.datafromApi}
                  error={value.errorsFromApi.password}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="url"
                  label="image url"
                  data={value.datafromApi}
                  error={value.errorsFromApi.url}
                  handleChangeFun={rest.onchangeCheckValid}
                />
              </Box>
              <Box>
                <Input
                  name="alt"
                  label="image alt"
                  data={value.datafromApi}
                  error={value.errorsFromApi.alt}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="state"
                  label="state"
                  data={value.datafromApi}
                  error={value.errorsFromApi.state}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="country"
                  label="country"
                  data={value.datafromApi}
                  error={value.errorsFromApi.country}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="street"
                  label="street"
                  data={value.datafromApi}
                  error={value.errorsFromApi.street}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="city"
                  label="city"
                  data={value.datafromApi}
                  error={value.errorsFromApi.city}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="houseNumber"
                  label="house Number"
                  type="number"
                  data={value.datafromApi}
                  error={value.errorsFromApi.houseNumber}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="zip"
                  label="zip"
                  data={value.datafromApi}
                  error={value.errorsFromApi.zip}
                  handleChangeFun={rest.onchangeCheckValid}
                  required={false}
                />
              </Box>
            </Box>
            <Box>
              <FormControlLabel
                onChange={(e) =>
                  rest.setdatafromApi({
                    ...value.datafromApi,
                    isBusiness: !!e.target.checked,
                  })
                }
                name="isBusiness"
                control={
                  <Checkbox
                    value={value.datafromApi.isBusiness}
                    color="primary"
                  />
                }
                label="Signup as business"
              ></FormControlLabel>
            </Box>
          </Container>
        </FormInputControl>
      </Container>
    </>
  );
}

export default Signup;
