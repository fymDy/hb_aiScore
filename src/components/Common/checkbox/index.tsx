/*
 * @Author: Mark
 * @Date: 2025-04-28 15:41:27
 * @LastEditTime: 2025-04-28 16:23:38
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/checkbox/index.tsx
 */

import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import cs from 'classnames'
import IconFont from '../Iconfont';
import { EnumIconFontType } from '@/enum/enumIconFontType';
interface CheckboxProps {
  checked: boolean;
  onChange: (id: string) => void;
  disabled?: boolean;
  id?: string;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  id='',
  label,
  className
}) => {
  const handleClick = (id:string) => {
    debugger
    if (disabled) return;
    onChange(id);
  };

  return (
    <div id={id} className={cs(styles.checkboxWrapper, className, { [styles.disabled]: disabled })}
      onClick={()=>handleClick(id)}>
         <div className={classNames(styles.checkbox, { [styles.checked]: checked })}>
            {checked &&  <IconFont className={cs(styles.checkmark,EnumIconFontType.icon_xuanzhong)} /> }
        </div>
        {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default Checkbox;

    