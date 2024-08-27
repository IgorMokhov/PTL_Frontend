import styles from './TransactionItem.module.scss';

interface TransactionItemProps {
  tokenIcon: string;
  token: string;
  project: string;
  cost: string;
  purchased: string;
  quantity: string;
  total: string;
}

export const TransactionItem = ({
  tokenIcon,
  token,
  project,
  cost,
  purchased,
  quantity,
  total,
}: TransactionItemProps) => {
  return (
    <div className={styles.transaction}>
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
