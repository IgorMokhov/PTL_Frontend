import styles from './TokenListHeader.module.scss';

interface TokenListHeaderProps {
  titles: string[];
}

export const TokenListHeader = ({ titles }: TokenListHeaderProps) => {
  return (
    <div className={styles.titles}>
      {titles.map((title) => (
        <span className={styles.title}>{title}</span>
      ))}
    </div>
  );
};
