import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import MatchHeader from "@/components/Common/matchHeader";
import TabsComp from "@/components/TabsComp";
import StepComp from "@/components/StepComp";
import OverView from "./overview";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import { useNavigatePlus } from "@/hooks/router/useNavigatePlus";
import Chat from "./chat";
import Data from "./data";
import LineUp from "./lineUp";
import Match from "./match";
import Odds from "./odds";
import Table from "./table";
import { useApp } from "@/hooks/useApp";
import { matchData } from "./match_data";
import { RouterPathUtil } from "@/router/routerPathUtil";

const MatchDetails: React.FC = () => {
 const {hashValue,state}= useLocationPlus();
 const {navigatePlus}=useNavigatePlus()
 const {setShowStep}=useApp()
  useEffect(() => {
    console.log('MatchDetails useEffect：挂载');
    return () => console.log('MatchDetails useEffect：卸载');
  }, []);
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
    const data= [
      {
        id: "overview",
        name: "概况",
        isActive: hashValue == "overview" ? true : false,
      },
      {
        id: "chat",
        name: "聊天",
        isActive: hashValue == "chat" ? true : false,
      },
      {
        id: "odds",
        name: "赔率",
        isActive: hashValue == "odds" ? true : false,
      },
      {
        id: "data",
        name: "数据",
        isActive: hashValue == "data" ? true : false,
      },
      {
        id: "lineUp",
        name: "阵容",
        isActive: hashValue == "lineUp" ? true : false,
      },
      {
        id: "match",
        name: "交锋",
        isActive: hashValue == "match" ? true : false,
      },
      {
        id: "table",
        name: "积分榜",
        isActive: hashValue == "table" ? true : false,
      },
    ];
  
    return data;
  }, [hashValue]);

  const stepData = {
    step1: "足球比分直播",
    step2: "中國足球乙級聯賽",
    name: "北京理工 vs 上海海港富盛经开比分動畫直播,預測(2025/04/09)",
  };
  const onClickTab = (item: any) => {
    const id=item.id
    navigatePlus(`#${id}`, { state:state, replace: true })
  };

  const RenderComp =  (
      <>
        {hashValue === "overview" && <OverView />}
        {hashValue === "chat"  && <Chat />}
        {hashValue === "odds"   && <Odds />}
        {hashValue === "data" && <Data teamsData={matchData.teams} />}
        {hashValue === "lineUp"   && <LineUp />}
        {hashValue === "match"  && <Match />}
        {hashValue === "table"  && <Table />}
      </>
  )

  return (
    <div className={styles.matchDetails}>
    
      <MatchHeader data={headerData} 
      onClickBack={()=>{
        setShowStep(true)
        navigatePlus(-1)
      }}
      onClickTeam={()=>{
        setShowStep(true)
        navigatePlus(`/teamDetails/football`, { state:state, replace: false })
      }}/>
      <TabsComp
        className={styles.tabs}
        activeTab={hashValue}
        tabData={tabData}
        onClick={onClickTab}
      />
      <StepComp
        className={styles.details_StepComp}
        step1={stepData.step1}
        step2={stepData.step2}
        name={stepData.name}
      />
      {RenderComp}
    </div>
  );
};

export default MatchDetails;
