import { useAppSelector } from '../hooks';

export const useAuth = () => {
  const { token } = useAppSelector((state) => state.auth);

  return {
    isAuth: !!token,
  };
};
