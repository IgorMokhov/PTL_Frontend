import iconBuy from '../../assets/icons/iconBuy.svg';
import iconWithdraw from '../../assets/icons/iconWithdraw.svg';
import styles from './CustomButton.module.scss';

type iconVariantType = false | 'buy' | 'withdraw';

interface CustomButtonProps {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  width?: number;
  height?: number;
  variant?: 'default' | 'inverted';
  iconVariant?: iconVariantType;
  disabled?: boolean;
  onClick?: () => void;
}

export const CustomButton = ({
  children,
  type = 'button',
  width,
  height,
  variant = 'default',
  iconVariant = false,
  disabled = false,
  onClick,
}: CustomButtonProps) => {
  const getIcon = (iconVariant: iconVariantType) => {
    switch (iconVariant) {
      case 'buy':
        return iconBuy;
        break;
      case 'withdraw':
        return iconWithdraw;
        break;
      default:
        break;
    }
  };
  const icon = getIcon(iconVariant);

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
      {iconVariant && <img src={icon} alt="icon-button" />}
      {children}
    </button>
  );
};
