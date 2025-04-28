/*
 * @Author: Mark
 * @Date: 2025-04-28 16:52:27
 * @LastEditTime: 2025-04-28 17:12:17
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/CheckboxComp/index.tsx
 */
import Checkbox from '@/components/Common/checkbox'; // 用的是你刚才的自定义 Checkbox
interface Option<T> {
  label: string ;
  value: T;
}

interface CheckboxGroupProps<T extends string | number> {
  options: Option<T>[];
  checkedList: T[];
  onChange: (checkedList: T[]) => void;
  className?: string;
}

const CheckboxGroup = <T extends string | number>({
  options,
  checkedList,
  onChange,
  className,
}: CheckboxGroupProps<T>) => {

  const handleChange = (value: T, checked: boolean) => {
    const newList = checked
      ? [...checkedList, value]
      : checkedList.filter(item => item !== value);
    onChange(newList);
  };

  return (
    <div className={className }>
      {options.map(option => (
        <Checkbox
          key={option.value}
          value={option.value}
          checked={checkedList.includes(option.value)}
          onChange={handleChange}
          label={option.label}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
