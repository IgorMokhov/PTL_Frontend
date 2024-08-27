import styles from './InfoToken.module.scss';

interface InfoTokenProps {
  tokenIcon: string;
  token: string;
  project: string;
  cost: string;
  market: string;
  total: string;
  algorithm: string;
}

export const InfoToken = ({
  tokenIcon,
  token,
  project,
  cost,
  market,
  total,
  algorithm,
}: InfoTokenProps) => {
  return (
    <div className={styles.info_token}>
      <span>
        <img src={tokenIcon} alt="tokenIcon" />
        {token}
      </span>
      <span>{project}</span>
      <span>{cost}</span>
      <span>{market}</span>
      <span>{total}</span>
      <span>{algorithm}</span>
    </div>
  );
};
