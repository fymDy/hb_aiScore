/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-04-29 19:56:03
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/ISpan/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const ISpan:React.FC<{
    name:any,
    className?:string,
    onClick?:()=>void
}>=({
    name,
    className,
    onClick
})=>{
    return(
        <span  className={cs(className,styles.ISpan)}  onClick={onClick} >{name}</span>
    )
}
export default ISpan