import React, { useMemo } from "react";
import styles from "./index.module.scss";
import TeamHeader from "../_components/teamHeader";
import { useNavigatePlus } from "@/hooks/router/useNavigatePlus";
import { mockTeamBasicInfo } from "../_types/data";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import StepComp from "@/components/StepComp";
import LineProcess from "@/components/LineProcessComp/LineProcess";
import Line from "./_components/Line";
import MatchResultChart from "./_components/matchResultChart";
import { MatchCanvasPoint } from "../_types";
import TitleMore from "@/views/matchDetails/_components/titleMore";


const Football: React.FC<{}> = ({}) => {
  const { hashValue, state } = useLocationPlus();
  const { navigatePlus } = useNavigatePlus();

  const tabData: any[] = useMemo(() => {
    const data = [
      {
        id: "overview",
        name: "概况",
        isActive: hashValue == "overview" ? true : false,
      },
      {
        id: "table",
        name: "积分榜",
        isActive: hashValue == "table" ? true : false,
      },
      {
        id: "match",
        name: "比赛",
        isActive: hashValue == "match" ? true : false,
      },
      {
        id: "lineUp",
        name: "阵容",
        isActive: hashValue == "lineUp" ? true : false,
      },
      {
        id: "First",
        name: "冠军",
        isActive: hashValue == "First" ? true : false,
      },

      {
        id: "transfer",
        name: "转会",
        isActive: hashValue == "transfer" ? true : false,
      },
    ];

    return data;
  }, [hashValue]);
  const stepData = {
    step1: "足球比分直播",
    step2: "中國足球乙級聯賽",
    name: "北京理工 vs 上海海港富盛经开比分動畫直播,預測(2025/04/09)",
  };
  const resultData:MatchCanvasPoint[]=[
    { date: '03/16', result: 'W', score: '1-0', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '04/22', result: 'D', score: '1-1', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '05/06', result: 'W', score: '1-0', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '05/12', result: 'L', score: '2-0', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '05/18', result: 'D', score: '4-1', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' }
      ]
  const onClickTab = (item: any) => {
    const id = item.id;
    navigatePlus(`#${id}`, { state: state, replace: true });
  };

  return (
    <div className={styles.Football}>
      <TeamHeader
        className={styles.Football_TeamHeader}
        data={mockTeamBasicInfo}
        tabData={tabData}
        hashValue={hashValue}
        onClickTab={onClickTab}
        onClickBack={() => {
          navigatePlus(-1);
        }}
      />
      <StepComp
        className={styles.details_StepComp}
        step1={stepData.step1}
        step2={stepData.step2}
        name={stepData.name}
      />
     <div className={styles.LineProcess_wrap}>
       <Line data={mockTeamBasicInfo} />
       <LineProcess  leftRatio={50} rightRatio={50} />
     </div>
     <MatchResultChart     data={resultData}/>
    </div>
  );
};
export default Football;
