/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-26 14:48:28
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/football/table/scorer/index.tsx
 */

import PlayerComp from '@/components/PlayerComp';
import TitleMore from '../../../_components/titleMore';
import { ScorerItem } from '../enum';
import styles from './index.module.scss'
import cs from 'classnames'
import Images from '@/components/Common/Images';
import ISpan from '@/components/Common/ISpan';
import { pxToRem } from '@/utils/common';
import PlayerTeamComp from '@/components/PlayerTeamComp';
const Scorer: React.FC<{
  data:ScorerItem[];
}> = ({
  data
}) => {
return (
    <div className={styles.Scorer}>
      <TitleMore className={styles.Title} title={'射手榜 '} isMore={false}/>
      <div className={styles.table}>
            <div className={styles.tableHeader}>
              <label className={styles.order}>#</label>
              <label className={styles.PlayerComp}  >球員</label>
              <label className={styles.goals}>進球</label>
            </div>
            <div className={styles.tableContent}>
            {data.map((item:ScorerItem, index:number) => (
              <div key={index} className={cs(styles.tableRow)}>
                <label  className={styles.order}>{item.rank}</label>
                <PlayerTeamComp className={styles.PlayerTeamComp_Wrap}
                player_photo={item?.player_photo}
                player_name={item?.player_name} 
                team_logo={item?.team_logo} 
                team_name={item?.team_name}  />
                <ISpan className={styles.goals} name={item?.goals}/>
              </div>
            ))}
          </div>
          </div>
    </div>
  );
}
export default Scorer;