import { jwtDecode } from "jwt-decode";

let user;
let tokenUniqe="tokenUniqe"
export const defindUser=()=>{
    try{
user=localStorage.getItem(tokenUniqe)
return jwtDecode(user)
    } catch(error){
        return null
    }
}

export const setTokenFoeUniqeUser=(theTokenFromApi)=>{
localStorage.setItem(tokenUniqe,theTokenFromApi)
}

export const removeTokenFromLocalStorage = () => localStorage.removeItem(tokenUniqe);

export const getTokenFromLockStorage = () => localStorage.getItem(tokenUniqe); 