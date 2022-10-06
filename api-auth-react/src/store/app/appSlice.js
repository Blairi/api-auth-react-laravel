import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: true,
    products: [],
    loading: false,
    error: false,
    errors: {},
    errorMessage: null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setProducts: ( state, { payload } ) => {
      state.products = payload.products;
      state.loading = false;
    },
  }
});


// Action creators are generated for each case reducer function
export const { setProducts, startLoading } = appSlice.actions;