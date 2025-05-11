import React from "react";
import styles from "./index.module.scss";
import cs from "classnames";

import TeamScore from "./teamScore";
import TeamTitle from "./teamTitle";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import IComp from "@/components/IComp";
import TeamLogoComp from "@/components/TeamLogoComp";

const MatchHeader: React.FC<{
  data:any
  onClickBack:()=>void
  onClickTeam:(id:string)=>void
}> = ({data,onClickBack,onClickTeam}) => {
  return (
    <div className={styles.match_top}>
          <TeamTitle matchName={data?.matchName} startTime={data?.startTime} onClick={onClickBack}/>
    
              <div className={styles.match_top_box_info}>
                      <TeamLogoComp imgSrc={data?.teamHomeImg} name={data?.teamHome} onClick={()=>onClickTeam('1')} />
                      <TeamScore result={data?.result} matchMin={data?.matchMin}
                       htScore={data?.htScore}
                       ftScore={data?.ftScore}
                       homeResultScore={data?.homeResultScore}
                       awayResultScore={data?.awayResultScore} />
                    <TeamLogoComp imgSrc={data?.teamAwayImg} name={data?.teamAway} />
                    <IComp className={ cs(styles.icon_left,EnumIconFontType.icon_weishoucang)}/>
                    <IComp className={ cs(styles.icon_right,EnumIconFontType.icon_weishoucang)}/>
               </div>
               <div className={styles.match_top_box_live}>
                        <div className={styles.bg}></div>
                        <div className={styles.live}>
                           <IComp className={cs(EnumIconFontType.icondonghuazhibo,styles.icon_font)}></IComp>
                            <span className={styles.iconBrandName}>{data?.iconBrandName}</span>
                        </div>
              </div>
    </div>
  );
};
export default MatchHeader;
