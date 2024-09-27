import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import styles from './Verification.module.scss';
import { useAppSelector } from '../../redux/hooks';

interface FormInput {
  email: string;
  citizenUS: boolean;
}

export const Verification = () => {
  const email = useAppSelector((state) => state.user.email);

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FormInput>({
    defaultValues: { email: email ?? '', citizenUS: true },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

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
          <p className={styles.verification_error}>{errors.email?.message}</p>
        </label>
        <input
          {...register('email', { required: '* fill the field' })}
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
        <CustomButton width={325} height={53} type="submit" disabled={!isValid}>
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
