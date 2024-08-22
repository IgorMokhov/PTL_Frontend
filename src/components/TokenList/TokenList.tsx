import { Token } from '../Token/Token';
import styles from './TokenList.module.scss';

export const TokenList = () => {
  return (
    <div className={styles.tokenList}>
      <Token />
    </div>
  );
};
