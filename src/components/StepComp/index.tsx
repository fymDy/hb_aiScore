/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-27 14:14:36
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/StepComp/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'

const StepComp:React.FC<{
    className?:string,
    step1?:string,
    step2?:string
    name?:string
}>=({className,step1='',step2='',name=''})=>{
    return(
        <div className={cs(styles.StepComp,className)} onClick={()=>{}}>
               <span className={styles.step1}>{step1}</span>
               <span className={styles.jt}></span>
               <span className={styles.step2}>{step2}</span>
               {
                name &&
                    <>
                       <span className={styles.jt}></span>
                       <span className={styles.name}>{name}</span>
                    </>
               }
            
          </div>
     
    )
}
export default StepComp