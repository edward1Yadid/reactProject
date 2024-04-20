import axios from "axios"




export const ApiUrl=  "http://localhost:9191/users"

    export const loginApi= async (user)=>{
        try{
        const response = await axios.post(`${ApiUrl}/login`,user)
  
        return response.data
}
 catch (error) {
    if(error) 
    return Promise.reject(error.message)


}
}

export const signup = async user => {
    try {
        const {
            data
        } = await axios.post(`${ApiUrl}`, user);

        return data;

    } catch (error) {
        return Promise.reject(error.message);
    }
}
const   UniqeToken= localStorage.getItem("tokenUniqe")

export const EditMyuser=async (userID,user)=>{
    try{

        axios.defaults.headers.common['x-auth-token'] =UniqeToken
        const {data}=await axios.put(`${ApiUrl}/${userID._id}`, user)
        
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}