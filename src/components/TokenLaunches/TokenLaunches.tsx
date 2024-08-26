import { AvailableTokenList } from '../AvailableTokenList/AvailableTokenList';
import styles from './TokenLaunches.module.scss';

export const TokenLaunches = () => {
  return (
    <div className={styles.tokenLaunches}>
      <h5 className={styles.tokenLaunches_title}>Available tokens</h5>
      <p className={styles.tokenLaunches_descr}>
        Take part in the token launch
      </p>
      <AvailableTokenList />
    </div>
  );
};
