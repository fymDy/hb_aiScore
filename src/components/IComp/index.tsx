/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-09 23:52:40
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/IComp/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const IComp:React.FC<
{
    className:string,
    onClick?:()=>void
    key?:string,
    name?:string
}>=({key='',name='',className,onClick})=>{

    return(
        <span key={key} className={styles.IComp} onClick={onClick}>
               <i className={cs(className,'iconfont')}></i>
               {/* {name && name} */}
          </span>
     
    )
}
export default IComp