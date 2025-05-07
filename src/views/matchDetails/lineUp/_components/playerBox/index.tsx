/*
 * @Author: Mark
 * @Date: 2025-05-07 16:48:45
 * @LastEditTime: 2025-05-07 21:36:10
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/_components/playerBox/index.tsx
 */

import React, { useMemo } from "react";
import cs from 'classnames'
import styles from './index.module.scss'
import { PlayerInfo } from "../../types";
import PlayerPosition from "./position";
import PlayerLogo from "./position/playerLogo";
const PlayerBox:React.FC<{
    className?:string
    formation:string,
    playerData?:PlayerInfo[]
}>=({className,formation,playerData=[]})=>{

    // 每个层级推荐的具体位置信息顺序
const POSITION_ORDER:any = {
    GK: ['GK'],
    DF: ['LB', 'LCB', 'CB', 'RCB', 'RB', 'LWB', 'RWB'],
    MF: ['LM', 'LCM', 'CM', 'RCM', 'RM', 'CDM', 'CAM'],
    FW: ['LW', 'LF', 'CF', 'RF', 'RW', 'ST', 'SS'],
  };

// 例如 ("4-3-3") => [4, 3, 3]
  const layers=useMemo(()=>{
    return formation.split('-').map(num => parseInt(num, 10));
  },[formation])

  const playersByPositionData=useMemo(()=>{
    if(playerData?.length==0) return null;
        const positionsMap:any = {
            GK:playerData?.filter(p => p.position === 'GK' || POSITION_ORDER.GK.includes(p.position)),
            DF: playerData?.filter(p => p.position === 'DF' || POSITION_ORDER.DF.includes(p.position)),
            MF: playerData?.filter(p => p.position === 'MF' || POSITION_ORDER.MF.includes(p.position)),
            FW: playerData?.filter(p => p.position === 'FW' || POSITION_ORDER.FW.includes(p.position)),
          };
          console.log('positionsMap',positionsMap)
          return positionsMap; // 每个层级的球员数组
        
  },[playerData])

    return (
        <div className={cs(className,styles.PlayerBox)}>
                <PlayerPosition className={cs(styles.Player_GK)} playerPositionData={playersByPositionData?.GK} />
                <PlayerPosition playerPositionData={playersByPositionData?.DF} />
        </div>
    )
}
export default PlayerBox