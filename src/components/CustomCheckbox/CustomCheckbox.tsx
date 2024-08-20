import styles from './CustomCheckbox.module.scss';

interface CustomCheckboxProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

export const CustomCheckbox = ({
  label,
  value,
  onChange,
}: CustomCheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkbox_input}
        checked={value}
        onChange={onChange}
        type="checkbox"
        id="custom-checkbox"
      />
      <label className={styles.checkbox_label} htmlFor="custom-checkbox">
        {label}
      </label>
    </div>
  );
};
