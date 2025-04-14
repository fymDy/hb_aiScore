/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-14 22:34:56
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
    onClick?:()=>void
    key?:string,
    name?:string
}>=({key='',name='',className,classParentName,onClick})=>{

    return(
        <span key={key} className={cs(classParentName,styles.IComp)} >
               <IconFont className={className}  onClick={onClick}/>
               { name && <span >{ name}</span> }
          </span>
     
    )
}
export default IComp