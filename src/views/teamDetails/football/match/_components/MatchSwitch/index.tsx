/*
 * @Author: Mark
 * @Date: 2025-05-28 13:18:45
 * @LastEditTime: 2025-05-28 13:39:10
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/match/_components/MatchSwitch/index.tsx
 */

import SpriteIcon from "@/components/Common/IconSprite"
import { useMemo } from "react"
import styles from './index.module.scss'

const MatchSwitch:React.FC<{
    data:any
    onClick:()=>void
}>=({
    data,
    onClick
})=>{
    
        return(
        <div className={styles.MatchSwitch}>
          <div className={styles.left} onClick={onClick}>
            <SpriteIcon name={data?.icon} />
            <span >{data?.text}</span>
          </div>
             <div className={styles.right} >{19}</div>
        </div>
        )
}
export default MatchSwitch