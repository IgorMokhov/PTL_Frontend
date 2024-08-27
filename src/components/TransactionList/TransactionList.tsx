import iconTest from '../../assets/icons/testIcon.svg';
import { TransactionItem } from '../TransactionItem/TransactionItem';
import styles from './TransactionList.module.scss';

export const TransactionList = () => {
  // test data
  const transactions = [
    {
      tokenIcon: iconTest,
      token: '$PUSH',
      project: 'Apusher',
      cost: '$150',
      purchased: '$10B',
      quantity: '10.0',
      total: '$1,500',
    },
    {
      tokenIcon: iconTest,
      token: '$RDYX',
      project: 'READYgg',
      cost: '$0.16',
      purchased: '$1.6B',
      quantity: '200.0',
      total: '$500',
    },
  ];

  return (
    <div className={styles.transaction_list}>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </div>
  );
};
