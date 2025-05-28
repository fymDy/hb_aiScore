/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-28 20:38:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/lineUp/_components/teamSquad/index.tsx
 */


import styles from './index.module.scss'
import cs from 'classnames'
import ISpan from '@/components/Common/ISpan';
import PlayerTeamComp from '@/components/PlayerTeamComp';
import TitleMore from '@/views/matchDetails/_components/titleMore';
import { Player, PlayerGroup } from '../../_types';
const TeamSquad: React.FC<{
  data:PlayerGroup;
}> = ({
  data
}) => {
return (
    <div className={styles.TeamSquad}>
      <TitleMore className={styles.Title} title={data?.groupName} isMore={false}/>
       <div className={styles.tableContent}>
            {data.players?.map((item:Player, index:number) => (
              <div key={index} className={cs(styles.tableRow)}>
                <label  className={styles.order}>{item.number??'C'}</label>
                <PlayerTeamComp className={styles.PlayerTeamComp}
                    classPlayerLogo={styles.classPlayerLogo}
                      classPlayerName={styles.classPlayerName}
                      player_photo={item?.avatarUrl}
                      player_name={item?.name} 
                  />
                <ISpan className={styles.goals} name={item?.marketValue??'-'}/>
              </div>
            ))}
          </div>
    </div>
  );
}
export default TeamSquad;