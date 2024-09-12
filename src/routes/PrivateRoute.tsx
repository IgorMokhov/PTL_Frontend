import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../redux/customHooks/useAuth';

export const PrivateRoute = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
