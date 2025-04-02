/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-02 22:13:08
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Header/index.tsx
 */
import ImgLogo from '@/assets/images/img_logo.png'
import styles from './index.module.scss'
import IComp from '../Common/I'
import cs from 'classnames'
const Header=(props:any)=>{
    const {onclickLogo}=props
    return(
         <ul className={styles.Header} >
                <li className={styles.left} onClick={()=>onclickLogo(0)}>
                    <div className={styles.img}>
                        <img className={styles.img_logo} src={ImgLogo} />
                    </div>
                </li>
                <li className={styles.right}>
                        <IComp className={cs(styles.icon_sousuo,'iconfont','icon-sousuo')}></IComp>
                        <IComp className={cs(styles.icon_caidan,'iconfont','icon-caidan')}></IComp>
                </li>
        </ul>
    )
}
export default Header