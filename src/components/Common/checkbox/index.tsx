import cs from 'classnames';
import styles from './index.module.scss';
import IconFont from '../Iconfont';
import { EnumIconFontType } from '@/enum/enumIconFontType';

interface CheckboxProps<T extends string | number> {
  value: T; // ✅ 每个Checkbox有自己的值
  checked: boolean;
  onChange: (value: T, checked: boolean) => void; // ✅ 返回哪个值被点击了
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Checkbox = <T extends string | number>({
    value,
    checked,
    onChange,
    disabled = false,
    label,
    className
  }: CheckboxProps<T>) => {
    const handleClick = () => {
      if (disabled) return;
      onChange(value, !checked);
    };

  return (
    <div id={String(value)}
      className={cs(styles.checkbox_item, className, { [styles.disabled]: disabled })}
      onClick={handleClick}
    >
      <div className={cs(styles.checkbox, { [styles.checked]: checked })}>
        {checked && <IconFont className={cs(styles.checkmark,EnumIconFontType.icon_xuanzhong)} /> }
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default Checkbox;
