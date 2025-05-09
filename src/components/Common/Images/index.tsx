/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-05-09 21:41:26
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Images/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
import defaultPlayer from '@/assets/images/default-player.png'
const Image:React.FC<{
    imgSrc:any,
    imgStyle?:any,
    className?:string,
}>=({
    imgSrc,
    imgStyle,
    className,
})=>{
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.onerror = null; // 防止 fallback 图也报错死循环
        e.currentTarget.src = defaultPlayer;
      };
    return(
       <div className={cs(className,styles.Image)}>
            <img style={imgStyle} src={imgSrc?imgSrc:defaultPlayer} onError={handleImgError} />
      </div>
    )
}
export default Image