import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import { useAppSelector } from '../../redux/hooks';
import { useVerificationMutation } from '../../redux/userApi';
import { ErrorResponse } from '../../types/errors';
import styles from './Verification.module.scss';

interface FormInput {
  email: string;
  citizenUS: boolean;
}

export const Verification = () => {
  const email = useAppSelector((state) => state.user.email);
  const isVerified = useAppSelector((state) => state.user.isVerified);

  const [
    verification,
    { isError: isErrorVerification, error: errorVerification },
  ] = useVerificationMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: { email: email ?? '', citizenUS: true },
  });

  const onSubmit: SubmitHandler<FormInput> = async () => {
    await verification().unwrap();
  };

  useEffect(() => {
    if (isErrorVerification) {
      console.log(errorVerification);
    }
  }, [isErrorVerification, errorVerification]);

  return (
    <div className={styles.verification}>
      <h5 className={styles.verification_title}>Confirm your identity</h5>
      <p className={styles.verification_text}>
        Confirm your email and nationality
      </p>
      <form
        className={styles.verification_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Email address:
          {errors.email ? (
            <p className={styles.verification_error}>
              {errors.email?.message ||
                (errorVerification &&
                  (errorVerification as ErrorResponse).data.message)}
            </p>
          ) : (
            isVerified && (
              <p className={styles.verification_verified}>confirmed</p>
            )
          )}
        </label>
        <input
          {...register('email', {
            required: '* fill the field',
            validate: (emailValue) =>
              email === emailValue || '* email do not match',
          })}
          type="email"
        />
        <Controller
          name="citizenUS"
          control={control}
          defaultValue={true}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomCheckbox
              onChange={field.onChange}
              value={field.value}
              label={'I am not a US citizen'}
            />
          )}
        />
        <CustomButton width={325} height={53} type="submit">
          Send a message to confirm
        </CustomButton>
      </form>
      <p className={styles.verification_descr}>
        We do not conduct full KYC. Therefore, legally, the buyer himself
        assumes the risks (If he is from the USA)
      </p>
    </div>
  );
};
