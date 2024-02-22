import  { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  {useUser}  from '../../../ui/Providers/user/UserProvider';
import { defindUser, removeTokenFromLocalStorage, setTokenFoeUniqeUser } from '../../helpers/userLoggedInLocalStorage';
import { EditMyuser, getUserById, loginApi, signup } from '../../services/axios/userApiAxios';
import normalizeUser from '../../services/user/normalizeUser';
import NavigateToComponents from '../../router/NavigateToComponents';
import { useInterceptors } from '../../services/axios/useInterceptors';

function useUsers() {
    const [errors, setErrors] = useState(null);
    const [userslist, setUserslist] = useState(null);
    const [isloading, setisLoading] = useState(false);


    const navigate = useNavigate();
    const { user, setUser, setToken} = useUser();

    useInterceptors()

    const requestStatus = useCallback((isloading, errosFromaApi, userslist, user = null) => {
        setisLoading(isloading);
        setErrors(errosFromaApi);
        setUserslist(userslist);
        setUser(user);
    },[setUser]);


const handleLoginUser=useCallback( async(user)=>{
  
   try{
    const tonkenFormApi= await loginApi(user)

    setTokenFoeUniqeUser(tonkenFormApi)
    setToken(tonkenFormApi)
    const userFromLocalStorage = defindUser();
    requestStatus(false,null,null,userFromLocalStorage)
    navigate(NavigateToComponents.HomePage);
   } catch(error){
    requestStatus(false, error.message, null,null);   
   }
},[navigate, requestStatus, setToken])

const handleSignUpuser=useCallback(async(user)=>{
  
    try {
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await loginApi({email: user.email, password: user.password});
    } catch (error) {
        requestStatus(false, error.message, null);
    }
},[requestStatus, handleLoginUser])

const handleLogOutUser=useCallback(()=>{
    removeTokenFromLocalStorage()
    setUser(null)
    navigate(NavigateToComponents.LoginPage);
},[setUser])

const handleEditMyUser=useCallback(async(usernormalized)=>{
try{
    setisLoading(true)
const user=await EditMyuser(usernormalized)
    navigate(NavigateToComponents.USER_PROFILE)
}catch(error){
    requestStatus(false,error.message,null,null)
}
},[])

const handleGetUserById=useCallback(async(cardid)=>{
    try{
        setisLoading(true)
    const user=await getUserById(cardid)
    requestStatus(false,null,null,user)
    }catch(error){
        requestStatus(false,error.message,null,null)
    }

},[])
    const value = useMemo(() => ({
        userslist,
        user,
        isloading,
        errors
    }), [userslist, user, isloading, errors]);

  return{
    value,
    handleLoginUser,
    handleSignUpuser,
    handleLogOutUser,
    handleEditMyUser,
    handleGetUserById
  }
}

export default useUsers
