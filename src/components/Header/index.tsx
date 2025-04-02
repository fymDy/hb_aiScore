/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-01 20:36:11
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore_h5/src/components/header/index.tsx
 */
import ImgLogo from '@/assets/images/img_logo.png'
import styles from './index.module.scss'
import IComp from '../Common/I'
import cs from 'classnames'
const Header=()=>{
   
    return(
         <ul className={styles.Header} >
                <li className={styles.left}>
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