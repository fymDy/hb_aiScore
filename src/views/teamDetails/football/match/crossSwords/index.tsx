/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-26 16:06:04
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/match/crossSwords/index.tsx
 */
import styles from "./index.module.scss";
import ImageComp from "@/components/imageComp";
import cs from 'classnames'

import CircleL from "@/components/Common/CircleL";
import CircleD from "@/components/Common/CircleD";
import CircleW from "@/components/Common/CircleW";
import TeamGroup from "@/components/Common/TeamGroup";
import ISpan from "@/components/Common/ISpan";
const CrossSwords:React.FC<{
  data:any,
  classNameItem?:string
}>= ({
data,
classNameItem
}) => {
  return (
    <div className={styles.CrossSwords}>
      <div   className={styles.title}>
        <div    className={styles.team_img_wrap}>
            <TeamGroup
                    classNameIcon={styles.team_img}
                    teamImg={data?.countryIcon}
                    teamName={data?.country}
                    teamNameDesc={data?.countryTeamDesc}
            />
          </div>
            <ISpan  className={styles.iSpan} name={data?.HT} />
            <ISpan  className={styles.iSpan}name={data?.FT} />
        </div>
        <div className={styles.list}>
            {
              data?.data?.map((item:any,i:number)=>{
                return(
                  <div key={i} className={cs(classNameItem,styles.item)}>
                     <div className={styles.flag}>
                        {item.type=='L' && <CircleL  name={item.type} />}
                        {item.type=='W' && <CircleW  name={item.type} />}
                        {item.type=='D' && <CircleD  name={item.type} />}
                    </div>
                    <div className={styles.item_left}>
                      <ISpan className={styles.date} name={item.date}></ISpan>
                      <div className={cs(styles.team)}>
                            <ImageComp className={styles.team_img} imgSrc={item.teamHomeImg}>
                                  <span className={styles.teamHome}>{item.teamHome}</span>
                              </ImageComp>
                              <ImageComp className={styles.team_img} imgSrc={item.teamAwayImg}>
                                <span>{item.teamAway}</span>
                              </ImageComp>
                      </div>
                      <div className={styles.score}>
                        <span>{item.teamHomeScore}</span>
                        <span>{item.teamAwayScore}</span>
                      </div>
                      <div className={styles.score}>
                        <span>{item.teamHomeScore}</span>
                        <span>{item.teamAwayScore}</span>
                      </div>
                    </div>
              
                  </div>
                )
              })
            }
         </div>
    
  </div>
  );
};
export default CrossSwords;
