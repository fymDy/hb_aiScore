/*
 * @Author: Mark
 * @Date: 2025-04-16 17:40:32
 * @LastEditTime: 2025-05-09 14:17:42
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/_components/title/index.tsx
 */
import IconFont from '@/components/Common/Iconfont'
import styles from './index.module.scss'
import cs from 'classnames'
import { EnumIconFontType } from '@/enum/enumIconFontType'
const Title:React.FC<{
    title:string,
    className?:string,
    isMore?:boolean,
}> =({
    title,
    className='',
    isMore=true
})=>{
    return (
        <div className={cs(className,styles.Title)}>
        <span>{title}</span>
        {isMore &&  <span className={styles.more}>More<IconFont className={cs(styles.more_icon,EnumIconFontType.iconjiantou)} /></span>}
      </div>
    )
}
export default Title