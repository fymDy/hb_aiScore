/*
 * @Author: Mark
 * @Date: 2025-04-06 22:22:53
 * @LastEditTime: 2025-04-20 12:56:20
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/home/acomponents/menu/components/optionItem/index.tsx
 */
/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-06 22:01:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/OptionBall/index.tsx
 */
import { IFMenu,  IFTab } from '@/views/home/interface'
import styles from './index.module.scss'
import cs from 'classnames'
import IComp from '@/components/IComp'
import { EnumIconFontType } from '@/enum/enumIconFontType'
import IconFont from '@/components/Common/Iconfont'
interface IFOptionBallProps{
  dataList:IFMenu[] | IFTab[],
  onclick:(id:string)=>void
  className?:any,
  arrowRight?:boolean,
}
const OptionItem=({className,arrowRight=true,dataList,onclick}:IFOptionBallProps)=>{
    return(
        <ul className={styles.option_item}>
                            {
                                dataList?.map((item: any)=>{
                                  return(
                                    <li key={item.id} className={cs(styles.item)}  onClick={()=>onclick(item.id)} >
                                       <IComp className={cs(styles.icon_class,item.iconClass,className)}  />
                                      <span className={styles.name}>{item.name}</span>
                                      {arrowRight && <IconFont className={cs(styles.icon_right,EnumIconFontType.icon_youjiantou)} />}
                                    </li>
                                  )
                                })
                            }
                        </ul>
     
    )
}
export default OptionItem