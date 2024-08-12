import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import styles from './Login.module.scss';

export interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <LoginHeader />

        <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Your email address"
          />
          <label htmlFor="email">Password:</label>
          <input
            {...register('password')}
            type="password"
            placeholder="Your password"
          />

          <Link className={styles.login_forgot_link} to="/forgot-password">
            Forgot your password?
          </Link>
          <button className={styles.login_submit} type="submit">
            Sign In
          </button>
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
