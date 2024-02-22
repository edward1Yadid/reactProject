
import Container from "@mui/material/Container";
import joischemaLogin from "../../core/services/form/joischemaLogin";
import useCustomf from "../../core/hooks/form/useCustomf";
import NavigateToComponents from "../../core/router/NavigateToComponents";
import FormInputControl from "../components/form/FormInputControl";
import Input from "../components/form/Input";
import GeneralPageCompenent from "../components/generalPage/GeneralPageCompenent";
import useUsers from "../../core/hooks/users/useUsers";
import initialLoginForm from "../../core/services/form/initialLoginForm";

const FormTest = () => {
  const { handleLoginUser } = useUsers();

  const { value, ...rest } = useCustomf(
    initialLoginForm,
    joischemaLogin,
    handleLoginUser
  );

  return (
    <>
      <GeneralPageCompenent
        title="login page"
        subtitle={"here you log in to the business"}
      ></GeneralPageCompenent>
      <Container
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormInputControl
          title=""
          handleSubmit={rest.handleonSubmitFun}
          handleReset={rest.resetDataFromForm}
          styles={{ maxWidth: "600px" }}
          onChange={rest.formValidate}
          to={NavigateToComponents.CardPage}
        >
          <Input
            label={"Email"}
            name={"email"}
            type={"email"}
            data={value.datafromApi}
            error={value.errorsFromApi.first}
            handleChangeFun={rest.onchangeCheckValid}
          />
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            data={value.datafromApi}
            error={value.errorsFromApi.last}
            handleChangeFun={rest.onchangeCheckValid}
          />
        </FormInputControl>
      </Container>
    </>
  );
};

export default FormTest;
