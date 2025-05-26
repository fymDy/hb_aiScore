import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import TabsComp from "@/components/TabsComp";
import StepComp from "@/components/StepComp";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import { useNavigatePlus } from "@/hooks/router/useNavigatePlus";

import { useApp } from "@/hooks/useApp";
import { RouterPathUtil } from "@/router/routerPathUtil";
import LayoutOutlet from "@/layout/outlet";
import MatchHeader from "./_components/matchHeader";
import { FootballMatchDetail } from "./_components/matchHeader/type";
import { EnumSportType } from "../home/enum";
import { IFTab } from "../home/interface";
import { footballTabs, basketballTabs } from "./types/match_data";

const MatchDetails: React.FC = () => {
 const {hashValue,state}= useLocationPlus();
   const { ballType } = state;
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
  const tabData: IFTab[] | [] = useMemo(() => {
    let data: IFTab[];
    switch (ballType) {
      case EnumSportType.Football:
         data = footballTabs?.map((item: IFTab) => {
            return { ...item, isActive: item.id === hashValue ? true : false };
        });
        break;
     case EnumSportType.Basketball:
       data = basketballTabs?.map((item: IFTab) => {
        return { ...item, isActive: item.id === hashValue ? true : false };
      });
        break;
      default:
        data=[]
        break;
    }
    return data;  
  }, [hashValue, ballType, footballTabs, basketballTabs]);
 

  const stepData = {
    step1: "足球比分直播",
    step2: "中國足球乙級聯賽",
    name: "北京理工 vs 上海海港富盛经开比分動畫直播,預測(2025/04/09)",
  };
  const onClickTab = (item: IFTab) => {
    navigatePlus(`#${item?.id}`, { state:state, replace: true })
  };
  return (
    <div className={styles.matchDetails}>
      <MatchHeader 
        className={styles[ballType]}
        data={matchHeaderData} 
        onClickBack={()=>{
          setShowStep(true)
          navigatePlus(-1)
        }}
        onClickTeam={()=>{
          setShowStep(true)
          navigatePlus(`${RouterPathUtil.TEAMDETAILS}/${state?.ballType}#overview`, { state:state, replace: false })
        }}/>

      <TabsComp
        className={styles.tabs}
        classNameActiveText={styles.item_active}
        classNameActiveLine={styles.item_activeLine}
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
