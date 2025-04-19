/*
 * @Author: Mark
 * @Date: 2025-03-31 20:34:58
 * @LastEditTime: 2025-04-09 22:57:07
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/TabsComp/index.tsx
 */

import { IFTab } from '@/views/home/interface'
import styles from './index.module.scss'
import cs from 'classnames'

const TabsComp=(props:any)=>{
        const {tabData,activeTab,onClick,className}=props
    return(
         <div className={cs(className,styles.TabsComp)}>
            <ul className={styles.tabs_list} >
                {
                    tabData?.map((item:IFTab,i:number)=>{
                        return(
                            <li key={item.id} 
                            className={cs(styles.item, 
                                {[styles.item4]:i==4},
                                {[styles.item5]:i==5},
                                {[styles.item_active]:item?.id==activeTab && i !==5}
                            )} onClick={()=>{onClick(item)  }}>
                                <span className={styles.name}>{item?.name}</span>
                                <span className={cs({[styles.line]:item?.id==activeTab})} />
                            </li>
                        )
                    })
                }
        </ul>
         </div>
    )
}
export default TabsComp