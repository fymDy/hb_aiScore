/*
 * @Author: Mark
 * @Date: 2025-04-05 12:27:03
 * @LastEditTime: 2025-04-05 16:53:40
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/main/menu/components/match/index.tsx
 */

import cs from 'classnames'
import { IFMatch } from '@/views/main/interface'
import styles from './index.module.scss'

interface IFHeadUIProps {
    text: string
    matchData:IFMatch[]
    onClickMatch?: () => any
    className?: string
  }
const Match=({text,matchData,className,onClickMatch}:IFHeadUIProps)=>{
    return (
      <dl className={cs(styles.match_hot,className='')}>
                                <dt>{text}</dt>
                                { 
                                  matchData?.map((item:IFMatch)=>{
                                    return (
                                      <dd key={item.id} >
                                         <img className={styles.icon_img} src={item.iconImg}/>
                                         <span>{item.name}</span>
                                      </dd>
                                    )
                                  })
                                }
             </dl>
    )
}
export default Match