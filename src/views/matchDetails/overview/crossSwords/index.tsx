/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-29 20:33:20
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/crossSwords/index.tsx
 */
import { EnumIconFontType } from "@/enum/enumIconFontType";
import styles from "./index.module.scss";
import SvgIcon from "@/components/Common/IconSvg";
import ImageComp from "@/components/imageComp";
import defaultPlayer from '@/assets/images/default-player.png'
import cs from 'classnames'
import IconFont from "@/components/Common/Iconfont";
import { ReactNode } from "react";
import Title from "../../common/title";
import Team from "@/components/Common/team";
const CrossSwords:React.FC<{
  data:any,
  desDom:ReactNode
}>= ({
data=null,
desDom=null
}) => {
  return (
    <div className={styles.CrossSwords}>
      <Title  title={data?.title} isMore={false}/>
      <div className={styles.content}>
            <div  className={styles.desc}>{desDom}</div>
            <div className={styles.list}>
            {
              data?.data?.map((item:any,i:number)=>{
                return(
                  <div key={i} className={styles.item}>
                    <div className={styles.match_info}>
                        <span>{item.date}</span>
                        <span className={styles.match_name}>{item.matchName}</span>
                    </div>
                    <div className={styles.team}>
                        <div className={styles.team_name}>
                            <ImageComp className={styles.team_img} imgSrc={item.teamHomeImg}>
                              <span>{item.teamHome}</span>
                            </ImageComp>
                        </div>
                        <div className={styles.team_name}>
                            <ImageComp className={styles.team_img} imgSrc={item.teamAwayImg}>
                              <span>{item.teamAway}</span>
                            </ImageComp>
                        </div>
                    </div>
                    <div className={styles.score}>
                      <span>{item.teamHomeScore}</span>
                      <span>{item.teamAwayScore}</span>
                    </div>
                    <div className={styles.flag}>
                        {item.type==0 && <span className={cs(styles.cicle,styles.cicle_L)}>L</span>}
                        {item.type==1 && <span  className={cs(styles.cicle,styles.cicle_W)}>W</span>}
                        {item.type==2 && <span  className={cs(styles.cicle,styles.cicle_D)}>D</span>}
                    </div>
                  </div>
                )
              })
            }
         </div>
      </div>
  </div>
  );
};
export default CrossSwords;
