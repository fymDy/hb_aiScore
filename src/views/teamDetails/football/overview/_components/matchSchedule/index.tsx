import React, { useRef, useEffect, useState, useMemo } from 'react';
import TitleMore from '@/views/matchDetails/_components/titleMore';
import styles from './index.module.scss'
import { TeamSchedule,MatchSchedule } from '@/views/teamDetails/_types';
import PlayerComp from '@/components/PlayerComp';


const MatchSchedules: React.FC<{
data:TeamSchedule,
}> = ({
data
}) => {

  const schedulesData:MatchSchedule =useMemo(()=>{
    return data?.schedules?.[0] ?? []
  },[data])

  return (
     <div  className={styles.MatchSchedule}>
        <TitleMore title={'賽程'} isMore={true}/>
        <div className={styles.content}>
             <div className={styles.left}>
                    <span className={styles.first}>{schedulesData.dateTime}</span>
                    <PlayerComp logo={schedulesData?.opponent?.logo} name={schedulesData?.opponent?.name}
                     className={styles.PlayerComp} classPlayerLogo={styles.classPlayerLogo} />
              </div>
              <div className={styles.center}>
                  <span className={styles.first}>{schedulesData.matchId}</span>
                  <p className={styles.PlayerComp} >
                     <span className={styles.score}>{schedulesData.score}</span>
                  </p>
              </div>
              <div className={styles.right}>
                 <span className={styles.first}> </span>
                 <PlayerComp logo={schedulesData?.opponent?.logo} name={schedulesData?.opponent?.name}
                  className={styles.PlayerComp}  classPlayerLogo={styles.classPlayerLogo}/>
              </div>
        </div>
       
     </div>
   
  );
};

export default MatchSchedules;
