import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";

import MatchHeader from "@/components/Common/matchHeader";
import TabsComp from "@/components/TabsComp";
import StepComp from "@/components/StepComp";

import { useNavigate } from "react-router-dom";
import OverView from "./overview";
import { useApp } from "@/provides/layoutAppProvider";

const MatchDetails: React.FC = () => {
 const navigate= useNavigate()

  //tab切换：选中tab
  const [activeTab, setActiveTab] = useState<string>("");


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
  const tabData: any[] = useMemo(() => {
    return [
      {
        id: "1",
        name: "概况",
        isActive: activeTab == "football" ? true : false,
      },
      {
        id: "2",
        name: "聊天",
        isActive: activeTab == "basketball" ? true : false,
      },
      {
        id: "3",
        name: "赔率",
        isActive: activeTab == "tennis" ? true : false,
      },
      {
        id: "4",
        name: "数据",
        isActive: activeTab == "volleyball" ? true : false,
      },
      {
        id: "5",
        name: "阵容",

        isActive: activeTab == "basketball" ? true : false,
      },
      {
        id: "6",
        name: "交锋",
        isActive: activeTab == "tennis" ? true : false,
      },
      {
        id: "7",
        name: "积分榜",
        isActive: activeTab == "volleyball" ? true : false,
      },
    ];
  }, []);

  const stepData = {
    step1: "足球比分直播",
    step2: "中國足球乙級聯賽",
    name: "北京理工 vs 上海海港富盛经开比分動畫直播,預測(2025/04/09)",
  };
  const onClickTab = (item: any) => {
    setActiveTab(item.id);
  };

  return (
    <div className={styles.matchDetails}>
    
      <MatchHeader data={headerData} onClick={()=>navigate(-1)}/>
      <TabsComp
        className={styles.tabs}
        activeTab={activeTab}
        tabData={tabData}
        onClick={onClickTab}
      />
      <StepComp
        step1={stepData.step1}
        step2={stepData.step2}
        name={stepData.name}
      />
      <OverView/>
    </div>
  );
};

export default MatchDetails;
