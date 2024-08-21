import { useState } from 'react';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import styles from './SignUp.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import { CustomButton } from '../CustomButton/CustomButton';

interface IFormInputStepOne {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  citizenUS: boolean;
}

interface IFormInputStepTwo {
  password: string;
}

export const SignUp = () => {
  const { register, handleSubmit, getValues, control, formState } =
    useForm<IFormInputStepOne>(); // for form in the step one
  const { register: registerStepTwo, handleSubmit: handleSubmitStepTwo } =
    useForm<IFormInputStepTwo>(); // for form in the step two
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const onSubmitStepOne: SubmitHandler<IFormInputStepOne> = (data) => {
    console.log(data);
    setStep(2);
  };

  const onSubmitStepTwo: SubmitHandler<IFormInputStepTwo> = (data) => {
    console.log(data);
    navigate('/');
  };

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
              onSubmit={handleSubmit(onSubmitStepOne)}
            >
              <div className={styles.signup_form_group}>
                <label htmlFor="firstName">First Name:</label>
                <input
                  {...register('firstName')}
                  type="text"
                  placeholder="Your First Name"
                />
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  {...register('lastName')}
                  type="text"
                  placeholder="Your Last Name"
                />
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="email">Email address:</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div className={styles.signup_form_group}>
                <label htmlFor="country">Your country:</label>
                <input
                  {...register('country')}
                  type="text"
                  placeholder="Your country"
                />
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
                  disabled={!formState.isValid}
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
              onSubmit={handleSubmitStepTwo(onSubmitStepTwo)}
            >
              <label htmlFor="password">Enter password:</label>
              <input
                {...registerStepTwo('password')}
                type="password"
                placeholder="Password from the letter"
              />
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
