/*
 * @Author: Mark
 * @Date: 2025-05-09 14:27:36
 * @LastEditTime: 2025-05-30 19:09:04
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/PlayerComp/index.tsx
 */
import Images from '../Common/Images'
import ISpan from '../Common/ISpan'
import styles from './index.module.scss'
import cs from 'classnames'
const PlayerComp:React.FC<{
    className:string
    logo?:string,
    name?:string,
    classPlayerLogo?:string,
    classPlayerName?:string,
    imgStyle?:any,
}>=({className,classPlayerLogo,classPlayerName,logo,name,imgStyle})=>{
    return (
        <div className={cs(styles.PlayerComp,className)}>
            {logo && <Images className={cs(styles.logo,classPlayerLogo)} imgSrc={logo} imgStyle={imgStyle}  />}
            {name && <ISpan className={cs(styles.name,classPlayerName)} name={name}/>}
        </div>
    )
}
export default PlayerComp