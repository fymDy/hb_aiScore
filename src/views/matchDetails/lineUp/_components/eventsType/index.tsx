/*
 * @Author: Mark
 * @Date: 2025-05-07 16:48:45
 * @LastEditTime: 2025-05-09 20:58:20
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/_components/eventsType/index.tsx
 */

import React from "react";
import cs from 'classnames'
import styles from './index.module.scss'
import { PlayerEvent, PlayerEventType } from "../../types";
import SvgIcon from "@/components/Common/IconSvg";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import { EnumPlayerEventType } from "@/views/matchDetails/types/enum";
const EventsType:React.FC<{
    className:string
    data:PlayerEvent[] | undefined
}>=({className,data=[]})=>{
      const getIconFont = (type: PlayerEventType) => {
           let iconType ;
           switch (type) {
             case EnumPlayerEventType.Goal:
               iconType = EnumIconFontType.icongoal;
               break;
             case EnumPlayerEventType.OwnGoal:
               iconType = EnumIconFontType.iconown_goal;
               break;
             case EnumPlayerEventType.PenaltyGoal:
               iconType = EnumIconFontType.iconPenalty;
               break;
             case EnumPlayerEventType.MissedPenalty:
               iconType = EnumIconFontType.iconPenaltySaved;
               break;
             //
             case EnumPlayerEventType.YellowCard:
               iconType = EnumIconFontType.iconyellowcard;
               break;
             case EnumPlayerEventType.RedCard:
               iconType = EnumIconFontType.iconredcard;
               break;
             case EnumPlayerEventType.SecondYellow:
               iconType = EnumIconFontType.icontwoyellow_red;
               break;
             //换场  
             case EnumPlayerEventType.SubIn:
               iconType = EnumIconFontType.iconin1;
               break;
             case EnumPlayerEventType.SubOut:
               iconType = EnumIconFontType.iconout1;
               break;  
             //    
             default:
               iconType = "";
               break;
           }
           return iconType;
         };
    return (
        <div className={cs(styles.EventsType,className)}>
                {data?.map((item: PlayerEvent, i: number) => (
                    <>
                    <SvgIcon key={i} name={getIconFont(item.type)} size={12} />
                    {(item.type==EnumPlayerEventType.SubIn || item.type==EnumPlayerEventType.SubOut) && `${item?.minute}‘`}
                    </>
                ))}
        </div>
    )
}
export default EventsType