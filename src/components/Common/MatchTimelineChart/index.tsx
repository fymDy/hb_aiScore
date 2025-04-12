import React from 'react';
import styles from './index.module.scss';
import { EnumIconFontType } from '@/enum/enumIconFontType';
import SvgIcon from '../IconSvg';

export interface BarData {
  team: 'home' | 'away';
  minute: number;
  value: string | number;
}

export interface EventItem {
  minute: number;
  type: EnumIconFontType;
}

export interface MatchTimelineChartProps {
  teamHome:string,
  teamAway:string,
  barData: BarData[];
  events: {
    home: EventItem[];
    away: EventItem[];
  };
  maxMinute?: number;
  className?: string;
}



const MatchTimelineChart: React.FC<MatchTimelineChartProps> = ({
  teamHome,
  teamAway,
  barData,
  events,
  maxMinute = 100,
}) => {
  return (
    <div className={styles.chart_football}>
        <div className={styles.title}>
                <span className={styles.left}>{teamHome}</span>
                <span className={styles.right}>{teamAway}</span>
        </div>
        <div className={styles.chart}>
        <div className={`${styles.matchChart}`}>
          {/* 时间刻度线 + 文字 */}
          <div className={styles.timeLine}>
            {Array.from({ length: maxMinute / 15 + 1 }).map((_, i) => {
              const minute = i * 15;
              return (
                <div
                  key={minute}
                  className={styles.timeMark}
                  style={{ left: `${minute}%` }}
                >
                  <span className={styles.timeText}>{minute}'</span>
                  <div className={styles.timeLineLine} />
                </div>
              );
            })}
          </div>

          {/* 内容区域 */}
          <div className={styles.contentArea}>
            {/* 背景色 */}
            <div className={styles.bgLayer}>
              <div className={styles.bgTop}>
                <div className={styles.bgWhite} />
                <div className={styles.bgBlue1} />
                <div className={styles.bgBlue2} />
              </div>
              <div className={styles.bgBottom}>
                <div className={styles.bgOrange1} />
                <div className={styles.bgOrange2} />
                <div className={styles.bgWhite} />
              </div>
            </div>

            {/* 柱状图 */}
            <div className={styles.barLayer}>
              <div className={styles.barRow}>
                {barData
                  .filter(d => d.team === 'home')
                  .map((item, i) => (
                    <div
                      id={`home-${i}`}
                      key={`home-${i}`}
                      className={styles.bar}
                      style={{
                        left: `${item.minute}%`,
                        height: typeof item.value === 'number' ? `${item.value}px` : item.value,
                        backgroundColor: '#1989fa',
                        bottom: 0,
                      }}
                    />
                  ))}
              </div>
              <div className={styles.barRow}>
                {barData
                  .filter(d => d.team === 'away')
                  .map((item, i) => (
                    <div
                      id={`away-${i}`}
                      key={`away-${i}`}
                      className={styles.bar}
                      style={{
                        left: `${item.minute}%`,
                        height: typeof item.value === 'number' ? `${item.value}px` : item.value,
                        backgroundColor: '#FFBA5A',
                        top: 0,
                      }}
                    />
                  ))}
              </div>
            </div>

            {/* 事件图标 */}
            <div className={styles.eventLayer}>
              {events.home.map((e, i) => (
                <div
                  id={`eh-${i}`}
                  key={`eh-${i}`}
                  className={`${styles.eventIcon} ${styles.home}`}
                  style={{ left: `${e.minute}%` }}
                >
                 <SvgIcon name={e.type} size={14} />
                </div>
              ))}
              {events.away.map((e, i) => (
                <div
                  id={`ea-${i}`}
                  key={`ea-${i}`}
                  className={`${styles.eventIcon} ${styles.away}`}
                  style={{ left: `${e.minute}%` }}
                >
                   <SvgIcon name={e.type} size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
      </div>
  );
};

export default MatchTimelineChart;
