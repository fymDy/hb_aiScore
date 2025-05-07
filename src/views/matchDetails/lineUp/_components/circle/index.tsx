/*
 * @Author: Mark
 * @Date: 2025-05-07 16:48:45
 * @LastEditTime: 2025-05-07 19:18:18
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/_components/circle/index.tsx
 */

import React from "react";
import cs from 'classnames'
import styles from './index.module.scss'
const Circle:React.FC<{
    className?:string
    children?:any
}>=({className,children})=>{
    return (
        <div className={cs(className,styles.Circle)}>
               {children}
        </div>
    )
}
export default Circle