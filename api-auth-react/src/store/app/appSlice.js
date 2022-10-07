import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: true,
    products: [],
    productUpdating : null,
    loading: false,
    error: false,
    errors: {},
    errorMessage: null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setError: (state) => {
      state.error = true;
    },
    setProducts: ( state, { payload } ) => {
      state.products = payload.products;
      state.productUpdating = {};
      state.loading = false;
    },
    addNewProduct: (state, { payload }) => {
      state.products.push( payload );
      state.loading = false;
    },
    setProductUpdating: (state, {payload}) => {
      state.productUpdating = payload;
      state.error = payload?.error;
      state.errorMessage = payload?.errorMessage;
      state.loading = false;
    },
    updateProduct: (state, { payload }) => {
      state.products = state.products.map( product => {

        if ( product.id === payload.id ) return payload;

        return product;

      });
      state.loading = false;
    }
  }
});


// Action creators are generated for each case reducer function
export const { startLoading, setProducts, addNewProduct, setProductUpdating, updateProduct, setError } = appSlice.actions;