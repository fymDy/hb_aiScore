
import ImgLogo from '@/assets/images/img_logo.png'
import styles from './index.module.scss'
import cs from 'classnames'
import { RouterPathUtil } from '@/router/routerPathUtil'
import IComp from '@/components/IComp'
const Header=(props:any)=>{
    const {onclickLogo}=props
    return(
         <ul className={styles.Header} >
                <li className={styles.left} onClick={()=>onclickLogo(RouterPathUtil.HOME_FOOTBALL)}>
                    <div className={styles.img}>
                        <img className={styles.img_logo} src={ImgLogo} />
                    </div>
                </li>
                <li className={styles.right}>
                        <IComp className={cs(styles.icon_sousuo,'icon-sousuo')} onClick={()=>onclickLogo('home_search')}></IComp>
                        <IComp className={cs(styles.icon_caidan,'icon-caidan')} onClick={()=>onclickLogo('home_menu') }/>
                                     
                </li>
        </ul>
    )
}
export default Header