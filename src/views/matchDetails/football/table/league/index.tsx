/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-19 14:28:56
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/football/table/league/index.tsx
 */

import PlayerComp from "@/components/PlayerComp";
import TitleMore from "../../../_components/titleMore";
import { StandingTeam } from "../enum";
import styles from "./index.module.scss";
import cs from "classnames";
import ISpan from "@/components/Common/ISpan";
import BtnGroup from "@/components/Common/btnGroup";
import { IFSearchResult } from "@/views/home/interface";
const League: React.FC<{
  matchName:string,
  data: StandingTeam[];
  filterData: IFSearchResult[];
  onclickFilter: (id: string) => void;
}> = ({matchName, data, filterData, onclickFilter }) => {
  return (
    <section className={styles.League}>
      <BtnGroup
        className={styles.btnGroupr_wrap}
        dataList={filterData}
        onclick={onclickFilter}
      />
      <TitleMore className={styles.Title} title={"聯賽 "} isMore={false} />
      <dl className={styles.table}>
        <dt className={styles.tableHeader}>
          <label className={styles.order}>#</label>
          <div className={styles.PlayerComp}>队伍</div>
          <span className={styles.P}>P</span>
          <span className={styles.W}>W</span>
          <span className={styles.D}>D</span>
          <span className={styles.L}>L</span>
          <label className={styles.goals}>進球</label>
          <span>±</span>
          <span>Pts</span>
        </dt>
        <dd className={styles.tableContent}>
          {data.map((team: StandingTeam, index: number) => (
            <div
              key={index}
              className={cs(styles.tableRow, styles[team.status || "normal"])}
            >
              <label className={styles.order}>{team.rank}</label>
              <PlayerComp
                className={styles.PlayerComp}
                logo={team.team_logo}
                name={team.team_name}
              />
              <ISpan className={styles.P} name={team.match_played} />
              <ISpan className={styles.W} name={team.wins} />
              <ISpan className={styles.D} name={team.draws} />
              <ISpan className={styles.L} name={team.losses} />
              <label className={styles.goals}>
                {team.goals_for}-{team.goals_against}
              </label>
              <ISpan className={styles.goal_diff} name={team.goal_diff} />
              <ISpan className={styles.pts} name={team.points} />
            </div>
          ))}
        </dd>
      </dl>
      <div className={styles.promotions}>
        <ISpan className={styles.dot} name={''} />
        <ISpan className={styles.matchName} name={matchName} />
      </div>
    </section>
  );
};
export default League;
