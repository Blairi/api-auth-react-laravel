import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './app/appSlice'
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    app: appSlice.reducer,  
  },
})