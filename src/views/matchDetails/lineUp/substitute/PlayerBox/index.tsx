

/*
 * @Author: Mark
 * @Date: 2025-05-07 15:21:39
 * @LastEditTime: 2025-05-10 15:26:53
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/substitute/PlayerBox/index.tsx
 */
import React from "react";
import styles from './index.module.scss'

import PlayerComp from "@/components/PlayerComp";
import ISpan from "@/components/Common/ISpan";
import {  PlayerInfo } from "../../types";
import cs from 'classnames'

import EventsType from "../../_components/eventsType";
const PlayerBox:React.FC<{
        data:PlayerInfo[]
        className:string
}>=({
    data,
    className
})=>{
    return (
        <section className={cs(styles.PlayerBox,className)}>
            {
                data?.map((item:PlayerInfo,i:number)=>
                    <div key={i}  className={styles.item} >
                            <ISpan className={styles.shirt_number} name={item?.shirt_number} />
                            <PlayerComp  className={styles.PlayerComp}
                                classPlayerLogo={styles.PlayerLogo}
                                classPlayerName={styles.PlayerName}
                                logo={item?.photo }
                                name={item?.name}
                                imgStyle={{borderRadius:'50%'}} />
                            <EventsType className={styles.events_card} data={item?.events } />
                    </div>
                )
            }
        </section>
    )
}
export default PlayerBox