/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-20 19:01:33
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/DownloadComp/Download/index.tsx
 */
import IconSprite from '../../Common/IconSprite'
import styles from './index.module.scss'
import cs from 'classnames'
import IconFont from '../../Common/Iconfont'
import { useApp } from '@/hooks/useApp'
interface IFDownLoadProps{
    className?:string,
    onClose:()=>void
}
const DownLoad=({className,onClose}:IFDownLoadProps)=>{
 const {handleDownLoadReady}=   useApp()
    return(
         <section ref={handleDownLoadReady}  className={cs(className,styles.DownLoad)} >
                <div className={styles.left}>
                    <IconSprite name="10001" />
                    <div className={styles.text}>
                        <label>AiScore App</label>
                        <p>免费看视频直播</p>
                    </div>
                </div>
                <div className={styles.right}>
                        <div className={cs(styles.btn)}>下载</div>
                        <IconFont className={cs(styles.icon_guanbi,'icon-guanbi')} onClick={onClose}  />
                </div>
        </section>
    )
}
export default DownLoad