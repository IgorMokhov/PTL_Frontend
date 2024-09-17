import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notfound}>
      <h2 className={styles.notfound_title}>404 Page not found</h2>
      <CustomButton width={226} height={53} onClick={() => navigate('/')}>
        Back
      </CustomButton>
    </div>
  );
};
