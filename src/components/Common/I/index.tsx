/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-04 21:15:31
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/I/index.tsx
 */
import styles from './index.module.scss'
const IComp=(props:any)=>{
        const {className,onClick}=props
    return(
        <span className={styles.IComp} onClick={onClick}>
               <i className={className}></i>
          </span>
     
    )
}
export default IComp