/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-05 18:43:08
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/IComp/index.tsx
 */
import { IFMenu, IFMatch, IFTab } from '@/views/main/interface'
import IComp from '../IComp'
import styles from './index.module.scss'
import cs from 'classnames'
interface IFOptionBoxProps{
  menusData:IFMenu[] | IFTab[],
  onClickMenu:(id:string)=>void
  className?:any,
  arrowRight?:boolean,
 
}
const OptionBox=({className,arrowRight=true,menusData,onClickMenu}:IFOptionBoxProps)=>{
    return(
        <ul className={styles.option_box}>
                            {
                                menusData?.map((item: any)=>{
                                  return(
                                    <li key={item.id} className={cs(styles.item)}  onClick={()=>onClickMenu(item.id)} >
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
export default OptionBox