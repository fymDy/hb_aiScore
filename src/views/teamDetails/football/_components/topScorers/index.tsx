import React, { useMemo } from "react";
import TitleMore from "@/views/matchDetails/_components/titleMore";
import styles from "./index.module.scss";
import {
  TeamSchedule,
  MatchSchedule,
  PlayerStatItem,
} from "@/views/teamDetails/_types";

import PlayerComp from "@/components/PlayerComp";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import cs from "classnames";

const TopScorers: React.FC<{
  title:string,
  data: PlayerStatItem[];
  isMore?:boolean
  classNameItem?:string
     classPlayerLogo?: string;
    classPlayerName?: string;
}> = ({ title,data ,classNameItem,isMore,classPlayerLogo,classPlayerName}) => {


  return (
    <div className={styles.TopScorers}>
      <TitleMore title={title} isMore={isMore} />
      <div className={styles.content}>
        {data?.map((item: PlayerStatItem, i: number) => (
          <div key={i} className={cs(classNameItem,styles.item)}>
    
            <IconFont
              className={cs(
                styles.rank,
                styles[`f${item.rank}`],
                i<3 ?  EnumIconFontType.icongoals1:''
              )}
            />
            <PlayerComp
              className={styles.PlayerTeamComp_Wrap}
              logo={item?.logo}
              name={item?.name}
              classPlayerLogo={classPlayerLogo}
              classPlayerName={classPlayerName}
            />
            <span className={styles.goal}>{item?.goals}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScorers;
