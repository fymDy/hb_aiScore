/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-05-08 14:44:07
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Circle/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const Circle:React.FC<{
    className?:string,
    children?:any,
    onClick?:()=>void
}>=({
    children,
    className,
    onClick
})=>{
    return(
        <span className={cs(className,styles.Circle)}>{children}</span>
    )
}
export default Circle