/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-15 19:12:49
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/venueReferee/index.tsx
 */
import { EnumIconFontType } from "@/enum/enumIconFontType";
import styles from "./index.module.scss";
import SvgIcon from "@/components/Common/IconSvg";
import ImageComp from "@/components/imageComp";
import defaultPlayer from '@/assets/images/default-player.png'
import cs from 'classnames'
import IconFont from "@/components/Common/Iconfont";
const VenueReferee:React.FC<{
  title:string,
  imgSrc:string,
  name:string,
  isReferee?:boolean,
  scoreHome?:string,
  scoreWay?:string
}>= ({
  title='',
  imgSrc='',
  name='',
  isReferee=false,
  scoreHome='',
  scoreWay=''
}) => {
  return (
    <dl className={styles.VenueReferee}>
      <dt className={styles.title}>{title}</dt>
      <dd className={styles.content}>

            <div className={styles.player}>
              {
                isReferee ? <ImageComp  className={styles.img_player} imgSrc={imgSrc?imgSrc:defaultPlayer}/>
                :<IconFont className={cs(styles.icon_venue,EnumIconFontType.iconchangguan)} />
              }
               <span className={styles.name_player}>{name}</span>
            </div>
            {
              isReferee && 
              <div className={styles.des_value}>
              <span>{scoreHome}</span>
              <SvgIcon name={EnumIconFontType.iconredandyellow1}  />
              <span>{scoreWay}</span>
          </div>
            }
        
      </dd>
  </dl>
  );
};
export default VenueReferee;
