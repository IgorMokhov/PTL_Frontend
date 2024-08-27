import iconTest from '../../assets/icons/testIcon.svg';
import { InfoToken } from '../InfoToken/InfoToken';
import styles from './InfoTokenList.module.scss';

export const InfoTokenList = () => {
  // test data
  const infoTokenList = [
    {
      tokenIcon: iconTest,
      token: '$PUSH',
      project: 'Apusher',
      cost: '$ 150',
      market: '$ 10B',
      total: '84M',
      algorithm: 'Proof of Work',
    },
    {
      tokenIcon: iconTest,
      token: '$RDYX',
      project: 'READYgg',
      cost: '$ 0.16',
      market: '$ 1.6B',
      total: '60M',
      algorithm: 'Proof of Stake',
    },
  ];

  return (
    <div className={styles.info_list}>
      {infoTokenList.map((token, index) => (
        <InfoToken key={index} {...token} />
      ))}
    </div>
  );
};
