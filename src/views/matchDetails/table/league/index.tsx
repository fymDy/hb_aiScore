/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-10 20:34:56
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/table/league/index.tsx
 */

import PlayerComp from '@/components/PlayerComp';
import Title from '../../_components/title';
import {  StandingTeam } from '../enum';
import styles from './index.module.scss'

const League: React.FC<{
  data: StandingTeam[];
}> = ({
  data
}) => {
return (
    <section className={styles.League}>
      <Title title={'聯賽 '} isMore={false}/>
        <div className={styles.table}>
            <div className={styles.tableHeader}>
              <span>排名</span>
              <span>队伍</span>
              <span>P</span>
              <span>W</span>
              <span>D</span>
              <span>L</span>
              <span>進球</span>
              <span>净胜</span>
              <span>Pts</span>
            </div>
            <div>
            {data.map((team:StandingTeam, index:number) => (
              <div key={index} className={styles[team.status || 'normal']}>
                <span>{team.rank}</span>
                <PlayerComp className={styles.PlayerComp}  logo={team.team_logo} name= {team.team_name}/>
                <span>{team.match_played}</span>
                  <span>{team.wins}</span>
                <span>{team.draws}</span>
                <span>{team.losses}</span>
                <span>{team.goals_for}-{team.goals_against}</span>
                <span>{team.goal_diff}</span>
                <span>{team.points}</span>
              </div>
          ))}
          </div>
          </div>
            

   
    </section>
  );
}
export default League;