/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-04-27 20:22:48
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Input/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const InputCom:React.FC<{
    type:any,
    className?:string
}>=({
    className,
    type='text'
})=>{
    return(
        <input className={cs(className,styles.ipt)} type={type} />
    )
}
export default InputCom