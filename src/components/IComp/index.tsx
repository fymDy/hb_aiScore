/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-05 18:43:08
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/IComp/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
interface IFICompProps{
    className:string,
    onClick?:()=>void
}
const IComp=({className,onClick}:IFICompProps)=>{
    return(
        <span className={styles.IComp} onClick={onClick}>
               <i className={cs(className,'iconfont')}></i>
          </span>
     
    )
}
export default IComp