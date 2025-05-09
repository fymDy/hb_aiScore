/*
 * @Author: Mark
 * @Date: 2025-05-07 16:48:45
 * @LastEditTime: 2025-05-07 19:04:54
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/_components/square/index.tsx
 */

import React from "react";
import cs from 'classnames'
import styles from './index.module.scss'
const Square:React.FC<{
    className?:string
}>=({className})=>{
    return (
        <div className={cs(className,styles.square)}>
                <p className={styles.square_inner} />
         </div>
    )
}
export default Square