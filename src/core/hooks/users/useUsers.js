import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../ui/Providers/user/UserProvider";
import {
  defindUser,
  removeTokenFromLocalStorage,
  setTokenFoeUniqeUser,
} from "../../helpers/userLoggedInLocalStorage";
import {
  EditMyuser,
  getUserById,
  loginApi,
  signup,
} from "../../services/axios/userApiAxios";
import normalizeUser from "../../services/user/normalizeUser";
import NavigateToComponents from "../../router/NavigateToComponents";
import { useInterceptors } from "../../services/axios/useInterceptors";
import { useSnackbar } from "../../../ui/Providers/SnackBarProvider";

function useUsers() {
  const [errors, setErrors] = useState(null);
  const [userslist, setUserslist] = useState(null);
  const [Isloading, setisLoading] = useState(false);
const snackMessage=useSnackbar()
  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useInterceptors();

  const requestStatus = useCallback(
    (Isloading, errosFromaApi, userslist, user = null) => {
      setisLoading(Isloading);
      setErrors(errosFromaApi);
      setUserslist(userslist);
      setUser(user);
    },
    [setUser]
  );

  const handleLoginUser = useCallback(
    async (user) => {
      try {
        const tonkenFormApi = await loginApi(user);

        setTokenFoeUniqeUser(tonkenFormApi);
        setToken(tonkenFormApi);
        const userFromLocalStorage = defindUser();
        requestStatus(false, null, null, userFromLocalStorage);
        snackMessage("Welcome back! You have successfully signed in. 🎉", {
          color: "success",
          variant: "filled",
          duration: 5000,
        });
        navigate(NavigateToComponents.HomePage);
      } catch (error) {
        snackMessage("Sign-in failed. Please check your credentials and try again. 😔", {
          color: "error",
          variant: "filled",
          duration: 5000,
        });
        requestStatus(false, error.message, null, null);
      }
    },
    [navigate, requestStatus, setToken]
  );

  const handleSignUpuser = useCallback(
    async (user) => {
      try {
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await loginApi({ email: user.email, password: user.password });
        snackMessage("Congratulations! You have successfully signed up. 🎉", {
          color: "success",
          variant: "filled",
          duration: 5000,
        });
      } catch (error) {
        snackMessage("Sign-up failed. Please check your information and try again. 😔", {
          color: "error",
          variant: "filled",
          duration: 5000,
        });
        requestStatus(false, error.message, null);
      }
    },
    [requestStatus, handleLoginUser]
  );

  const handleLogOutUser = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
    navigate(NavigateToComponents.LoginPage);
  }, [setUser]);

  const handleEditMyUser = useCallback(async (userid, userNormalozied) => {
    try {
      setisLoading(true);
      const user = await EditMyuser(userid, userNormalozied);
      
      requestStatus(false, null, null, user);
      navigate(NavigateToComponents.Edit_User);
    } catch (error) {
      requestStatus(false, null, null, userNormalozied);
    }
  }, []);



  const value = useMemo(
    () => ({
      userslist,
      user,
      Isloading,
      errors,
    }),
    [userslist, user, Isloading, errors]
  );

  return {
    value,
    handleLoginUser,
    handleSignUpuser,
    handleLogOutUser,
    handleEditMyUser,
  };
}

export default useUsers;
