import axios from "axios";
import manageUserLogged from "./manageUserLogged";

const ApiUrl = "http://localhost:9191/cards";

// const {token}=manageUserLogged()
// axios.defaults.headers.common['Authorization'] =token;

///fetch all the cards

export const getAllCards = async () => {
  try {
    const response = await axios.get(`${ApiUrl}`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

///fetch one card with his details

export const getCardForDetail = async (id) => {
  try {
    const response = await axios.get(`${ApiUrl}/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

///fetch all the user that his  cards belongs to him
export const getAllUserCards = async () => {
  try {
    const response = await axios.get(`${ApiUrl}/my-cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

///fetch user create a new card
export const CreateaNewCard = async (card) => {
  try {
    const response = await axios.post(`${ApiUrl}`, card);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

/// fetch user update his old card that his own

export const updateUserCard = async (id, card) => {
  try {
    const { data } = await axios.put(`${ApiUrl}/${id}`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

///fetch users like cards

export const userLikeCard = async (id) => {
  try {
    const response = await axios.patch(`${ApiUrl}/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

/// fetch users delete card

export const userDeleteCard = async (id) => {
  try {
    const response = await axios.delete(`${ApiUrl}/${id}`);
    const data = response.data;

    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
