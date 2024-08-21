import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './EditUserProfile.module.scss';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

export const EditUserProfile = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.user}>
      <h4 className={styles.user_title}>User Information</h4>
      <p className={styles.user_text}>Manage your personal data</p>

      <form className={styles.user_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.user_form_group}>
          <label htmlFor="firstName">First Name:</label>
          <input {...register('firstName')} type="text" />
        </div>
        <div className={styles.user_form_group}>
          <label htmlFor="lastName">Last Name:</label>
          <input {...register('lastName')} type="text" />
        </div>
        <div className={styles.user_form_group}>
          <label htmlFor="email">Email address:</label>
          <input {...register('email')} type="email" />
        </div>
        <div className={styles.user_form_group}>
          <label htmlFor="country">Your country:</label>
          <input {...register('country')} type="text" />
        </div>
        <CustomButton type={'submit'} width={162} height={53}>
          Update
        </CustomButton>
      </form>
    </div>
  );
};
