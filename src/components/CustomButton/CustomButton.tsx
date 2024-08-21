import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  width?: number;
  height?: number;
  variant?: 'default' | 'inverted';
  disabled?: boolean;
  onClick?: () => void;
}

export const CustomButton = ({
  children,
  type = 'button',
  width,
  height,
  variant = 'default',
  disabled = false,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`${styles.customButton} ${
        variant === 'default' ? styles.default : styles.inverted
      }`}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : '',
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
