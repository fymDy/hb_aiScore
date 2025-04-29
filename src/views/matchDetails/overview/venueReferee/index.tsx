/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-29 19:18:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/venueReferee/index.tsx
 */
import { EnumIconFontType } from "@/enum/enumIconFontType";
import styles from "./index.module.scss";
import SvgIcon from "@/components/Common/IconSvg";
import Image from "@/components/Common/Image";
import defaultPlayer from '@/assets/images/default-player.png'
import cs from 'classnames'
import IconFont from "@/components/Common/Iconfont";
import CrossSwords from "../crossSwords";
import Title from "../../common/title";
const VenueReferee:React.FC<{
  title:string,
  imgSrc:string,
  name:string,
  isReferee?:boolean,
  scoreHome?:string,
  scoreWay?:string
  crossSwordsData?:any
}>= ({
  title='',
  imgSrc='',
  name='',
  isReferee=false,
  scoreHome='',
  scoreWay='',
  crossSwordsData=null
}) => {
  return (
    <section className={styles.VenueReferee}>
      <Title className={styles.title} title={title}></Title>
      <div className={styles.content}>
            <div className={styles.player}>
              {
                isReferee  
                ?<Image  className={styles.img_player} imgSrc={imgSrc?imgSrc:defaultPlayer}/>
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
        
      </div>
       {    !isReferee &&
              <CrossSwords data={crossSwordsData}
                desDom={<>
                 过去&nbsp; <span>{crossSwordsData.last}</span>,
                     {crossSwordsData.teamName}&nbsp;  胜&nbsp;  <span> {crossSwordsData.win}</span> ,
                     平&nbsp; <span>{crossSwordsData.tie}</span> ,
                     负&nbsp;  <span>{crossSwordsData.lose}</span> ,
                     场均&nbsp;  比分&nbsp; <span>{crossSwordsData.averageScore}</span>
                     &nbsp; 和&nbsp;  失球&nbsp; <span>{crossSwordsData.concedScore}</span>  
                </>}
                />
       }     
  </section>
  );
};
export default VenueReferee;
