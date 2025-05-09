/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-05-09 21:10:12
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/ISpan/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const ISpan:React.FC<{
    name: string | number | undefined,
    className?:string,
    onClick?:()=>void
    style?:any
}>=({
    name,
    className,
    onClick,
    style
})=>{
    return(
        <span style={style}  className={cs(className,styles.ISpan)}  onClick={onClick} >{name}</span>
    )
}
export default ISpan