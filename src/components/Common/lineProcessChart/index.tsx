import React from 'react';
import styles from './index.module.scss';
import { pxToRem } from '@/utils/common';

interface HorizontalBarChartProps {
  title: string;
  leftValue: number;
  rightValue: number;
  height?:number;
  leftColor?: string;
  rightColor?: string;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  title,
  height=4,
  leftValue,
  rightValue,
  leftColor = '#2196F3', // 蓝色
  rightColor = '#FFBA5A', // 橙色
}) => {
  const total = leftValue + rightValue;
  const leftRatio = total === 0 ? 0 : (leftValue / total) * 100;
  const rightRatio = 100 - leftRatio;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <span className={styles.leftValue}>{leftValue}</span>
        <div className={styles.bar} style={{height:pxToRem(height)}}>
          <div
            className={styles.leftBar}
            style={{ width: `${leftRatio}%`, backgroundColor: leftColor }}
          />
          <div
            className={styles.rightBar}
            style={{ width: `${rightRatio}%`, backgroundColor: rightColor }}
          />
        </div>
        <span className={styles.rightValue}>{rightValue}</span>
      </div>
    </div>
  );
};

export default HorizontalBarChart;
