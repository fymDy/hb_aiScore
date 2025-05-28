/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-27 20:21:13
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/table/league/index.tsx
 */

import PlayerComp from "@/components/PlayerComp";
import { LeagueGroup,  StandingTableColumn, TeamStanding } from "../_types";
import styles from "./index.module.scss";
import cs from "classnames";
import ISpan from "@/components/Common/ISpan";
import { pxToRem } from "@/utils/common";

const League: React.FC<{
  activeFilterId:string,
  headerColumn: StandingTableColumn[];
  groupsData: LeagueGroup[];
}> = ({activeFilterId, headerColumn, groupsData }) => {
  const getGridTemplate = (headers: StandingTableColumn[]) => {
    const fixed = headers
      .filter((h) => h.fixedWidth)
      .map((h) => pxToRem(h.fixedWidth));
    const flexibleCount = headers.length - fixed.length;
    const flexCols = new Array(flexibleCount).fill("1fr");
    return [...fixed, ...flexCols].join(" ");
  };
  return (
    <section className={styles.League}>
      {groupsData.map((groupIteam: LeagueGroup, index: number) => {
        return (
          <dl key={index} className={styles.table}>
            <dt
              className={styles.tableHeader}
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: getGridTemplate(headerColumn),
              }}
            >
              {headerColumn.map((col: StandingTableColumn) => (
                <div key={col.key} style={{ textAlign: col.align }}>
                  {col.label}
                </div>
              ))}
            </dt>
            <dd className={styles.tableContent}>
              {groupIteam?.teams?.[activeFilterId as 'all' | 'home' | 'away'].map((team: TeamStanding, i: number) => {
                return (
                  <div
                    key={i}
                    className={cs(
                      styles.tableRow,
                    )}
                    style={{
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: getGridTemplate(headerColumn),
                    }}
                  >
                    <ISpan className={styles.order} name={team.rank} />
                    <PlayerComp
                      className={styles.PlayerComp}
                      logo={team.logoUrl}
                      name={team.teamName}
                    />
                    <ISpan className={styles.P} name={team.played} />
                    <ISpan className={styles.W} name={team.win} />
                    <ISpan className={styles.D} name={team.draw} />
                    <ISpan className={styles.L} name={team.lose} />
                    <ISpan
                      className={styles.goals}
                      name={`${team.goalsFor}:${team.goalsAgainst}`}
                    />
                    <ISpan className={styles.pts} name={team.points} />
                  </div>
                );
              })}
            </dd>
          </dl>
        );
      })}
    </section>
  );
};
export default League;
