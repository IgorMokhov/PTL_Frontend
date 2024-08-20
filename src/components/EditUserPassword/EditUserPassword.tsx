import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './EditUserPassword.module.scss';

interface IFormInput {
  newPass: string;
  newPassConfirm: string;
  currentPass: string;
}

export const EditUserPassword = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.password}>
      <h4 className={styles.password_title}>Password</h4>
      <p className={styles.password_text}>Change your password</p>

      <form className={styles.password_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.password_form_group}>
          <label htmlFor="newPass">New password:</label>
          <input {...register('newPass')} type="password" />
        </div>
        <div className={styles.password_form_group}>
          <label htmlFor="newPassConfirm">New password confirmation:</label>
          <input {...register('newPassConfirm')} type="password" />
        </div>
        <div className={styles.password_form_group}>
          <label htmlFor="currentPass">Current password:</label>
          <input {...register('currentPass')} type="password" />
        </div>
        <button type="submit">Update</button>
      </form>
      <p className={styles.password_descr}>
        For your safety, any password or email changes will disable withdrawals
        from your account for 24 hours
      </p>
    </div>
  );
};
