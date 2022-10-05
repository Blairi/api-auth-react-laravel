import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    status: 'checking',
    email: null,
    displayName: null,
    token: null,
    errorMessage: null,
    errors: {},
    error: false,
  },

  reducers: {
    checkingCredentials: (state) => {
      state.status = 'checking'
    },
    login: ( state, {payload} ) => {
      state.status = 'authenticated';
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.token = payload.token;
      state.errorMessage = null;
      state.errors = {};
      state.error = payload?.error;
    },
    logout: ( state, { payload } ) => {
      state.status = 'not-authenticated';
      state.email = null;
      state.displayName = null;
      state.token = null;
      state.errorMessage = payload?.errorMessage;
      state.errors = payload?.errors;
      state.error = payload?.error;
    },
  }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials, logout, login } = authSlice.actions;