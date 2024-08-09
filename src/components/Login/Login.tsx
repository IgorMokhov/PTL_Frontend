import { useForm, SubmitHandler } from 'react-hook-form';
import loginIcon from '../../assets/icons/iconLogin.svg';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

interface IFormInput {
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
        <div className={styles.login_logo}>
          <img src={loginIcon} alt="login icon" />
          <h4 className={styles.login_logo_title}>PrimeTokenList</h4>
        </div>
        <h2 className={styles.login_title}>Login to your account</h2>
        <p className={styles.login_text}>to participate in the best projects</p>

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
