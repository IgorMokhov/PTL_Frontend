import { CustomButton } from '../CustomButton/CustomButton';
import testIson from '../../assets/icons/testIcon.svg';
import styles from './AvailableToken.module.scss';

interface AvailableTokenProps {}

export const AvailableToken = ({}: AvailableTokenProps) => {
  return (
    <div className={styles.token}>
      <img src={testIson} alt="testIson" />
      <div className={styles.token_content}>
        <div className={styles.token_title}>READYgg · $RDYX</div>
        <div className={styles.token_descr}>
          Platform for decentralized applications. The auction ends August 7,
          2024.
        </div>
      </div>
      <CustomButton width={190} height={40}>
        Participate now
      </CustomButton>
    </div>
  );
};
