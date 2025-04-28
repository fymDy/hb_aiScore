import React from 'react';
import styles from './index.module.scss';
import { EnumIconFontType } from '@/enum/enumIconFontType';
import IconFont from '../Common/Iconfont';

export interface OddsData {
  bookmaker: string;
  logo: string;
  defaultOdds: [number, number, number];
  initialOdds: [number, number, number];
  preMatchOdds: [number, number, number];
}

interface OddsTableProps {
  data: OddsData[];
  selectedTypes: ('initialOdds' | 'preMatchOdds')[];
}

const typeLabelMap: Record<string, string> = {
  initialOdds: '初始赔率',
  preMatchOdds: '赛前赔率',
};

const OddsTable: React.FC<OddsTableProps> = ({ data, selectedTypes }) => {
  return (
    <div className={styles.table}>
      {/* 表头 */}
      <div className={styles.header}>
        <div className={styles.cellFixed}></div>
        <div className={styles.cell}>1</div>
        <div className={styles.cell}>X</div>
        <div className={styles.cell}>2</div>
        <div className={styles.cellArrow}></div>
      </div>

      {/* 内容 */}
      {data.map((row, index) => {
        const rows = [
          { type: 'defaultOdds', odds: row.defaultOdds },
          ...selectedTypes.map((type) => ({
            type,
            odds: row[type as keyof OddsData] as [number, number, number],
          })),
        ];
        return (
          <div key={index} className={styles.bookmakerBlock}>
            {/* 左边 bookmaker logo */}
            <div className={styles.bookmakerLeft}>
              <img src={row.logo} alt={row.bookmaker} className={styles.logo} />
            </div>

            {/* 中间赔率区 */}
            <div className={styles.oddsRight}>
              {rows?.map((item, idx) => (
                <div key={idx} className={styles.row}>
                  {item.odds.map((odd, oddIdx) => (
                    <div
                      key={oddIdx}
                      className={styles.cell}
                      style={{ color: odd > 0 ? 'green' : odd < 0 ? 'red' : undefined }}
                    >
                      {odd > 0 ? `+${odd}` : odd}
                    </div>
                  ))}
               
                </div>
              ))}
            </div>
               {/* 最后一列箭头 */}
               <div className={styles.cellArrow}>
                        <IconFont className={EnumIconFontType.icon_youjiantou} />
                  </div>
          </div>
        );
      })}
    </div>
  );
};

export default OddsTable;
