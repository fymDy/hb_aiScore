import React from "react";
import styles from "./index.module.scss";

import cs from "classnames";
import Twinkle from "@/components/Common/Twinkle";

const TeamScore: React.FC<{
  status:string | number
  homeResultScore:string | number
  awayResultScore:string | number
  htScore?:string | number ,
  ftScore?:string | number,
  matchMin?:string | number
}> = ({status,homeResultScore,awayResultScore,htScore,ftScore,matchMin}) => {
  return (
    <div className={styles.team_score}>
          <span className={cs(styles.result)}>
            {status=='not_started' ?'待定': status=='ended'?'完场': matchMin}
            {
              status==='live' &&    <Twinkle />  
            }
       
           </span>
          <span className={styles.resultScore}> {homeResultScore} - {awayResultScore}</span>
          <div  className={styles.segment_score}>
              {  htScore && <span className={styles.htScore}>{`HT ${htScore }` }</span>}
              {  ftScore && <span className={styles.ftScore}>{`FT ${ftScore }` }</span>}
          </div>
     
    </div>
  );
};
export default TeamScore;
