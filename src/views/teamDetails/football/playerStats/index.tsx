/*
 * @Author: Mark
 * @Date: 2025-05-26 16:08:06
 * @LastEditTime: 2025-05-30 20:20:48
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/playerStats/index.tsx
 */
import SelectorFilterComp from '@/components/SelectorFilterComp';
import styles from './index.module.scss'
import { useState } from 'react';
import { mockLeagues, mockSeasons, mockTeamPlayerStats } from './_types/data';
import TopScorers from '../_components/topScorers';
import TitleMore from '@/views/matchDetails/_components/titleMore';
import IComp from '@/components/IComp';
import { EnumIconFontType } from '@/enum/enumIconFontType';
import cs from 'classnames'

const PlayerStats: React.FC = () => {
    const [visible, setVisible] = useState(false);
    return(
        <div className={styles.PlayerStats}>
              <div className={styles.top}>
                    <SelectorFilterComp
                    className={styles.SelectorFilterComp}
                    logo={mockLeagues[0].logo}
                    name={mockLeagues[0].name}
                    onClick={() => setVisible(!visible)}
                    />
                    <SelectorFilterComp
                    className={styles.SelectorFilterComp}
                    name={mockSeasons[0].name}
                    onClick={() => setVisible(!visible)}
                    />
              </div>
              <div className={styles.content}>
                       <TopScorers classNameItem={styles.classNameItem} 
                       title="进球" data={mockTeamPlayerStats.stats ?? []}
                         classPlayerLogo={styles.classPlayerLogo}
                             classPlayerName={styles.classPlayerName}  />
                       <div>
                         <TitleMore title={'进攻数据'} isMore={false} />
                          <TitleMore title={'进球' } className={styles.bgWhite}  />
                       </div>
                     <div>
                        <TitleMore title={'其他数据'} isMore={false} />
                        <TitleMore title={'出场时间' } className={styles.bgWhite}  />
                        <TitleMore title={<IComp classParentName={styles.classParentName} className={cs(styles.IComp_yellow, EnumIconFontType.iconyellowcard)} classNameName={styles.classNameName}  name={'黄牌'} /> } className={styles.bgWhite}  />
                         <TitleMore title={<IComp classParentName={styles.classParentName}  className={cs(styles.IComp_red, EnumIconFontType.iconyellowcard)} classNameName={styles.classNameName} name={'红牌'} /> } className={styles.bgWhite}  />
                     </div>
              </div>
        </div>
    )
}
  export default PlayerStats;