import axios from "axios";
import { useEffect } from "react";


export const useInterceptors=()=>{
  const errors = {
    400: {
      description: "Your request is malformed. Please check your request data and try again.",
    },
    401: {
      description: "You are not authorized to access this resource. Please log in or provide appropriate permissions.",
    },
    403: {
      description: "You are not allowed to access this resource.",
    },
    404: {
      description: "The requested resource does not exist. Please make sure the URL is correct.",
    },
    405: {
      description: "The HTTP method used is not allowed for this resource.",
    },
    413: {
      description: "The request entity is too large. Please reduce the size of your request and try again.",
    },
    422: {
      description: "The request was well-formed but was unable to be processed due to semantic errors.",
    },
    500: {
      description: "An internal server error occurred. Please try again later.",
    },
    503: {
      description: "The server is currently unavailable. Please try again later.",
    },
    504: {
      description: "The server did not receive a timely response from an upstream server.",
    },
  };
  

  const   UniqeToken= localStorage.getItem("tokenUniqe")
  useEffect(()=>{


    axios.interceptors.request.use((config) => {
  
      axios.defaults.headers.common['x-auth-token'] = `${UniqeToken}`
      return config;
    });
    
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
  const errorMessage= errors[error.response.status].description
  console.log(errorMessage)
        return Promise.reject(errorMessage);
      }
    );

  },[UniqeToken])




}


