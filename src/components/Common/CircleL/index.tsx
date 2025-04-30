/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-04-30 11:19:26
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/CircleL/index.tsx
 */
import styles from './index.module.scss'
const CircleL:React.FC<{
    name:any,
    onClick?:()=>void
}>=({
    name,
    onClick
})=>{
    return(
        <span className={styles.CircleL}>{name}</span>
    )
}
export default CircleL