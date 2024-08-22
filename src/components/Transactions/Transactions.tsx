import { CustomButton } from '../CustomButton/CustomButton';
import { TransactionList } from '../TransactionList/TransactionList';
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
          <CustomButton width={247} height={53}>
            Buy more tokens
          </CustomButton>
        )}
      </div>

      {isTransactions ? (
        <>
          <div className={styles.transactions_history}>
            <div className={styles.transactions_history_header}>
              <span>Token</span>
              <span>Project</span>
              <span>Cost per 1 token (USD)</span>
              <span>Tokens purchased (USD)</span>
              <span>Quantity</span>
              <span>Total amount (USD)</span>
            </div>
          </div>
          <TransactionList />
        </>
      ) : (
        <>
          <p className={styles.transactions_text}>
            Here you can see all your transactions: tokens purchased, quantity,
            time of purchase and amount spent. Buy your first token now!
          </p>
          <CustomButton width={298} height={53}>
            Buy your first token
          </CustomButton>
        </>
      )}
    </div>
  );
};
