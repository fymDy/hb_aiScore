/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-05 18:45:40
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/DownloadComp/index.tsx
 */
import IComp from '../IComp'
import IconSprite from '../IconSprite'
import styles from './index.module.scss'
import cs from 'classnames'
interface IFDownLoadProps{
    className:string,
    onClose:()=>void
}
const DownLoad=({className,onClose}:IFDownLoadProps)=>{
   
    return(
         <ul className={cs(className,styles.DownLoad)} >
                <li className={styles.left}>
                    <div className={styles.img}>
                        <IconSprite name="10001" />
                    </div>
                    <div className={styles.text}>
                        <label>AiScore App</label>
                        <p>免费看视频直播</p>
                    </div>
                </li>
                <li className={styles.right}>
                        <div className={cs(styles.btn)}>下载</div>
                        <IComp className={cs(styles.icon_guanbi,'icon-guanbi')} onClick={onClose}  ></IComp>
                </li>
        </ul>
    )
}
export default DownLoad