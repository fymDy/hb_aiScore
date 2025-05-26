/*
 * @Author: Mark
 * @Date: 2025-04-27 20:19:26
 * @LastEditTime: 2025-05-26 15:07:13
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Images/index.tsx
 */
import styles from './index.module.scss'
import cs from 'classnames'
import defaultPlayer from '@/assets/images/default-player.png'
import { useState } from 'react';
const Image:React.FC<{

    imgSrc:string | undefined ,
    imgStyle?:React.CSSProperties,
    className?:string,
}>=({
    imgSrc,
    imgStyle,
    className,
})=>{
    const [currentSrc, setCurrentSrc] = useState(imgSrc || defaultPlayer);
    const [imgFailed, setImgFailed] = useState(false);
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.onerror = null; // 防止 fallback 图也报错死循环
        e.currentTarget.src = defaultPlayer;
        setImgFailed(true); // 控制 className
      };
    return(
       <div className={cs(styles.Image,className)}>
            <img className={cs(styles.img, imgFailed && styles.defaultPlayer)} style={imgStyle}
             src={currentSrc} onError={handleImgError} />
      </div>
    )
}
export default Image