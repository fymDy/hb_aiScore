/*
 * @Author: Mark
 * @Date: 2025-04-16 17:40:32
 * @LastEditTime: 2025-05-30 20:14:34
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/_components/titleMore/index.tsx
 */
import IconFont from '@/components/Common/Iconfont'
import styles from './index.module.scss'
import cs from 'classnames'
import { EnumIconFontType } from '@/enum/enumIconFontType'
import { ReactNode } from 'react'
const titleMore:React.FC<{
    title: ReactNode | string,
    className?:string,
    isMore?:boolean,
}> =({
    title='',
    className='',
    isMore=true
})=>{
    return (
        <div className={cs(className,styles.titleMore)}>
        <span>{title}</span>
        {isMore &&  <span className={styles.more}><IconFont className={cs(styles.more_icon,EnumIconFontType.iconjiantou)} /></span>}
      </div>
    )
}
export default titleMore