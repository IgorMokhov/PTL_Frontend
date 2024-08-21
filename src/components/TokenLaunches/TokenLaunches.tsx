import { Container } from '../Container/Container';
import styles from './TokenLaunches.module.scss';

export const TokenLaunches = () => {
  return (
    <Container>
      <div className={styles.tokenLaunches}>
        <h5 className={styles.tokenLaunches_title}>Available tokens</h5>
        <p className={styles.tokenLaunches_descr}>
          Take part in the token launch
        </p>

      </div>
    </Container>
  );
};
