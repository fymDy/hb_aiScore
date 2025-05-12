import React, { useMemo } from "react";
import styles from "./index.module.scss";
import cs from "classnames";

import TeamScore from "./teamScore";
import TeamTitle from "./teamTitle";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import IComp from "@/components/IComp";
import TeamLogoComp from "@/components/TeamLogoComp";
import { FootballMatchDetail } from "./type";

const MatchHeader: React.FC<{
  data:FootballMatchDetail
  onClickBack:()=>void
  onClickTeam:(id:string | number)=>void
}> = ({data,onClickBack,onClickTeam}) => {

  const resTitle=useMemo<string>(()=>{
    return `${data?.leagueName} ${data?.startTime} ${data?.matchDate} ${data?.weekDay}`
  },[data])
  return (
    <div className={styles.match_top} id={String(data?.matchId)}>
          <TeamTitle title={resTitle} onClick={onClickBack}/>
    
              <div className={styles.match_top_box_info}>
                      <TeamLogoComp imgSrc={data?.homeTeam.logo} name={data?.homeTeam.name} onClick={()=>onClickTeam(data?.homeTeam.id)} />
                      <TeamScore status={data?.status} matchMin={data?.currentTime}
                       htScore={data?.halfTimeScore}
                       ftScore={data?.fullTimeScore}
                       homeResultScore={data?.homeTeam?.score}
                       awayResultScore={data?.awayTeam?.score}
                       />
                    <TeamLogoComp imgSrc={data?.awayTeam.logo} name={data?.awayTeam.name}/>
                    <IComp className={ cs(styles.icon_left,EnumIconFontType.icon_weishoucang)}/>
                    <IComp className={ cs(styles.icon_right,EnumIconFontType.icon_weishoucang)}/>
               </div>
                {
                  data?.status==='live' &&
                  <div className={styles.match_top_box_live}>
                    <div className={styles.bg}></div>
                    <div className={styles.live}>
                     <IComp className={cs(EnumIconFontType.icondonghuazhibo,styles.icon_font)}></IComp>
                      <span className={styles.iconBrandName}>{data?.liveInfo?.provider}</span>
                  </div>
        </div>
                }
    </div>
  );
};
export default MatchHeader;
