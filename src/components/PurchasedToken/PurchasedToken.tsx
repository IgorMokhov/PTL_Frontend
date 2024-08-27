import { CustomButton } from '../CustomButton/CustomButton';
import styles from './PurchasedToken.module.scss';

interface PurchasedTokenProps {
  tokenIcon: string;
  token: string;
  quantity: string;
  balance: string;
  date: string;
  status: string;
  action: string;
}

export const PurchasedToken = ({
  tokenIcon,
  token,
  quantity,
  balance,
  date,
  status,
  action,
}: PurchasedTokenProps) => {
  return (
    <div className={styles.purchased_token}>
      <span>
        <img src={tokenIcon} alt="tokenIcon" />
        {token}
      </span>
      <span>{quantity}</span>
      <span>{balance}</span>
      <span>{date}</span>
      <span>{status}</span>
      <CustomButton width={138} height={40}>
        {action}
      </CustomButton>
    </div>
  );
};