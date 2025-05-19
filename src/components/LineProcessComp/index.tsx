import React from 'react';
import styles from './index.module.scss';
import { pxToRem } from '@/utils/common';
import LineProcess from './LineProcess';

interface LineProcessProps {
  title: string;
  leftValue: number;
  rightValue: number;
  height?:number;
  leftColor?: string;
  rightColor?: string;
}

const LineProcessComp: React.FC<LineProcessProps> = ({
  title,
  height,
  leftValue,
  rightValue,
  leftColor , // 蓝色
  rightColor , // 橙色
}) => {
  const total = leftValue + rightValue;
  const leftRatio = total === 0 ? 0 : (leftValue / total) * 100;
  const rightRatio = 100 - leftRatio;

  return (
    <div className={styles.LineProcessComp}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <span className={styles.leftValue}>{leftValue}</span>
          <LineProcess 
          className={styles.LineProcess_wrap}
          leftRatio={leftRatio} 
          rightRatio={rightRatio}
          leftColor={leftColor}
          rightColor={rightColor}
          height={height}
          />
        <span className={styles.rightValue}>{rightValue}</span>
      </div>
    </div>
  );
};

export default LineProcessComp;
