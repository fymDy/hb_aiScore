import React from 'react';
import styles from './index.module.scss';
import { pxToRem } from '@/utils/common';
import cs from 'classnames'

interface LineProcessProps {

  leftRatio: number;
  rightRatio: number;
  leftColor?: string;
  rightColor?: string;
  height?:number;
  className?:string
}

const LineProcess: React.FC<LineProcessProps> = ({
  leftRatio,
  rightRatio,
  height=4,
  leftColor = '#2196F3', // 蓝色
  rightColor = '#FFBA5A', // 橙色
className
}) => {


  return (
  <div className={cs(styles.LineProcess ,className)} style={{height:pxToRem(height)}}>
          <div
            className={styles.leftBar}
            style={{ width: `${leftRatio}%`, backgroundColor: leftColor }}
          />
          <div
            className={styles.rightBar}
            style={{ width: `${rightRatio}%`, backgroundColor: rightColor }}
          />
        </div>
  );
};

export default LineProcess;
