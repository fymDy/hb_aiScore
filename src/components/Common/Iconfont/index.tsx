/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-13 18:57:43
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Iconfont/index.tsx
 */
import cs from 'classnames'
const IconFont:React.FC<
{   
    className:string,
    onClick?:()=>void
    key?:string,
}>=({key='',className,onClick})=>{

    return(
        <i key={key} className={cs(className,'iconfont')} onClick={onClick} /> 
    )
}
export default IconFont