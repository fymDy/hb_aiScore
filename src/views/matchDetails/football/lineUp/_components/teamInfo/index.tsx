/*
 * @Author: Mark
 * @Date: 2025-05-07 16:48:45
 * @LastEditTime: 2025-05-07 17:06:58
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/_components/teamInfo/index.tsx
 */
import ISpan from "@/components/Common/ISpan";
import ImageComp from "@/components/imageComp";
import React from "react";
import cs from 'classnames'
import styles from './index.module.scss'
import { TeamLineup } from "../../types";
const TeamInfo:React.FC<{
    className:string
    data:TeamLineup
}>=({className,data})=>{
    return (
        <div className={cs(styles.TeamInfo,className)}>
            <ImageComp className={styles.team_logo} imgSrc={data?.team_logo}  >
                <ISpan name={data?.team_name}/>
            </ImageComp>
            <ISpan name={`教练:${data?.coach?.name}`}/>
        </div>
    )
}
export default TeamInfo