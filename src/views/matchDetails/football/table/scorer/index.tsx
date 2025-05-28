/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-28 20:05:05
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/football/table/scorer/index.tsx
 */

import TitleMore from '../../../_components/titleMore';
import { ScorerItem } from '../enum';
import styles from './index.module.scss'
import cs from 'classnames'
import ISpan from '@/components/Common/ISpan';
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
              <label className={styles.PlayerTeamComp}>球員</label>
              <label className={styles.goals}>進球</label>
            </div>
            <div className={styles.tableContent}>
            {data.map((item:ScorerItem, index:number) => (
              <div key={index} className={cs(styles.tableRow)}>
                <label  className={styles.order}>{item.rank}</label>
                <PlayerTeamComp className={styles.PlayerTeamComp}
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