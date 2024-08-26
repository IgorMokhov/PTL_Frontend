import styles from './TokenListHeader.module.scss';

interface TokenListHeaderProps {
  titles: string[];
}

export const TokenListHeader = ({ titles }: TokenListHeaderProps) => {
  return (
    <div className={styles.titles}>
      {titles.map((title, index) => (
        <span className={styles.title} key={index}>
          {title}
        </span>
      ))}
    </div>
  );
};
