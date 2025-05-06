
import { IFMenu, IFMatch, IFTab } from '@/views/home/interface'
import IComp from '../../../../components/IComp'
import styles from './index.module.scss'
import cs from 'classnames'
interface IFOptionBallProps{
  dataList:IFMenu[] | IFTab[],
  onclick:(id:string)=>void
  className?:any,
  iconClass?:string
  isActive?:boolean
}
const BallList=({className,isActive=false,dataList,iconClass='',onclick}:IFOptionBallProps)=>{
    return(
        <ul className={styles.ball_list}>
                            {
                                dataList?.map((item: any)=>{
                                  return(
                                    <li key={item?.id} className={cs(styles.item,{[styles.active_ball]:isActive && item.iconClass==iconClass})}  onClick={()=>onclick(item.id)} >
                                       <IComp className={cs(styles.icon_class,item?.iconClass,className)} classParentName={styles.name} name={item?.name} />
                                      {item?.matchNum &&   <label className={styles.match_num}>{item?.matchNum}</label>}
                                    </li>
                                  )
                                })
                            }
                        </ul>
     
    )
}
export default BallList