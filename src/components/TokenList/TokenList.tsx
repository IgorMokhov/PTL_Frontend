import iconTest from '../../assets/icons/testIcon.svg';
import { Token } from '../Token/Token';
import styles from './TokenList.module.scss';

export const TokenList = () => {
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
    <div className={styles.token_list}>
      {transactions.map((transaction) => (
        <Token {...transaction} />
      ))}
    </div>
  );
};
