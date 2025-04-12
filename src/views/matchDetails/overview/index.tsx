import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import MatchTimelineChart from "@/components/Common/MatchTimelineChart";

import cs from "classnames";


import imgFlag from "@/assets/images/flag.png";
import { useNavigate } from "react-router-dom";
import ChartLineComp from "@/components/ChartLineComp";
import ChartCircleProcess from "@/components/Common/chartCircleProcess";
import ChartLineTextComp from "@/components/ChartLineTextComp";
import SvgIcon from '@/components/Common/IconSvg';
const OverView: React.FC = () => {
 const navigate= useNavigate()

  const barData: any[] = [
    ...Array.from({ length: 100 }, (_, i) => ({
      team: "home",
      minute: i,
      value: Math.floor(Math.random() * 20),
    })),
    ...Array.from({ length: 100 }, (_, i) => ({
      team: "away",
      minute: i,
      value: Math.floor(Math.random() * 30),
    })),
  ];

  const events: any = {
    home: [
      { minute: 10, type: "corner" },
      { minute: 35, type: "yellowCard" },
      { minute: 60, type: "corner" },
      { minute: 90, type: "yellowCard" },
    ],
    away: [
      { minute: 5, type: "corner" },
      { minute: 30, type: "corner" },
      { minute: 31, type: "corner" },
      { minute: 80, type: "yellowCard" },
    ],
  };

  const headerData = useMemo(() => {
    return {
      matchName: "以色列乙級聯賽",
      startTime: "14:30 2025年4月9日星期三",
      matchMin: 58,
      teamHome: "卡迪斯亞",
      teamHomeImg:
        "https://img0.aiscore.com/football/team/3f0164c40c878bc710d0e7f83c6f5d71.png!w100",
      result: "1", //0待定  1完场  2 展示matchMin
      htScore: "0 - 0",
      ftScore: "0 - 1",
      homeResultScore: 0,
      teamAway: "上海海港富盛经开",
      teamAwayImg:
        "https://img0.aiscore.com/football/team/fef70eb7dee84d19446f52cb3490fd71.png!w100",
      awayResultScore: 1,
      iconBrand: "icondonghuazhibo",
      iconBrandName: "動畫",
    };
  }, []);


  return (
      <div className={styles.OverView}>
        <MatchTimelineChart
          teamHome={headerData.teamHome}
          teamAway={headerData.teamAway}
          barData={barData}
          events={events}
        />
        <div className={styles.chart_group}>
          <div className={styles.circle_group}>
            <ChartCircleProcess title="控球率" leftValue={50} rightValue={70} />
            <ChartCircleProcess
              title="危险进攻"
              leftValue={17}
              rightValue={67}
            />
            <ChartCircleProcess
              title="危险进攻"
              leftValue={80}
              rightValue={120}
            />
          </div>
          <ChartLineComp title={"On Target"} imgFlag={imgFlag}/>
          <ChartLineTextComp title={"On Target"} />
        </div>
        <div className={styles.player}>
        <SvgIcon name="iconPenalty" size={14} color="#f00" />
        <SvgIcon name="iconsubstitution" size={14} />
        </div>
        <div className={styles.player}></div>
      </div>
  );
};

export default OverView;
