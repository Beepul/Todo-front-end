import { loginapi } from "../../utility/api";
import { normalPost } from "../../utility/request";
import { LOGIN_START,LOGIN_SUCESS,SIGNUP_START } from "./actionType";

export const loginOpen =()=>{
    return{
        type:LOGIN_START
    };
};

export const loginSucess = (data)=>{
    return{
        type: LOGIN_SUCESS,
        payload: data,
    };
};

export const signupStart=()=>{
    return{
        type: SIGNUP_START,
    };
};

export const login = (data) => {
    return normalPost(data, loginapi);
  };