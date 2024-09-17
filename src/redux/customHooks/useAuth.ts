import { useAppSelector } from '../hooks';

export const useAuth = (): { isAuth: boolean } => {
  const token = useAppSelector((state) => state.auth.token);

  return {
    isAuth: !!token,
  };
};
