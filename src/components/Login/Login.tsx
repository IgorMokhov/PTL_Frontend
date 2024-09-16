import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import { CustomButton } from '../CustomButton/CustomButton';
import { useLoginMutation } from '../../redux/userApi';
import { useAppDispatch } from '../../redux/hooks';
import { setToken } from '../../redux/slices/auth/authSlice';
import { useEffect } from 'react';
import { useAuth } from '../../redux/customHooks/useAuth';
import { ErrorResponse } from '../../types/errors';
import styles from './Login.module.scss';

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const [login, { isSuccess, data, isLoading, error: errorLogin }] =
    useLoginMutation();

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }) => {
    reset();
    await login({ email, password }).unwrap();
  };

  useEffect(() => {
    if (isSuccess && data) {
      const token = data.token;
      dispatch(setToken(token));
      navigate('/');
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <LoginHeader />

        <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            Email:
            <p className={styles.login_error}>{errors?.email?.message}</p>
          </label>
          <input
            {...register('email', { required: '* fill the field' })}
            type="email"
            placeholder="Your email address"
          />
          <label htmlFor="email">
            Password:
            <p className={styles.login_error}>
              {errors?.password?.message ||
                (errorLogin && (errorLogin as ErrorResponse).data.message)}
            </p>
          </label>
          <input
            {...register('password', { required: '* fill the field' })}
            type="password"
            placeholder="Your password"
          />

          <Link className={styles.login_forgot_link} to="/forgot-password">
            Forgot your password?
          </Link>
          <CustomButton
            width={140}
            height={53}
            variant={'inverted'}
            disabled={isLoading}
            type={'submit'}
          >
            Sign In
          </CustomButton>
        </form>

        <div className={styles.login_footer}>
          <span className={styles.login_footer_text}>
            Don't have an account yet?
          </span>
          <Link className={styles.login_footer_link} to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
