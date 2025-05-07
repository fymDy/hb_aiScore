/*
 * @Author: Mark
 * @Date: 2025-05-07 16:48:45
 * @LastEditTime: 2025-05-07 21:22:13
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/_components/playerBox/position/index.tsx
 */

import React from "react";
import cs from 'classnames'
import styles from './index.module.scss'
import { PlayerInfo } from "../../../types";
import PlayerLogo from "./playerLogo";
const PlayerPosition:React.FC<{
    playerPositionData?:PlayerInfo[]
    className?:string
    
}>=({className,playerPositionData})=>{
    return (
        <div className={cs(className,styles.PlayerPosition)}>
              {playerPositionData?.map((item:PlayerInfo,i:number)=><PlayerLogo key={i} playerData={item} />)}
        </div>
    )
}
export default PlayerPosition