import { createProduct, deleteProduct, getProducts, updateProduct } from "../../services";

import { addNewProduct, setProducts, setProductUpdating, startLoading } from "./appSlice";
import { updateProduct as updateProductSlice } from "./appSlice";
import { deleteProduct as deleteProductSlice } from "./appSlice";

export const startLoadingProducts = () => {
  return async ( dispatch, getState ) => {

    dispatch( startLoading() );

    const { token } = getState().auth;
    
    const { data:products } = await getProducts({ token });
    
    dispatch( setProducts( { products } ) );

  }
}

export const startCreateProduct = ({ name, price, quantity }) => {
  return async ( dispatch, getState ) => {

    dispatch( startLoading() );

    const { token } = getState().auth;

    const { data:product } = await createProduct({ token, name, price, quantity });

    dispatch( addNewProduct( product ) );

  }
}

export const startSearchProduct = ({ id }) => {
  return async ( dispatch, getState ) => {

    dispatch( startLoading() );

    const { products } = getState().app;

    const productUpdating = products.find(product => product.id == id );

    if (productUpdating) return dispatch( setProductUpdating({ ...productUpdating }) );

  }
}

export const startUpdateProduct = ({ id, name, price, quantity }) => {
  return async ( dispatch, getState ) => {

    dispatch( startLoading() );

    const { token } = getState().auth;
    
    const { data:product } = await updateProduct({ token, id, name, price, quantity });
    
    dispatch( updateProductSlice({ ...product }) ); // Updating redux state
    dispatch( setProductUpdating(null) ); // Redirect user

  }
}

export const startDeleteProduct = ({ id }) => {
  return async ( dispatch, getState ) => {

    dispatch( startLoading() );

    const { token } = getState().auth;

    await deleteProduct({ token, id })

    dispatch( deleteProductSlice({ id }) );

  }
}