import { useEffect, useState } from 'react';
import { useLoginMutation, useSignupMutation } from '../../redux/userApi';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import { CustomButton } from '../CustomButton/CustomButton';
import { useAppDispatch } from '../../redux/hooks';
import { setToken } from '../../redux/slices/auth/authSlice';
import { useAuth } from '../../redux/customHooks/useAuth';
import { User } from '../../types/user';
import { ErrorResponse } from '../../types/errors';
import styles from './SignUp.module.scss';

interface FormData extends User {
  citizenUS: boolean;
  password: string;
}

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const emailValue = watch('email');
  const passwordValue = watch('password');

  const [
    signup,
    {
      isSuccess: isSuccessSignUp,
      isError: isErrorSignUp,
      error: errorSignUp,
      isLoading: isLoadingSignUp,
    },
  ] = useSignupMutation(); // for step one
  const [
    login,
    {
      isSuccess: isSuccessLogin,
      isError: isErrorLogin,
      error: errorLogin,
      data: dataLogin,
      isLoading: isLoadingLogin,
    },
  ] = useLoginMutation(); // for step two

  const onSubmit: SubmitHandler<FormData> = async ({
    name,
    lastname,
    email,
    country,
    password,
  }) => {
    if (step === 1) {
      await signup({
        email,
        name,
        lastname,
        country,
      }).unwrap();
    }
    if (step === 2) {
      await login({ email, password }).unwrap();
    }
  };

  useEffect(() => {
    if (isSuccessSignUp) {
      setStep(2);
    } else if (isErrorSignUp) {
      reset();
      console.log(errorSignUp);
    }
  }, [isSuccessSignUp, isErrorSignUp, errorSignUp]);

  useEffect(() => {
    if (isSuccessLogin && dataLogin) {
      dispatch(setToken(dataLogin.token));
      navigate('/');
    } else if (isErrorLogin) {
      console.log(errorLogin);
    }
  }, [isSuccessLogin, isErrorLogin, errorLogin]);

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth]);

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
                <label htmlFor="name">First Name:</label>
                <input
                  {...register('name', { required: '* fill the field' })}
                  type="text"
                  placeholder="Your First Name"
                />
                <p className={styles.signup_error}>{errors?.name?.message}</p>
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="lastname">Last Name:</label>
                <input
                  {...register('lastname', { required: '* fill the field' })}
                  type="text"
                  placeholder="Your Last Name"
                />
                <p className={styles.signup_error}>
                  {errors?.lastname?.message}
                </p>
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="email">Email address:</label>
                <input
                  {...register('email', { required: '* fill the field' })}
                  type="email"
                  placeholder="Your email address"
                />
                <p className={styles.signup_error}>
                  {errors?.email?.message ||
                    (!emailValue &&
                      errorSignUp &&
                      (errorSignUp as ErrorResponse).data.message)}
                </p>
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
                  disabled={isLoadingSignUp}
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
                  {errors?.password?.message ||
                    (!passwordValue &&
                      errorLogin &&
                      (errorLogin as ErrorResponse).data.message)}
                </p>
              </div>
              <div className={styles.signup_form_btns}>
                <CustomButton
                  width={140}
                  height={53}
                  onClick={() => setStep(1)}
                >
                  Back
                </CustomButton>
                <CustomButton
                  width={140}
                  height={53}
                  type={'submit'}
                  variant={'inverted'}
                  disabled={isLoadingLogin}
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
