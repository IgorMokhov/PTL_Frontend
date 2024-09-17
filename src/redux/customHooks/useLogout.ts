import { useAppDispatch } from '../hooks';
import { removeToken } from '../slices/auth/authSlice';
import { removeUser } from '../slices/user/userSlice';

export const useLogout = (): (() => void) => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(removeToken());
    dispatch(removeUser());
  };

  return logout;
};
