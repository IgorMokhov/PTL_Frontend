import { AvailableToken } from '../AvailableToken/AvailableToken';
import styles from './AvailableTokenList.module.scss';

export const AvailableTokenList = () => {
  return (
    <div className={styles.tokenList}>
      <AvailableToken />
    </div>
  );
};
