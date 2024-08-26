import styles from './Token.module.scss';

interface TokenProps {
  tokenIcon: string;
  token: string;
  project: string;
  cost: string;
  purchased: string;
  quantity: string;
  total: string;
}

export const Token = ({
  tokenIcon,
  token,
  project,
  cost,
  purchased,
  quantity,
  total,
}: TokenProps) => {
  return (
    <div className={styles.token}>
      <span>
        <img src={tokenIcon} alt="tokenIcon" />
        {token}
      </span>
      <span>{project}</span>
      <span>{cost}</span>
      <span>{purchased}</span>
      <span>{quantity}</span>
      <span>{total}</span>
    </div>
  );
};
