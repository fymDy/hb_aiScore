import React from "react";
import styles from "./index.module.scss";
import { pxToCalc, pxToRem } from "@/utils/common";

interface CircleProcessChartProps {
  title?: string;
  leftValue: number;
  rightValue: number;
  leftColor?: string;
  rightColor?: string;
  strokeWidth?: number;
  diameter?: number;
}

const CircleProcessChart: React.FC<CircleProcessChartProps> = ({
  title = "控球率",
  leftValue,
  rightValue,
  leftColor = "#2196F3",
  rightColor = "#FFBA5A",
  strokeWidth = 2,
  diameter = 34,
}) => {
  const radius:number =(diameter - strokeWidth) / 2;
  const center = diameter / 2;
  const circumference = 2 * Math.PI * radius;

  const total = leftValue + rightValue;
  const leftRatio = total === 0 ? 0 : leftValue / total;
  const rightRatio = 1 - leftRatio;

  const arcPath = `
    M ${center} ${center}
    m 0, -${radius}
    a ${radius},${radius} 0 1,1 0,${2 * radius}
    a ${radius},${radius} 0 1,1 0,-${2 * radius}
  `;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.circleWrapper}>
        <div className={styles.leftText} style={{ color: leftColor }}>
          {leftValue}
        </div>
        <div   style={{ width: pxToRem(diameter), height: pxToRem(diameter) }}>
        <svg
         width="100%"
         height="100%"
          viewBox={`0 0 ${diameter} ${diameter}`}
        >
          {/* 蓝色：逆时针（镜像） */}
          <g transform={`scale(-1,1) translate(-${diameter},0)`}>
            <path
              d={arcPath}
              stroke={leftColor}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${leftRatio * circumference} ${circumference}`}
              strokeLinecap="round"
            />
          </g>
          {/* 橙色：顺时针（默认） */}
          <path
            d={arcPath}
            stroke={rightColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${rightRatio * circumference} ${circumference}`}
            strokeLinecap="round"
          />
        </svg>
        </div>
        <div className={styles.rightText} style={{ color: rightColor }}>
          {rightValue}
        </div>
      </div>
    </div>
  );
};

export default CircleProcessChart;
