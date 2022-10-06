import { getProducts } from "../../services";
import { setProducts, startLoading } from "./appSlice";

export const startLoadingProducts = () => {
  return async ( dispatch, getState ) => {

    dispatch( startLoading() );

    const { token } = getState().auth;
    
    const { data:products } = await getProducts({ token });
    
    dispatch( setProducts( { products } ) );

  }
}