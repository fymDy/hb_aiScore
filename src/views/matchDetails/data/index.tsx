import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import BtnGroup from "@/components/Common/btnGroup";

import type { FootballMatchData} from '@/views/matchDetails/types/match'
import { IFSearchResult } from "@/views/home/interface";
import TeamsData from "./teamsData";
  interface IFTeamsDataProps {
  teamsData: FootballMatchData['teams'];
}

const Data: React.FC<IFTeamsDataProps> = ({teamsData}) => {
   const [activeFilterId, setActiveFilterId] = useState("0");
  //  const [tabData, setTabData] = useState("");
  

     const teamStatistics = useMemo(() => {
      const formatPeriodStats = (period: any, label: string) => ({
        name: label,
        possession: { name: "控球率", value: period.possession },
        shots: {
          total: { name: "射门", value: period.shots.total },
          on_target: { name: "射正", value: period.shots.on_target },
          off_target: { name: "射偏", value: period.shots.off_target },
          blocked: { name: "被封堵", value: period.shots.blocked },
          inside_box: { name: "禁区内射门", value: period.shots.inside_box },
          outside_box: { name: "禁区外射门", value: period.shots.outside_box },
          woodwork: { name: "击中门框", value: period.shots.woodwork },
          big_chances: { name: "绝佳机会", value: period.shots.big_chances },
          big_chances_missed: { name: "错失良机", value: period.shots.big_chances_missed },
          saved: { name: "被扑救", value: period.shots.saved },
          penalty_area_attempts: { name: "禁区尝试", value: period.shots.penalty_area_attempts },
          goals: { name: "进球", value: period.shots.goals }
        },
        passes: {
          total: { name: "总传球", value: period.passes.total },
          accurate: { name: "成功传球", value: period.passes.accurate },
          key_passes: { name: "关键传球", value: period.passes.key_passes },
          crosses: { name: "传中", value: period.passes.crosses },
          long_balls: { name: "长传", value: period.passes.long_balls },
          through_balls: { name: "直塞", value: period.passes.through_balls },
          short_passes: { name: "短传", value: period.passes.short_passes },
          pass_accuracy_pct: { name: "传球成功率", value: period.passes.pass_accuracy_pct },
          passes_into_final_third: { name: "传入前场三区", value: period.passes.passes_into_final_third },
          passes_into_penalty_area: { name: "传入禁区", value: period.passes.passes_into_penalty_area },
          progressive_passes: { name: "推进性传球", value: period.passes.progressive_passes }
        },
        tackles: { name: "抢断", value: period.tackles },
        interceptions: { name: "拦截", value: period.interceptions },
        clearances: { name: "解围", value: period.clearances },
        saves: { name: "扑救", value: period.saves },
        corners: { name: "角球", value: period.corners },
        offsides: { name: "越位", value: period.offsides },
        fouls: { name: "犯规", value: period.fouls },
        yellow_cards: { name: "黄牌", value: period.yellow_cards },
        red_cards: { name: "红牌", value: period.red_cards }
      });
  
      const formatTeam = (statistics: any) => ({
        fulltime: formatPeriodStats(statistics.fulltime, "比赛"),
        halftime: formatPeriodStats(statistics.halftime, "上半场"),
        secondhalf: formatPeriodStats(statistics.secondhalf, "下半场")
      });
  
      return {
        home: formatTeam(teamsData.home.statistics),
        away: formatTeam(teamsData.away.statistics)
      };
    }, [teamsData]);

    const tabData: IFSearchResult[] = useMemo(() => {
      const data = [
        {
          id: "0",
          name: teamStatistics.home.fulltime.name,
          isActive: activeFilterId === "0"
       
        },
        {
          id: "1",
          name: teamStatistics.home.halftime.name,
          isActive: activeFilterId === "1",
        },
        {
          id: "2",
          name: teamStatistics.home.secondhalf.name,
          isActive: activeFilterId === "2",
        }
      ];
      return data;
    }, [activeFilterId]);

    const filterData = useMemo(() => {
      if(activeFilterId=='1'){
       return {
          name:teamStatistics.home.halftime.name,
          home:teamStatistics.home.halftime,
          away:teamStatistics.away.halftime
       }
      }else  if(activeFilterId=='2'){
        return{
          name:teamStatistics.home.secondhalf.name,
          home:teamStatistics.home.secondhalf,
          away:teamStatistics.away.secondhalf
        } 
      }
      return{
        name:teamStatistics.home.fulltime.name,
        home:teamStatistics.home.fulltime,
        away:teamStatistics.away.fulltime
      } 
    }, [activeFilterId,teamStatistics]);

  
  return (
    <div className={styles.Data}>
        <BtnGroup className={styles.btnGroup_wrap} dataList={tabData} onclick={(id: string) => setActiveFilterId(id)} />
        <TeamsData data={filterData} /> 
    </div>
  );
};

export default Data;
