/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-04-30 11:32:19
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/CircleL/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const CircleL:React.FC<{
    name:any,
    className?:string,
    onClick?:()=>void
}>=({
    name,
    className,
    onClick
})=>{
    return(
        <span className={cs(className,styles.CircleL)}>{name}</span>
    )
}
export default CircleL