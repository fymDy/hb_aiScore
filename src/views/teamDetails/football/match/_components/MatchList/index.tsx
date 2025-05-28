/*
 * @Author: Mark
 * @Date: 2025-05-28 11:50:23
 * @LastEditTime: 2025-05-28 16:46:03
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/match/_components/MatchList/index.tsx
 */
import React, { useMemo, useState } from "react";
import { TeamMatchRecordGrouped } from "../../_types";
import TitleMore from "@/views/matchDetails/_components/titleMore";
import styles from "./index.module.scss";
import cs from "classnames";
import CircleD from "@/components/Common/CircleD";
import CircleL from "@/components/Common/CircleL";
import CircleW from "@/components/Common/CircleW";
import ISpan from "@/components/Common/ISpan";
import ImageComp from "@/components/imageComp";
import PlayerComp from "@/components/PlayerComp";
import { TeamBasicInfo } from "@/views/teamDetails/_types";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
interface Props {
  showUpcoming: boolean;
  data: TeamMatchRecordGrouped;
  homeData: TeamBasicInfo;
}

const MatchList: React.FC<Props> = ({ homeData, data, showUpcoming }) => {
  const filteredGroups = useMemo(() => {
    return data.groups
      .map((group) => ({
        matchType: group.matchType,
        matches: group.matches.filter(
          (m) => m.status === (showUpcoming ? "upcoming" : "finished")
        ),
      }))
      .filter((group) => group.matches.length > 0);
  }, [showUpcoming]);

  return (
    <div className={cs(styles.MatchList)}>
      {filteredGroups.map((group) => (
        <div key={group.matchType}>
          <TitleMore title={group.matchType} isMore={false} />
          {group.matches.map((item, i) => (
            <div key={i} className={cs(styles.item)}>
              <div className={styles.item_left}>
                <div className={cs(styles.column, styles.date)}>
                  <span>{item.date}</span>
                  <span>{showUpcoming ? "17:50" : "完场"}</span>
                </div>
                <div className={cs(styles.column, styles.team_wrap)}>
                  <div className={cs(styles.team)}>
                    <PlayerComp
                      className={styles.PlayerComp}
                      logo={homeData.logoUrl}
                      name={homeData.name_zh}
                      classPlayerName={styles.classPlayerName}
                    />
                    <PlayerComp
                      className={styles.PlayerComp}
                      logo={item.teamLogo}
                      name={item.teamName}
                    />
                  </div>
                  <IconFont
                    className={cs(styles.icondata, EnumIconFontType.icondata)}
                  />
                </div>
                <div className={cs(styles.column, styles.score)}>
                  <span>{item.score}</span>
                  <span>{item.score}</span>
                </div>
              </div>

              <div className={styles.item_right}>
                {item?.status == "finished" && (
                  <div className={styles.flag}>
                    {item.result == "L" && <CircleL name={item.result} />}
                    {item.result == "W" && <CircleW name={item.result} />}
                    {item.result == "D" && <CircleD name={item.result} />}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchList;
