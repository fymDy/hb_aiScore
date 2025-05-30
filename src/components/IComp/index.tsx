/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-05-30 20:06:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/IComp/index.tsx
 */
import IconFont from '../Common/Iconfont'
import styles from './index.module.scss'
import cs from 'classnames'
const IComp:React.FC<
{
    classParentName?:string,
    className:string
    classNameName?:string
    onClick?:()=>void
    key?:string,
    name?:string
}>=({key='',name='',className,classParentName,classNameName,onClick})=>{

    return(
        <span key={key} className={cs(classParentName,styles.IComp)} >
               <IconFont className={className}  onClick={onClick}/>
               { name && <span className={cs(classNameName)} >{ name}</span> }
          </span>
     
    )
}
export default IComp