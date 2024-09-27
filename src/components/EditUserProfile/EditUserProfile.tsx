import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import { useUpdateUserMutation } from '../../redux/userApi';
import { useAppSelector } from '../../redux/hooks';
import { User } from '../../types/user';
import { ErrorResponse } from '../../types/errors';
import styles from './EditUserProfile.module.scss';

interface FormInput extends User {}

export const EditUserProfile = () => {
  const name = useAppSelector((state) => state.user.name);
  const lastname = useAppSelector((state) => state.user.lastname);
  const email = useAppSelector((state) => state.user.email);
  const country = useAppSelector((state) => state.user.country);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      name: name ?? '',
      lastname: lastname ?? '',
      email: email ?? '',
      country: country ?? '',
    },
  });

  const [updateUser, { isLoading, error: errorUpdate }] =
    useUpdateUserMutation();

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
  };

  return (
    <div className={styles.user}>
      <h4 className={styles.user_title}>User Information</h4>
      <p className={styles.user_text}>Manage your personal data</p>

      <form className={styles.user_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.user_form_group}>
          <label htmlFor="name">First Name:</label>
          <input
            {...register('name', { required: '* fill the field' })}
            type="text"
          />
          <p className={styles.user_error}>{errors?.name?.message}</p>
        </div>
        <div className={styles.user_form_group}>
          <label htmlFor="lastname">Last Name:</label>
          <input
            {...register('lastname', { required: '* fill the field' })}
            type="text"
          />
          <p className={styles.user_error}>{errors?.lastname?.message}</p>
        </div>
        <div className={styles.user_form_group}>
          <label htmlFor="email">Email address:</label>
          <input
            {...register('email', { required: '* fill the field' })}
            type="email"
          />
          <p className={styles.user_error}>
            {errors?.email?.message ||
              (errorUpdate && (errorUpdate as ErrorResponse).data.message)}
          </p>
        </div>
        <div className={styles.user_form_group}>
          <label htmlFor="country">Your country:</label>
          <input
            {...register('country', { required: '* fill the field' })}
            type="text"
          />
          <p className={styles.user_error}>{errors?.country?.message}</p>
        </div>

        <CustomButton
          type={'submit'}
          width={162}
          height={53}
          disabled={isLoading}
        >
          Update
        </CustomButton>
      </form>
    </div>
  );
};
