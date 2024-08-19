import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PrivateRoute = () => {
  const isAuth = true;
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
