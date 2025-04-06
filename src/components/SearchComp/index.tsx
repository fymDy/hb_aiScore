/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-07 00:18:12
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/SearchComp/index.tsx
 */
import styles from './index.module.scss'
import IComp from '../IComp'
import cs from 'classnames'
const SearchBox=(props:any)=>{
    const {iconClass,isActive,onclick,onClear,onChange,iptValue}=props
    return(
         <ul className={styles.searchBox} >
                <li className={styles.left} onClick={()=>onclick('btnBall') }>
                        <IComp className={cs(styles.icon_ball,iconClass)} />
                        <IComp className={cs(styles.icon_arrow,isActive?'icon-shangla':'icon-xiala')} />
                </li>
                <li className={styles.center}>
                                <IComp className={cs(styles.icon_search,'icon-sousuo')} />
                                <input className={styles.ipt} value={iptValue} onChange={onChange} />
                                {iptValue.length>0 &&<IComp className={cs(styles.icon_close,'icon-guanbi')}
                                 onClick={onClear} />}
                </li>
                <li className={styles.right}>
                <IComp className={cs(styles.icon_close2,'icon-guanbi')} onClick={()=>onclick('btnClose')} />
                </li>
        </ul>
    )
}
export default SearchBox