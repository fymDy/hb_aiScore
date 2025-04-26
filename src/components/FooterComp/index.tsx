/*
 * @Author: Mark
 * @Date: 2025-04-01 20:19:38
 * @LastEditTime: 2025-04-26 19:58:57
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/FooterComp/index.tsx
 */
import { useMemo } from 'react'
import IconFont from '../Common/Iconfont'
import styles from './index.module.scss'
import cs from 'classnames'
import SpriteIcon from '../Common/IconSprite'
import IconSprite from '../Common/IconSprite'
const FooterComp:React.FC<
{
  
}>=({})=>{
    const footerData=useMemo(()=>{
        return {
            icon:['twitter','fc','ins'],
            text:['聯繫我們','使用條款','隱私政策'],
            copyright:'Copyright @ 2025 OneScore | 18+ Gamble Responsibly',
            provider:{
              text:  `AiScore's Sports Data Provider`
            }
        }
    },[])
    return(
        <section  className={cs(styles.FooterComp)} >
                <div className={cs(styles.icon_wrap)}>
                    {footerData.icon.map((item:any)=>{
                        return <IconSprite  name={item} />
                    })}
                </div>
                <div className={cs(styles.text_wrap)}>
                    {footerData.text.map((item:any)=>{
                        return <span>{item}</span>
                    })}
                </div>
                <div className={styles.copyright}>{footerData.copyright}</div>
                <div className={styles.provider}>
                    <span>{footerData.provider.text}</span>
                </div>
          </section>
     
    )
}
export default FooterComp