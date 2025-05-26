import React, { useMemo } from 'react';
import TitleMore from '@/views/matchDetails/_components/titleMore';
import styles from './index.module.scss'
import { TeamSchedule,MatchSchedule } from '@/views/teamDetails/_types';
import PlayerTeamComp from '@/components/PlayerTeamComp';


const MostPlayer: React.FC<{
data:TeamSchedule,
}> = ({
data
}) => {

  const schedulesData:MatchSchedule =useMemo(()=>{
    return data?.schedules?.[0] ?? []
  },[data])

  return (
     <div  className={styles.MostPlayer}>
        <TitleMore title={'Most Value Player'} isMore={false}/>
        <div className={styles.content}>
               <PlayerTeamComp className={styles.PlayerTeamComp_Wrap}
                player_photo={schedulesData?.mvp?.logo}
                player_name={schedulesData?.mvp?.name} 
                team_logo={schedulesData?.mvp?.nationality_logo} 
                team_name={schedulesData?.mvp?.nationality}
                is_player_photo_bg={true}  />
              <div className={styles.marketValue}>
                  {schedulesData?.mvp?.marketValue}
              </div>
        </div>
       
     </div>
   
  );
};

export default MostPlayer;
