import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateUserToken } from "../services";
import { login, logout } from "../store/auth/authSlice";

export const useCheckAuth = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  useEffect(() => {
    
    (async () => {

      const token = sessionStorage.getItem("token");

      if (!token) return dispatch( logout() );

      const data = await validateUserToken({ token });
      
      if (!data.status) return dispatch( logout() ); // Invalid token

      const payload = {
        email: data.data.email,
        displayName: data.data.name,
        token: token
      }

      dispatch( login(payload) );

    })()

  }, []);

  return {
    status
  }

}