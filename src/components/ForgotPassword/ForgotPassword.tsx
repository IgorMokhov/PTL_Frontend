import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './ForgotPassword.module.scss';

interface IFormInput {
  email: string;
  password: string;
}

export const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    if (step === 1) {
      console.log(email);
    } else if (step === 2) {
      console.log(password);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.forgot_pass}>
        <LoginHeader />

        {step == 1 ? (
          <>
            {' '}
            <h6 className={styles.forgot_pass_subtitle}>Enter your email</h6>
            <p className={styles.forgot_pass_text}>
              Enter the email address you used to register your account. We will
              send you a new password in a letter.
            </p>
            <form
              className={styles.forgot_pass_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="email">Email:</label>
              <input
                {...register('email')}
                type="email"
                placeholder="Your email address"
              />
              <div className={styles.forgot_pass_btns}>
                <CustomButton
                  width={140}
                  height={53}
                  onClick={() => navigate('/login')}
                >
                  Back
                </CustomButton>
                <CustomButton
                  width={226}
                  height={53}
                  variant={'inverted'}
                  type={'submit'}
                >
                  Send password
                </CustomButton>
              </div>
            </form>
          </>
        ) : (
          <>
            <h6 className={styles.forgot_pass_subtitle}>
              Enter your new password
            </h6>
            <p className={styles.forgot_pass_text}>
              We have sent your new password to your email{' '}
              <span>your.mail@gmail.com.</span>
              Check your message and enter your new password to restoring access
              to your account
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
                <CustomButton
                  width={140}
                  height={53}
                  onClick={() => setStep(1)}
                >
                  Back
                </CustomButton>
                <CustomButton
                  width={247}
                  height={53}
                  variant={'inverted'}
                  type={'submit'}
                >
                  Change password
                </CustomButton>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
