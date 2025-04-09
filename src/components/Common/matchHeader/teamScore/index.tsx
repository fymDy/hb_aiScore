import React from "react";
import styles from "./index.module.scss";

import cs from "classnames";

const TeamScore: React.FC<{
  result:string | number
  homeResultScore:string | number
  awayResultScore:string | number
  htScore?:string ,
  ftScore?:string,
  matchMin?:string
}> = ({result,homeResultScore,awayResultScore,htScore,ftScore,matchMin}) => {
  return (
    <div className={styles.team_score}>
          <span className={styles.result}>
            {result==0 ?'待定': result==1?'完场':matchMin}
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
