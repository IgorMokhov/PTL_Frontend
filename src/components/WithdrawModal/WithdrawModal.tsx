import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton/CustomButton';
import iconClose from '../../assets/icons/iconClose.svg';
import styles from './WithdrawModal.module.scss';

interface WithdrawModalProps {
  onClose: () => void;
}

interface FormInputs {
  address: string;
  network: string;
  amount: number;
  total: number;
}

export const WithdrawModal = ({ onClose }: WithdrawModalProps) => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    onClose();
  };

  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.backdrop} onClick={handleBackDropClick}>
      <div className={styles.modal}>
        <h2 className={styles.modal_title}>Withdraw Tokens</h2>
        <p className={styles.modal_text}>
          Please enter the required details to withdraw tokens
        </p>
        <button className={styles.modal_close} onClick={onClose}>
          <img src={iconClose} alt="close" />
        </button>

        <form className={styles.modal_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.modal_form_inner}>
            <div className={styles.modal_form_group}>
              <label htmlFor="address">Withdrawal Address:</label>
              <input {...register('address')} type="text" id="address" />
            </div>
            <div className={styles.modal_form_group}>
              <label htmlFor="network">Withdrawal Network:</label>
              <input {...register('network')} type="text" id="network" />
            </div>
            <div className={styles.modal_form_group}>
              <label htmlFor="amount">Amount:</label>
              <input {...register('amount')} type="number" id="amount" />
            </div>
            <div className={styles.modal_form_group}>
              <label htmlFor="total">Total you will receive:</label>
              <input {...register('total')} type="number" id="total" />
            </div>
          </div>
          <p className={styles.modal_descr}>
            Make sure the entered data is correct before clicking the "Withdraw
            tokens" button
          </p>
          <div className={styles.modal_form_btns}>
            <button className={styles.modal_form_cancel} onClick={onClose}>
              Cancel
            </button>
            <CustomButton
              width={278}
              height={53}
              iconVariant={'withdraw'}
              type="submit"
            >
              Withdraw Tokens
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};
