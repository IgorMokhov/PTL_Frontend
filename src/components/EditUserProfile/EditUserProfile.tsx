import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './EditUserProfile.module.scss';
import { useUpdateUserMutation } from '../../redux/userApi';
import { User } from '../../types/user';

interface IFormInput extends User {}

export const EditUserProfile = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      name: 'Nick',
      lastname: 'Stone',
      email: 'nickolas.stone@gmail.com',
      country: 'Russian Federation',
    },
  });
  const [updateUser] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<IFormInput> = async ({
    name,
    lastname,
    email,
    country,
  }) => {
    await updateUser({
      name,
      lastname,
      email,
      country,
    }).unwrap();
    reset();
  };

  return (
    <div className={styles.user}>
      <h4 className={styles.user_title}>User Information</h4>
      <p className={styles.user_text}>Manage your personal data</p>

      <form className={styles.user_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.user_form_group}>
          <label htmlFor="name">First Name:</label>
          <input {...register('name')} type="text" />
        </div>
        <div className={styles.user_form_group}>
          <label htmlFor="lastname">Last Name:</label>
          <input {...register('lastname')} type="text" />
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
