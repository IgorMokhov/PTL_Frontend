import { useEffect, useState } from 'react';
import { useLoginMutation, useSignupMutation } from '../../redux/userApi';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './SignUp.module.scss';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  citizenUS: boolean;
  password: string;
}

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const [
    signup,
    { isSuccess: isSuccessSignUp, isError: isErrorSignUp, error: errorSignUp },
  ] = useSignupMutation(); // for step one
  const [
    login,
    { isSuccess: isSuccessLogin, isError: isErrorLogin, error: errorLogin },
  ] = useLoginMutation(); // for step two

  const onSubmit: SubmitHandler<FormData> = ({
    firstName,
    lastName,
    email,
    country,
    citizenUS,
    password,
  }) => {
    if (step === 1) {
      signup({
        email: email,
        is_verified: citizenUS,
        first_name: firstName,
        last_name: lastName,
        country: country,
      });
    }
    if (step === 2) {
      login({ email, password });
    }
  };

  useEffect(() => {
    if (isSuccessSignUp) {
      setStep(2);
    } else if (isErrorSignUp) {
      console.log(errorSignUp);
    }
  }, [isSuccessSignUp, isErrorSignUp, errorSignUp]);

  useEffect(() => {
    if (isSuccessLogin) {
      navigate('/');
    } else if (isErrorLogin) {
      console.log(errorLogin);
    }
  }, [isSuccessLogin, isErrorLogin, errorLogin]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.signup}>
        <LoginHeader />

        <div className={styles.signup_step}>
          <span className={step === 1 ? `${styles.active_step}` : ''}></span>
          <span className={step === 2 ? `${styles.active_step}` : ''}></span>
        </div>

        {step === 1 ? (
          <>
            <div className={styles.signup_text}>
              Already have an account?{' '}
              <Link className={styles.signup_text_link} to="/login">
                Sign In
              </Link>
            </div>
            <form
              className={styles.signup_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.signup_form_group}>
                <label htmlFor="firstName">First Name:</label>
                <input
                  {...register('firstName', { required: '* fill the field' })}
                  type="text"
                  placeholder="Your First Name"
                />
                <p className={styles.signup_error}>
                  {errors?.firstName?.message}
                </p>
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  {...register('lastName', { required: '* fill the field' })}
                  type="text"
                  placeholder="Your Last Name"
                />
                <p className={styles.signup_error}>
                  {errors?.lastName?.message}
                </p>
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="email">Email address:</label>
                <input
                  {...register('email', { required: '* fill the field' })}
                  type="email"
                  placeholder="Your email address"
                />
                <p className={styles.signup_error}>{errors?.email?.message}</p>
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="country">Your country:</label>
                <input
                  {...register('country', { required: '* fill the field' })}
                  type="text"
                  placeholder="Your country"
                />
                <p className={styles.signup_error}>
                  {errors?.country?.message}
                </p>
              </div>
              <Controller
                name="citizenUS"
                control={control}
                defaultValue={true}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomCheckbox
                    value={field.value}
                    onChange={field.onChange}
                    label={'I am not a US citizen'}
                  />
                )}
              />
              <div className={styles.signup_form_btns}>
                <CustomButton
                  width={201}
                  height={53}
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </CustomButton>
                <CustomButton
                  width={140}
                  height={53}
                  type={'submit'}
                  variant={'inverted'}
                >
                  Next
                </CustomButton>
              </div>
            </form>
          </>
        ) : (
          <>
            <h4 className={styles.signup_title}>Enter your password</h4>
            <p className={styles.signup_descr}>
              We have sent your password to your email{' '}
              <span>your.mail@gmail.com.</span>your.mail@gmail.com. Check your
              message and enter your password to confirm your email and complete
              registration
            </p>
            <form
              className={styles.signup_form_step_two}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.signup_form_group}>
                <label htmlFor="password">Enter password:</label>
                <input
                  {...register('password', { required: '* fill the field' })}
                  type="password"
                  placeholder="Password from the letter"
                />
                <p className={styles.signup_error}>
                  {errors?.password?.message}
                </p>
              </div>
              <div className={styles.signup_form_btns}>
                <CustomButton
                  width={140}
                  height={53}
                  onClick={() => setStep(1)}
                >
                  Sign In
                </CustomButton>
                <CustomButton
                  width={140}
                  height={53}
                  type={'submit'}
                  variant={'inverted'}
                >
                  Sign Up
                </CustomButton>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
