import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import { useUpdatePasswordMutation } from '../../redux/userApi';
import { ErrorResponse } from '../../types/errors';
import styles from './EditUserPassword.module.scss';

interface IFormInput {
  newPass: string;
  newPassConfirm: string;
  currentPass: string;
}

export const EditUserPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const [updatePassword, { error: errorUpdate }] = useUpdatePasswordMutation();

  const newPassValue = watch('newPass');

  const onSubmit: SubmitHandler<IFormInput> = async ({
    newPass,
    newPassConfirm,
    currentPass,
  }) => {
    await updatePassword({
      new_password: newPass,
      confirm_password: newPassConfirm,
      old_password: currentPass,
    }).unwrap();
    reset();
  };

  return (
    <div className={styles.password}>
      <h4 className={styles.password_title}>Password</h4>
      <p className={styles.password_text}>Change your password</p>

      <form className={styles.password_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.password_form_group}>
          <label htmlFor="newPass">New password:</label>
          <input
            {...register('newPass', { required: '* fill the field' })}
            type="password"
          />
          <p className={styles.password_error}>{errors?.newPass?.message}</p>
        </div>
        <div className={styles.password_form_group}>
          <label htmlFor="newPassConfirm">New password confirmation:</label>
          <input
            {...register('newPassConfirm', {
              required: '* fill the field',
              validate: (value) =>
                value === newPassValue || '* passwords do not match',
            })}
            type="password"
          />
          <p className={styles.password_error}>
            {errors?.newPassConfirm?.message}
          </p>
        </div>
        <div className={styles.password_form_group}>
          <label htmlFor="currentPass">Current password:</label>
          <input
            {...register('currentPass', { required: '* fill the field' })}
            type="password"
          />
          <p className={styles.password_error}>
            {errors?.currentPass?.message ||
              (errorUpdate && (errorUpdate as ErrorResponse).data.message)}
          </p>
        </div>
        <CustomButton type={'submit'} width={162} height={53}>
          Update
        </CustomButton>
      </form>
      <p className={styles.password_descr}>
        For your safety, any password or email changes will disable withdrawals
        from your account for 24 hours
      </p>
    </div>
  );
};
