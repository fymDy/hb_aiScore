/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-04-29 17:42:42
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Image/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
const Image:React.FC<{
    imgSrc:any,
    className?:string,
}>=({
    imgSrc,
    className,
})=>{
    return(
       <div className={cs(className,styles.Image)}>
            <img src={imgSrc} />
      </div>
    )
}
export default Image