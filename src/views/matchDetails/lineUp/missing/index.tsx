

/*
 * @Author: Mark
 * @Date: 2025-05-07 15:21:39
 * @LastEditTime: 2025-05-09 21:23:24
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/missing/index.tsx
 */
import React from "react";
import styles from './index.module.scss'
import PlayerComp from "@/components/PlayerComp";
import Title from "../../_components/title";

import { MatchLineupData } from "../types";
import PlayerBox from "../substitute/PlayerBox";
const Missing:React.FC<{
      data:MatchLineupData
}>=({
    data
})=>{
    return (
        <section className={styles.Missing}>
              <Title title={'傷停信息'} isMore={false}></Title>
            <dl className={styles.missing_box}>
                    <dt className={styles.header}>
                  
                        <PlayerComp className={styles.PlayerComp}
                                    logo={data?.lineup?.home?.team_logo}
                                    name={data?.lineup?.home?.team_name}
                                    />
                       <PlayerComp  className={styles.PlayerComp} 
                                    logo={data?.lineup?.away?.team_logo}
                                    name={data?.lineup?.away?.team_name}
                                    />
                    </dt>
                    <dd className={styles.content}>
                        <PlayerBox className={styles.content_home} data={data?.lineup?.home?.missing_players}/>
                        <PlayerBox className={styles.content_away} data={data?.lineup?.away?.missing_players}/>
                    </dd>
            </dl>
        </section>
    )
}
export default Missing