import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.scss';

interface IFormInput {
  password: string;
}

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate('/login');
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.forgot_pass}>
        <LoginHeader />

        <h6 className={styles.forgot_pass_subtitle}>Enter your new password</h6>
        <p className={styles.forgot_pass_text}>
          We have sent your new password to your email{' '}
          <span>your.mail@gmail.com.</span>
          Check your message and enter your new password to restoring access to
          your account
        </p>

        <form
          className={styles.forgot_pass_form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="password">Enter password:</label>
          <input
            {...register('password')}
            type="password"
            placeholder="Password from the letter"
          />
          <div className={styles.forgot_pass_btns}>
            <button
              className={styles.forgot_pass_back}
              onClick={() => navigate('/login')}
            >
              Back
            </button>
            <button className={styles.forgot_pass_submit}>
              Change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
