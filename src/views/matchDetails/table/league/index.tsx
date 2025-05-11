/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-11 11:56:09
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/table/league/index.tsx
 */

import PlayerComp from '@/components/PlayerComp';
import Title from '../../_components/title';
import {  StandingTeam } from '../enum';
import styles from './index.module.scss'
import cs from 'classnames'
import Images from '@/components/Common/Images';
const League: React.FC<{
  data: StandingTeam[];
}> = ({
  data
}) => {
return (
    <section className={styles.League}>
      <Title className={styles.Title} title={'聯賽 '} isMore={false}/>
        <div className={styles.table}>
            <div className={styles.tableHeader}>
              <label className={styles.order}>#</label>
              <div className={styles.PlayerComp}  >队伍</div>
              <span className={styles.P}>P</span>
              <span className={styles.W}>W</span>
              <span className={styles.D}>D</span>
              <span className={styles.L}>L</span>
              <label className={styles.goals}>進球</label>
              <span>±</span>
              <span>Pts</span>
            </div>
            <div className={styles.tableContent}>
            {data.map((team:StandingTeam, index:number) => (
              <div key={index} className={cs(styles.tableRow,styles[team.status || 'normal'])}>
                <label  className={styles.order}>{team.rank}</label>
                <PlayerComp className={styles.PlayerComp}  logo={team.team_logo} name= {team.team_name}/>
                <span className={styles.P}>{team.match_played}</span>
                <span className={styles.W}>{team.wins}</span>
                <span className={styles.D}>{team.draws}</span>
                <span className={styles.L}>{team.losses} </span>
                <label className={styles.goals}>{team.goals_for}-{team.goals_against}</label>
                <span className={styles.goal_diff}>{team.goal_diff}</span>
                <span className={styles.pts}>{team.points}</span>
              </div>
            ))}
          </div>
          </div>
            

   
    </section>
  );
}
export default League;