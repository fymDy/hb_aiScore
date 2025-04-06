/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-06 15:18:37
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/TabsComp/index.tsx
 */

import { IFTab } from '@/views/main/interface'
import IComp from '../IComp'
import styles from './index.module.scss'
import cs from 'classnames'

const Tabs=(props:any)=>{
        const {tabData,activeTab,onClick,className}=props
        console.log(tabData)
    return(
         <ul className={cs(className,styles.Tabs)} >
                {
                    tabData?.map((item:IFTab,i:number)=>{
                        return(
                            <li key={item.id} 
                            className={cs(styles.item, 
                                {[styles.item4]:i==4},
                                {[styles.item5]:i==5},
                                {[styles.item_active]:item?.id==activeTab && i !==5}
                            )} onClick={()=>{onClick(item)  }}>
                                <div className={styles.top}>
                                    {
                                        i <4 &&   <span data-v-736e8afd="" className={styles.matchNum}>{item.matchNum}</span>
                                    }
                                    <IComp className={cs(item.iconClass,styles.iconSize, {[styles.iconSize4]:i==4})}/>
                                </div>
                                <span className={styles.name}>{item?.name}</span>
                               
                                {/* </Link> */}
                                {item?.id===activeTab && i<4 &&
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