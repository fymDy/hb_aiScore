/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-01 22:32:22
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore_h5/src/components/Common/I/index.tsx
 */
import styles from './index.module.scss'
const IComp=(props:any)=>{
        const {className}=props
    return(
        <span className={styles.IComp}>
               <i className={className}></i>
          </span>
     
    )
}
export default IComp