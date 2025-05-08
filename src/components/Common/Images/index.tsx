/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-05-08 13:46:44
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Images/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const Image:React.FC<{
    imgSrc:any,
    imgStyle?:any,
    className?:string,
}>=({
    imgSrc,
    imgStyle,
    className,
})=>{
    return(
       <div className={cs(className,styles.Image)}>
            <img style={imgStyle} src={imgSrc} />
      </div>
    )
}
export default Image