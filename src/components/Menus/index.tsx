/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-01 23:34:16
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore_h5/src/components/Menus/index.tsx
 */

import { IFMenu, IFMenus } from '@/views/main'
import IComp from '../Common/I'
import styles from './index.module.scss'
import cs from 'classnames'

const Menus=({menuData}:IFMenus)=>{
    return(
         <ul className={styles.Menus} >
                {
                    menuData?.map((item:IFMenu,i:number)=>{
                        return(
                            <li key={i} 
                            className={cs(styles.item, 
                                {[styles.item4]:i==4},
                                {[styles.item5]:i==5},
                                {[styles.item_active]:item?.isActive}
                            )} onClick={()=>{ item.onClick(i)  }}>
                                {/* <Link to={item.path} className={styles.top}> */}
                                <div className={styles.top}>
                                    {
                                        i <4 &&   <span data-v-736e8afd="" className={styles.matchNum}>{item.matchNum}</span>
                                    }
                                    <IComp className={cs('iconfont',item.iconClass,styles.iconSize, {[styles.iconSize4]:i==4})}/>
                                </div>
                                <span className={styles.name}>{item?.name}</span>
                               
                                {/* </Link> */}
                                {item?.isActive && i<4 &&
                                    <span className={styles.line} />
                                }
                            </li>
                        )
                    })
                }
        </ul>
    )
}
export default Menus