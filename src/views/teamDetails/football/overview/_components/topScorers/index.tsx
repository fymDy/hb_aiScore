import React, { useMemo } from "react";
import TitleMore from "@/views/matchDetails/_components/titleMore";
import styles from "./index.module.scss";
import {
  TeamSchedule,
  MatchSchedule,
  IFTopScorers,
} from "@/views/teamDetails/_types";

import PlayerComp from "@/components/PlayerComp";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import cs from "classnames";

const TopScorers: React.FC<{
  data: TeamSchedule;
}> = ({ data }) => {
  const schedulesData: MatchSchedule = useMemo(() => {
    return data?.schedules?.[0] ?? [];
  }, [data]);

  return (
    <div className={styles.TopScorers}>
      <TitleMore title={"最佳射手"} isMore={true} />
      <div className={styles.content}>
        {schedulesData.topScorers?.map((item: IFTopScorers, i: number) => (
          <div key={i} className={styles.item}>
            <IconFont
              className={cs(
                styles.rank,
                styles[`f${item.rank}`],
                EnumIconFontType.icongoals1
              )}
            />
            <PlayerComp
              className={styles.PlayerTeamComp_Wrap}
              logo={item?.logo}
              name={item?.name}
            />
            <span className={styles.goal}>{item?.goal}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScorers;
