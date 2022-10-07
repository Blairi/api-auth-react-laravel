import { checkingCredentials, login, logout } from "./authSlice"

import { loginUser, logoutUser, registerUser, validateUserToken } from "../../services";
import { cleanProductsLogout } from "../app/appSlice";

export const startCreatingUser = ({ displayName, email, password, password_confirmation }) => {
  return async (dispatch) => {

    dispatch( checkingCredentials() );

    const data = await registerUser({ displayName, email, password, password_confirmation });
    
    if (!data.status) {

      const payload = {
        errorMessage: data.message, 
        errors: data.error,
        error: true,
      }

      return dispatch( logout({...payload}) );

    }

    const { user, token } = data;

    sessionStorage.setItem("token", token);

    dispatch( login({ displayName: user.name, email: user.email, token }) );  

  }
}

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    
    dispatch( checkingCredentials() );
      
    const data = await loginUser({ email, password });
    
    if (!data.status) {

      const payload = {
        errorMessage: data.message, 
        error: true
      }

      return dispatch( logout({...payload}) );

    }

    sessionStorage.setItem("token", data.access_token);

    const { data:user } = await validateUserToken({ token: data.access_token });

    dispatch( login({ displayName: user.name, email: user.email, token: data.access_token }) );

  }
}

export const startLogout = ( {token} ) => {
  return async (dispatch) => {

    dispatch( checkingCredentials() );

    const data = await logoutUser({ token });

    if (!data.status) {

      const payload = {
        errorMessage: data.message, 
        error: true
      }

      return dispatch( logout({...payload}) );

    }

    sessionStorage.removeItem("token");
    
    dispatch( cleanProductsLogout() );
    dispatch( logout() );

  }
}