import axios from "axios"




export const ApiUrl="https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users"

    export const loginApi= async (user)=>{
        try{
        const response = await axios.post(`${ApiUrl}/login`,user)
        return response.data
}
 catch (error) {
    return Promise.reject(error.message);


}
}

export const signup = async user => {
    try {
        const {
            data
        } = await axios.post(`${ApiUrl}`, user);
        console.log(user)
        return data;

    } catch (error) {
        console.log(error)
        return Promise.reject(error.message);
    }
}

export const getUserById=async cardid=>{
    try{
        const {data}=await axios.get(`${ApiUrl}/${cardid}`)
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        return Promise.reject(error.message);
    }
}

export const EditMyuser=async (cardid,user)=>{
    try{
        const {data}=await axios.put(`${ApiUrl}/${cardid}`, user)
        return data;
    } catch (error) {
        console.log(error)
        return Promise.reject(error.message);
    }
}