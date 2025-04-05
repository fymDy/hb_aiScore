/*
 * @Author: Mark
 * @Date: 2025-04-05 12:27:03
 * @LastEditTime: 2025-04-05 16:31:26
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/main/menu/components/head/index.tsx
 */
import IComp from '@/components/Common/I'
import styles from './index.module.scss'
import cs from 'classnames'
import { ReactNode } from 'react'
interface IFHeadUIProps {
    text: string
    rightNode?: ReactNode
    showBack?: boolean
    showClose?: boolean
    onClickBack?: () => any
    onClickClose?: () => any
    className?: string
  }
const Head=({text,className,showBack=false,showClose=false,onClickBack,onClickClose}:IFHeadUIProps)=>{
    return <div className={cs(styles.Head,className)}>
            <p className={styles.left} onClick={onClickBack}  >
                {showBack && <IComp className={cs(styles.icon_back,'icon-zuojiantou')} />}
                <span className={styles.text}>{text}</span>
            </p>
            {showClose && <IComp className={cs(styles.icon_close,'icon-guanbi')} onClick={onClickClose} />}
         </div>
}
export default Head