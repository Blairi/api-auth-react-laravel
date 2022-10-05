import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../auth/router/AuthRoutes';
import { AppRoutes } from "../app/router/AppRoutes";

import { useCheckAuth } from '../hooks';

import { CheckingAuth } from '../ui/CheckingAuth';

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if(status === "checking"){
    return <CheckingAuth />
  }
  
  return (
    <Routes>
      {

        (status === "authenticated")
          ? <Route path='/*' element={<AppRoutes />} />
          : <Route path='auth/*' element={<AuthRoutes />} />

      }

      <Route path='/*' element={<Navigate to='/auth/login' />} />

    </Routes>
  )
}
