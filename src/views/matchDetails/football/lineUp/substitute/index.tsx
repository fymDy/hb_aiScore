

/*
 * @Author: Mark
 * @Date: 2025-05-07 15:21:39
 * @LastEditTime: 2025-05-09 21:20:12
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/substitute/index.tsx
 */
import React, { useMemo } from "react";
import styles from './index.module.scss'
import Title from "../../../_components/title";
import { MatchLineupData, PlayerInfo } from "../types";

import PlayerComp from "@/components/PlayerComp";
import ISpan from "@/components/Common/ISpan";
import PlayerBox from "./PlayerBox";
const Substitute:React.FC<{
        data:MatchLineupData
}>=({
    data
})=>{


    return (
        <section className={styles.Substitute}>
            <Title title={'替補陣容'} isMore={false}></Title>
            <dl className={styles.substitute_box}>
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
                        <PlayerBox className={styles.content_home} data={data?.lineup?.home?.substitutes}/>
                        <PlayerBox className={styles.content_away} data={data?.lineup?.away?.substitutes}/>
                    </dd>
            </dl>
        </section>
    )
}
export default Substitute