/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-04-28 14:35:36
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Input/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const InputCom:React.FC<{
    id:string,
    type:any,
    className?:string,
    onChange:(id:string)=>void
}>=({
    id,
    className,
    type='text',
    onChange
})=>{
    return(
        <input key={id} className={cs(className,styles.ipt)} type={type} onChange={()=>onChange(id)} />
    )
}
export default InputCom