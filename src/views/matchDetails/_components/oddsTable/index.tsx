import React from 'react';
import styles from './index.module.scss';
import { EnumIconFontType } from '@/enum/enumIconFontType';
import IconFont from '@/components/Common/Iconfont';
import Title from '../title';

export interface OddsData {
  name: string;
  logo: string;
  defaultOdds: [number, number, number];
  initialOdds: [number, number, number];
  preMatchOdds: [number, number, number];
}

interface OddsTableProps {
  data: OddsData[];
  selectedTypes?: ('initialOdds' | 'preMatchOdds')[];
  title?:string;
  isShowArrow?:boolean;
  onArrowClick?:(type:string)=>void
}

const OddsTable: React.FC<OddsTableProps> = ({ data, selectedTypes=[] ,title,isShowArrow=true,onArrowClick}) => {
  return (
      
       <div className={styles.table}>
        { title && <Title title={title}></Title>}
      {/* 表头 */}
      <header className={styles.header}>
        <div className={styles.cellFixed}></div>
        <div className={styles.cell1}>1</div>
        <div className={styles.cellX}>X</div>
         <div className={styles.cell2}>2</div>
        {isShowArrow && <div className={styles.cellArrow}></div>}
      </header>

      {/* 内容 */}
      {data.map((row, index) => {
        const rows = [
          { type: 'defaultOdds', odds: row.defaultOdds },
          ...selectedTypes.map(type => ({
            type,
            odds: row[type as keyof OddsData] as [number, number, number],
          })),
        ];
        return (
          <div key={index} className={styles.bookmakerBlock}>
            {/* 左边 bookmaker logo */}
            <div className={styles.bookmakerLeft}>
              <img src={row.logo} alt={row.name} className={styles.logo} />
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
            {
              isShowArrow &&
            <div className={styles.cellArrow} >
                    <IconFont className={EnumIconFontType.icon_youjiantou} onClick={()=>onArrowClick?.(row?.name)} />
                  </div>
                   }
          </div>
        );
      })}
    </div>
  );
};

export default OddsTable;
