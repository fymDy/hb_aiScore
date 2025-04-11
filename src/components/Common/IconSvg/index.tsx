import React from 'react';
import classNames from 'classnames';
import { pxToRem } from '@/utils/common';

interface SvgIconProps {
  name: string; // 对应雪碧图中的 symbol ID，如 iconPenalty
  size?: number ; // 图标大小，默认 14
  color?: string; // 图标颜色，默认 currentColor
  className?: string; // 可扩展自定义类名
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, size = 14, color = 'currentColor', className }) => {
  const style: React.CSSProperties = {
    width: pxToRem(size),
    height: pxToRem(size),
    fill: color,
  };

  return (
    <svg className={classNames('svg-icon', className)} style={style} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default SvgIcon;