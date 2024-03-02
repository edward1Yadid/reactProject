import React, { useEffect, useState } from 'react'
import GeneralPageCompenent from '../components/generalPage/GeneralPageCompenent'
import useUsers from '../../core/hooks/users/useUsers';
import useCustomf from '../../core/hooks/form/useCustomf';
import FormInputControl from '../components/form/FormInputControl';
import { Box, Container } from '@mui/material';
import { useUser } from '../Providers/user/UserProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import NavigateToComponents from '../../core/router/NavigateToComponents';
import normalizedUserEdit from '../../core/services/user/normalizedUserEdit';
import initialSignUpform from "../../core/services/form/initialSignUpform";
import joischemaEditUser from "../../core/services/form/joischemaEditUser";
import Input from '../components/form/Input';
import { nestedUserFromApi } from "../../core/services/model/nestedUserFromApi";
import axios from 'axios';
import { ApiUrl } from '../../core/services/axios/userApiAxios';
function EditUserProfile() {
  const navigate = useNavigate();
  const   UniqeToken= localStorage.getItem("tokenUniqe")
  const [initialDataFromApi, setInitDataFromnApi] = useState(initialSignUpform);
  const { user } = useUser();
  
  const { handleEditMyUser} = useUsers();
  
  const {    value: { datafromApi, errorsFromApi },...rest} = useCustomf(
    initialSignUpform,
    joischemaEditUser,
    () => {
      const normalizeduSER=  {...normalizedUserEdit(datafromApi)}
      console.log(normalizeduSER)
      handleEditMyUser(user, 
        normalizeduSER
        
      );
    });
  const getUserById=async (user)=>{
      try{
          const {data}=await axios.get(`${ApiUrl}/${user}`)
                axios.defaults.headers.common['x-auth-token'] =UniqeToken
          return data;
      } catch (error) {
          console.log(error)
          return Promise.reject(error.message);
      }
  }
    useEffect(() => {
      getUserById(user._id)
        .then((datafromApi) => {
          if (user._id !== datafromApi.user_id) navigate(NavigateToComponents.CARDS);
          const nestedUserFromApiUser = nestedUserFromApi(datafromApi);
          setInitDataFromnApi(nestedUserFromApiUser);
          rest.setdatafromApi(nestedUserFromApiUser);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [user]);



  if (!user || !user.isBusiness)
    return <Navigate to={NavigateToComponents.HomePage}></Navigate>;

  return (
    <>
        <GeneralPageCompenent title={"Edit Your Business Card"} subtitle={"Keep Your Information Up-to-Date and Relevant"}></GeneralPageCompenent>
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
                  name="first"
                  label="first name"
                  data={datafromApi}
                  error={errorsFromApi.first}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="middle"
                  label="middle name"
                  data={datafromApi}
                  error={errorsFromApi.middle}
                  handleChangeFun={rest.onchangeCheckValid}
                 
                />
                <Input
                  name="last"
                  label="last name"
                  data={datafromApi}
                  error={errorsFromApi.last}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                <Input
                  name="phone"
                  label="phone"
                  type="phone"
                  data={datafromApi}
                  error={errorsFromApi.phone}
                  handleChangeFun={rest.onchangeCheckValid}
                />
   
                <Input
                  name="url"
                  label="image url"
                  data={datafromApi}
                  error={errorsFromApi.url}
                  handleChangeFun={rest.onchangeCheckValid}
                />
                         <Input
                  name="alt"
                  label="image alt"
                  data={datafromApi}
                  error={errorsFromApi.alt}
                  handleChangeFun={rest.onchangeCheckValid}
                />
              </Box>
              <Box>
       
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
                  label="house Number"
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

  )
}

export default EditUserProfile
