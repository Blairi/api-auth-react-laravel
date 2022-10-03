import { Routes, Route } from 'react-router-dom';

import { AuthRoutes } from '../auth/router/AuthRoutes';
import { AppRoutes } from "../app/router/AppRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={<AuthRoutes />} />
      <Route path='/*' element={<AppRoutes />}/>
    </Routes>
  )
}
