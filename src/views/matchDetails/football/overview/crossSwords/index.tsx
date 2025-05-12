/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-04 16:07:51
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/crossSwords/index.tsx
 */
import styles from "./index.module.scss";
import ImageComp from "@/components/imageComp";
import cs from 'classnames'
import { ReactNode } from "react";
import Title from "../../../_components/title";

import CircleL from "@/components/Common/CircleL";
import CircleD from "@/components/Common/CircleD";
import CircleW from "@/components/Common/CircleW";
const CrossSwords:React.FC<{
  data:any,
  desDom?:ReactNode,
  classNameItem?:string
}>= ({
data,
desDom,
classNameItem
}) => {
  return (
    <div className={styles.CrossSwords}>
      <Title  title={data?.title} isMore={false}/>
      <div className={styles.content}>
            { desDom &&  <div  className={styles.desc}>{desDom}</div>}
            <div className={styles.list}>
            {
              data?.data?.map((item:any,i:number)=>{
                return(
                  <div key={i} className={cs(classNameItem,styles.item)}>
                    <div className={styles.item_left}>
                      <div className={styles.match_info}>
                          <span>{item.date}</span>
                          <span className={styles.match_name}>{item.matchName}</span>
                      </div>
                      <div className={cs(styles.team)}>
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
                    </div>
                    <div className={styles.flag}>
                        {item.type=='L' && <CircleL  name={item.type} />}
                        {item.type=='W' && <CircleW  name={item.type} />}
                        {item.type=='D' && <CircleD  name={item.type} />}
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
