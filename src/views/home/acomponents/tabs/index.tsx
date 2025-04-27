/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-27 15:20:57
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/home/acomponents/tabs/index.tsx
 */

import { IFTab } from '@/views/home/interface'
import styles from './index.module.scss'
import cs from 'classnames'
import IComp from '../../../../components/IComp'

const Tabs=(props:any)=>{
        const {tabData,activeTabId,onClick,className}=props
    return(
         <ul className={cs(className,styles.Tabs_list)} >
                {
                    tabData?.map((item:IFTab,i:number)=>{
                        return(
                            <li key={item?.id} 
                            className={cs(styles.item, 
                                {[styles.item4]:i==4},
                                {[styles.item5]:i==5},
                                {[styles.item_active]:item?.id==activeTabId && i !==5}
                            )} onClick={()=>{onClick(item)  }}>
                                <div className={styles.top}>
                                    {
                                        i <4 && item?.matchNum &&   <span data-v-736e8afd="" className={styles.matchNum}>{item.matchNum}</span>
                                    }
                                    <IComp classParentName={styles.IComp} className={cs(item?.iconClass,styles.iconSize, {[styles.iconSize4]:i==4})} name={item?.name} />
                                </div>
                                {/* <span className={styles.name}>{item?.name}</span> */}
                               
                        
                                {item?.id===activeTabId && i<4 &&
                                    <span className={styles.line} />
                                }
                            </li>
                        )
                    })
                }
        </ul>
    )
}
export default Tabs