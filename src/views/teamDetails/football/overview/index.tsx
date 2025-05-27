import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import LineProcess from "@/components/LineProcessComp/LineProcess";
import Line from "./_components/Line";
import MatchResultChart from "./_components/matchResultChart";
import MatchSchedule from "./_components/matchSchedule";
import MostPlayer from "./_components/mostPlayer";
import { MatchCanvasPoint } from "../../_types";
import { infoData, mockTeamBasicInfo, mockTeamSchedule, mockTransfers } from "../../_types/data";
import RecentTransfers from "./_components/recentTransfers";
import Infomation from "./_components/infomation";


const OverView: React.FC<{}> = ({}) => {
  const resultData:MatchCanvasPoint[]=[
    { date: '03/16', result: 'W', score: '1-0', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '04/22', result: 'D', score: '1-1', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '05/06', result: 'W', score: '1-0', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '05/12', result: 'L', score: '2-0', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' },
        { date: '05/18', result: 'D', score: '4-1', opponentLogo: 'https://img0.aiscore.com/football/team/48de225f5504af12dcfbedbe7829dbf7.png!w60' }
      ]

  return (
    <div className={styles.OverView}>
     <div className={styles.LineProcess_wrap}>
       <Line data={mockTeamBasicInfo} />
       <LineProcess  leftRatio={50} rightRatio={50} />
     </div>
     <MatchResultChart     data={resultData}/>
     <MatchSchedule data={mockTeamSchedule}/>
     <MostPlayer data={mockTeamSchedule}/>
     <RecentTransfers data={mockTransfers}/>
      <Infomation data={infoData} />
    </div>
  );
};
export default OverView;
