

/*
 * @Author: Mark
 * @Date: 2025-05-07 15:21:39
 * @LastEditTime: 2025-05-08 17:02:36
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/starting/index.tsx
 */
import React from "react";
import styles from './index.module.scss'
import TeamInfo from "../_components/teamInfo";
import { MatchLineupData } from "../types";
import cs from 'classnames'
import Square from "../_components/square";
// import Circle from "../_components/circle";
import PlayerBox from "../_components/playerBox";
import Circle from "@/components/Common/Circle";
const Starting:React.FC<{
    data:MatchLineupData
}>=({data})=>{
    return (
        <section className={styles.Starting}>
                <TeamInfo className={styles.teamInfo_wrap} data={data?.lineup?.home}/>
                <div className={styles.team_box}>
                        <div className={cs(styles.half_box,styles.half_box_home)}>
                                <Square />
                                <div className={styles.circle_wrap}>
                                    <Circle className={styles.home_circle}/>
                                </div>
                                <PlayerBox className={styles.PlayerBox} formation={data?.lineup?.home?.formation} playerData={data?.lineup?.home?.starting_lineups}/>

                        </div> 
                        <div className={cs(styles.half_box,styles.half_box_away)}>
                        <Square />
                                <div className={styles.circle_wrap}>
                                    <Circle className={styles.home_circle}/>
                                </div>
                                <PlayerBox className={styles.PlayerBox} formation={data?.lineup?.away?.formation} playerData={data?.lineup?.away?.starting_lineups}/>
                        </div> 
                        <Circle className={styles.midCircle}>
                            <span className={styles.point} />
                        </Circle>
                </div> 
                <TeamInfo className={styles.teamInfo_wrap} data={data?.lineup?.away}/> 
        </section>
    )
}
export default Starting