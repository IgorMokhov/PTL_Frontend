import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import { useUpdateUserMutation } from '../../redux/userApi';
import { useAppSelector } from '../../redux/hooks';
import { User } from '../../types/user';
import styles from './EditUserProfile.module.scss';

interface FormInput extends User {}

export const EditUserProfile = () => {
  const name = useAppSelector((state) => state.user.name);
  const lastname = useAppSelector((state) => state.user.lastname);
  const email = useAppSelector((state) => state.user.email);
  const country = useAppSelector((state) => state.user.country);

  const { register, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {
      name: name ?? '',
      lastname: lastname ?? '',
      email: email ?? '',
      country: country ?? '',
    },
  });
  const [updateUser] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<FormInput> = async ({
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
