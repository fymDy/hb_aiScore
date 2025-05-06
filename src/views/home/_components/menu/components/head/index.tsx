

import styles from './index.module.scss'
import cs from 'classnames'
import { ReactNode } from 'react'
import IconFont from '@/components/Common/Iconfont'
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
                {showBack && <IconFont className={cs(styles.icon_back,'icon-zuojiantou')}/>}
                <span className={styles.text}>{text}</span>
            </p>
            {showClose && <IconFont className={cs(styles.icon_close,'icon-guanbi')} onClick={onClickClose} />}
         </div>
}
export default Head