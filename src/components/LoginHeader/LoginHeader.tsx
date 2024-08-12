import { useLocation } from 'react-router-dom';
import loginIcon from '../../assets/icons/iconLogin.svg';

import styles from './LoginHeader.module.scss';

export const LoginHeader = () => {
  const { pathname } = useLocation();

  const getTitle = (pathname: string): string => {
    switch (pathname) {
      case '/login':
        return 'Login to your account';
        break;
      case '/signup':
        return 'Create your personal account ';
        break;
      case '/forgot-password':
        return 'Recovering your password';
        break;
      default:
        return '';
        break;
    }
  };

  const getText = (pathname: string): string => {
    switch (pathname) {
      case '/login':
        return 'to participate in the best projects';
        break;
      case '/signup':
        return 'to participate in the best projects';
        break;
      case '/forgot-password':
        return 'restoring access to your account';
        break;
      default:
        return '';
        break;
    }
  };

  const title = getTitle(pathname);
  const text = getText(pathname);

  return (
    <div className={styles.login_header}>
      <div className={styles.login_header_logo}>
        <img src={loginIcon} alt="login icon" />
        <h4>PrimeTokenList</h4>
      </div>
      <h2 className={styles.login_header_title}>{title}</h2>
      <p className={styles.login_header_text}>{text}</p>
    </div>
  );
};
