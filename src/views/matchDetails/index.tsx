import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import MatchHeader from "@/components/Common/matchHeader";
import TabsComp from "@/components/TabsComp";
import StepComp from "@/components/StepComp";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import { useNavigatePlus } from "@/hooks/router/useNavigatePlus";

import { useApp } from "@/hooks/useApp";
import { RouterPathUtil } from "@/router/routerPathUtil";
import LayoutOutlet from "@/layout/outlet";
import { FootballMatchDetail } from "@/components/Common/matchHeader/type";

const MatchDetails: React.FC = () => {
 const {hashValue,state}= useLocationPlus();
 const {navigatePlus}=useNavigatePlus()
 const {setShowStep}=useApp()
  useEffect(() => {
    console.log('MatchDetails useEffect：挂载');
    return () => console.log('MatchDetails useEffect：卸载');
  }, []);


  const matchHeaderData=useMemo<FootballMatchDetail>(()=>{
    return {
      "matchId": 100198,
      "leagueId": 998,
      "leagueName": "以色列乙级联赛",
      "matchDate": "2025-04-09",
      "weekDay": "星期三",
      "startTime": "14:30",
      "status": "live",
      currentTime:'70',
      "isFavorite": false,
      "homeTeam": {
        "id": 101,
        "name": "卡迪斯亚",
        "logo": "https://img0.aiscore.com/football/team/3f0164c40c878bc710d0e7f83c6f5d71.png!w100",
        "score": 0
      },
      "awayTeam": {
        "id": 102,
        "name": "上海海港普盛经开",
        "logo": "https://img0.aiscore.com/football/team/fef70eb7dee84d19446f52cb3490fd71.png!w100",
        "score": 1
      },
      "halfTimeScore": "0-0",
      "fullTimeScore": "0-1",
      liveInfo: {
        type: 'animation',
        provider: '动画',
        logo: 'https://example.com/iqiyi.png',
        url: 'https://sports.iqiyi.com/live/123456'
      }
    }
    
  },[])

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


  return (
    <div className={styles.matchDetails}>
    
      <MatchHeader data={matchHeaderData} 
        onClickBack={()=>{
          setShowStep(true)
          navigatePlus(-1)
        }}
        onClickTeam={()=>{
          setShowStep(true)
          navigatePlus(`${RouterPathUtil.TEAMDETAILS}/${state?.ballType}`, { state:state, replace: false })
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
      <LayoutOutlet/>
    </div>
  );
};

export default MatchDetails;
