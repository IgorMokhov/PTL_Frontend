import iconTest from '../../assets/icons/testIcon.svg';
import { PurchasedToken } from '../PurchasedToken/PurchasedToken';
import styles from './PurchasedTokenList.module.scss';

interface PurchasedTokenListProps {
  openModal: () => void;
}

export const PurchasedTokenList = ({ openModal }: PurchasedTokenListProps) => {
  // test data
  const purchasedTokens = [
    {
      tokenIcon: iconTest,
      token: '$PUSH',
      quantity: '10.0',
      balance: '$ 1500',
      date: '2024-03-05',
      status: 'active',
      action: 'Withdraw',
    },
    {
      tokenIcon: iconTest,
      token: '$RDYX',
      quantity: '200.0',
      balance: '$ 32',
      date: '2024-01-07',
      status: 'active',
      action: 'Withdraw',
    },
  ];

  return (
    <div className={styles.purchased_list}>
      {purchasedTokens.map((token, index) => (
        <PurchasedToken key={index} {...token} openModal={openModal} />
      ))}
    </div>
  );
};
