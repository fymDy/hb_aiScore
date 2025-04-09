/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-09 17:17:34
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/main/acomponents/header/index.tsx
 */
import ImgLogo from '@/assets/images/img_logo.png'
import styles from './index.module.scss'
import cs from 'classnames'
import { RouterPathUtil } from '@/router/routerPathUtil'
import { useNavigate } from 'react-router-dom'
import IComp from '@/components/IComp'
const Header=(props:any)=>{
    const {onclickLogo}=props
    const navigate =useNavigate()
    return(
         <ul className={styles.Header} >
                <li className={styles.left} onClick={()=>onclickLogo(RouterPathUtil.MAIN_FOOTBALL)}>
                    <div className={styles.img}>
                        <img className={styles.img_logo} src={ImgLogo} />
                    </div>
                </li>
                <li className={styles.right}>
                        <IComp className={cs(styles.icon_sousuo,'icon-sousuo')} onClick={()=>onclickLogo(RouterPathUtil.MAIN_SERCH)}></IComp>
                        <IComp className={cs(styles.icon_caidan,'icon-caidan')} onClick={()=>onclickLogo(RouterPathUtil.MAIN_MENU) }/>
                </li>
        </ul>
    )
}
export default Header