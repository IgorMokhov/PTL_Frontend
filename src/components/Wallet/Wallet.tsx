import { CustomButton } from '../CustomButton/CustomButton';
import { PurchasedTokenList } from '../PurchasedTokenList/PurchasedTokenList';
import { TokenListHeader } from '../TokenListHeader/TokenListHeader';
import styles from './Wallet.module.scss';

export const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <h6 className={styles.wallet_title}>Your balance</h6>
      <div className={styles.wallet_balans}>{`$ ${1532}.00`}</div>

      <div className={styles.wallet_header}>
        <div className={styles.wallet_header_wrapper}>
          <h5 className={styles.wallet_title}>Tokens</h5>
          <p className={styles.wallet_subtitle}>Your purchased tokens</p>
        </div>
        <CustomButton width={247} height={53} iconVariant={'buy'}>
          Buy more tokens
        </CustomButton>
      </div>

      <div className={styles.wallet_list}>
        <TokenListHeader
          titles={[
            'Token',
            'Quantity',
            'Balance (USD)',
            'Date of purchase',
            'Status',
            'Action',
          ]}
        />
        <PurchasedTokenList />
      </div>

      <div className={styles.wallet_header}>
        <div className={styles.wallet_header_wrapper}>
          <h5 className={styles.wallet_title}>About Tokens</h5>
          <p className={styles.wallet_subtitle}>
            Main characteristics of your tokens
          </p>
        </div>
      </div>

      <div className={styles.wallet_list}>
        <TokenListHeader
          titles={[
            'Token',
            'Project',
            'Cost per 1 token (USD)',
            'Market Cap (USD)',
            'Total Supply',
            'Algorithm',
          ]}
        />
      </div>
    </div>
  );
};
