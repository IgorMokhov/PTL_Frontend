import { CustomButton } from '../CustomButton/CustomButton';
import { TokenListHeader } from '../TokenListHeader/TokenListHeader';
import { TokenList } from '../TokenList/TokenList';
import styles from './Transactions.module.scss';

export const Transactions = () => {
  const isTransactions = true; // from server

  return (
    <div className={styles.transactions}>
      <div className={styles.transactions_header}>
        <div className={styles.transactions_header_wrapper}>
          <h5 className={styles.transactions_title}>Your transactions</h5>
          <p className={styles.transactions_subtitle}>Purchase history</p>
        </div>
        {isTransactions && (
          <CustomButton width={247} height={53} iconVariant={'buy'}>
            Buy more tokens
          </CustomButton>
        )}
      </div>

      {isTransactions ? (
        <>
          <TokenListHeader
            titles={[
              'Token',
              'Project',
              'Cost per 1 token (USD)',
              'Tokens purchased (USD)',
              'Quantity',
              'Total amount (USD)',
            ]}
          />
          <TokenList />
        </>
      ) : (
        <>
          <p className={styles.transactions_text}>
            Here you can see all your transactions: tokens purchased, quantity,
            time of purchase and amount spent. Buy your first token now!
          </p>
          <CustomButton width={298} height={53} iconVariant={'buy'}>
            Buy your first token
          </CustomButton>
        </>
      )}
    </div>
  );
};
