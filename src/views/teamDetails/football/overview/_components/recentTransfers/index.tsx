import React, { useMemo } from 'react';
import TitleMore from '@/views/matchDetails/_components/titleMore';
import styles from './index.module.scss'
import { MatchSchedule, TeamTransfers, TransferRecord } from '@/views/teamDetails/_types';
import PlayerTeamComp from '@/components/PlayerTeamComp';
import IconFont from '@/components/Common/Iconfont';
import { EnumIconFontType } from '@/enum/enumIconFontType';
import PlayerComp from '@/components/PlayerComp';


const RecentTransfers: React.FC<{
data:TeamTransfers,
}> = ({
data
}) => {



  return (
     <div  className={styles.RecentTransfers}>
        <TitleMore title={'近期轉會'} isMore={false}/>
        <div className={styles.content}>
             <div className={styles.left}>
                    <div className={styles.top}>
                        <span>轉入11</span>
                       <IconFont className={EnumIconFontType.icondianji} />
                    </div>
                    {data?.transfersIn?.map((item:TransferRecord ,i:number)=> 
                       <PlayerComp key={i} className={styles.PlayerComp} 
                       logo={item.logo} name={item.playerName}/>)}
              </div>
              <div className={styles.right}>
                     <div className={styles.top}>
                        <span>轉出21</span>
                        <IconFont className={EnumIconFontType.icondianji} />
                    </div>
                            {data?.transfersOut?.map((item:TransferRecord ,i:number)=> 
                       <PlayerComp key={i} className={styles.PlayerComp} 
                       logo={item.logo} name={item.playerName}/>)}
              </div>
        </div>
       
     </div>
   
  );
};

export default RecentTransfers;
