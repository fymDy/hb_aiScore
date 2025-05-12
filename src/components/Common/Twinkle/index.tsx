/*
 * @Author: Mark
 * @Date: 2025-05-12 20:21:42
 * @LastEditTime: 2025-05-12 20:25:36
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Twinkle/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const Twinkle:React.FC<{
    className?:string
}>=({
    className
})=>{
    return <span className={cs(styles.Twinkle,className)}>'</span>
}
export default Twinkle
