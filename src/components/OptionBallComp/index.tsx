/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-06 22:01:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/OptionBall/index.tsx
 */
import { IFMenu, IFMatch, IFTab } from '@/views/main/interface'
import IComp from '../IComp'
import styles from './index.module.scss'
import cs from 'classnames'
interface IFOptionBallProps{
  dataList:IFMenu[] | IFTab[],
  onclick:(id:string)=>void
  className?:any,
  arrowRight?:boolean,
  iconClass?:string
  isActive?:boolean
 
}
const OptionBall=({className,arrowRight=true,isActive=false,dataList,iconClass='',onclick}:IFOptionBallProps)=>{
    return(
        <ul className={styles.option_ball}>
                            {
                                dataList?.map((item: any)=>{
                                  return(
                                    <li key={item.id} className={cs(styles.item,{[styles.active_ball]:isActive && item.iconClass==iconClass})}  onClick={()=>onclick(item.id)} >
                                       <IComp className={cs(styles.icon_class,item.iconClass,className)}  />
                                      <span className={styles.name}>{item.name}</span>
                                      {arrowRight && <IComp className={cs(styles.icon_right,'icon-youjiantou')} />}
                                      {item?.matchNum &&   <label className={styles.match_num}>{item?.matchNum}</label>}
                                    </li>
                                  )
                                })
                            }
                        </ul>
     
    )
}
export default OptionBall