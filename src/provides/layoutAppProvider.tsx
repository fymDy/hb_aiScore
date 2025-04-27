/*
 * @Author: Mark
 * @Date: 2025-04-19 21:27:42
 * @LastEditTime: 2025-04-27 19:47:18
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutAppProvider.tsx
 */
import React, {  useMemo, useRef, useState } from "react";
import { useElementReady } from "@/hooks/useElementReady";
import { LayoutAppContext,  LayoutSysContextType } from "./inteface";
import DownloadComp from "@/components/DownloadComp";
import {  pxToRem } from "@/utils/common";
import { useAppSys } from "@/hooks/useAppSys";
import CollapseComp from "@/components/CollapseComp";
import FooterComp from "@/components/FooterComp";
import StepComp from "@/components/StepComp";

const LayoutAppContextProvider: React.FC<LayoutSysContextType> = ({
  children,
}) => {
   const {viewportHeight}= useAppSys();
  
   const appElementRef = useRef<HTMLDivElement | null>(null);
   const [downLoadHeight, setDownLoadHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isDownloadVisible, setDownloadVisible] = useState(true);
  const [isShowFrm, setShowFrm] = useState(false);//是否展示弹框
  const [isShowStep, setShowStep] = useState(true);//是否展示home/step
  const { ref: handleDownLoadReady, recalc: recalcDownLoadHeight } = useElementReady<HTMLDivElement>((el) => {
    const h = el.getBoundingClientRect().height;
    setDownLoadHeight((prev) => (Math.abs(prev - h) > 1 ? h : prev));
  });


const { ref: handleHeaderReady, recalc: recalcHeaderHeight } = useElementReady<HTMLDivElement>((el) => {
    const h =Math.round(el.getBoundingClientRect().height);
    setHeaderHeight((prev) => (Math.abs(prev - h) > 1 ? h : prev));
  });
  const { ref: handleFooterReady, recalc: recalcFooterHeight } = useElementReady<HTMLDivElement>((el) => {
    const h =Math.round(el.getBoundingClientRect().height);
    setFooterHeight((prev) => (Math.abs(prev - h) > 1 ? h : prev));
  });

  const appHeight = useMemo(() => {
    const h= viewportHeight - (isDownloadVisible ? downLoadHeight : 0);
    return h
  }, [ viewportHeight,isDownloadVisible,downLoadHeight]);
  
  const contentHeight = useMemo(() => {
      // const h= viewportHeight - (isDownloadVisible ? downLoadHeight : 0)- headerHeight ;
      const h= appHeight- headerHeight ;
     if(isShowFrm){
      return pxToRem(h)  ;
     }else{
      return pxToRem(h   - footerHeight);
     }
    
  }, [isShowFrm,appHeight,headerHeight,footerHeight]);
  const collapseData=[
    { id:'0',
      title:'下一场比赛',data:[
      {id:'1',name:'網球 今日比賽'},
      {id:'2',name:'庫貝勒 -阿利貝克·卡奇馬佐夫'},
      {id:'3',name:'葉卡捷琳娜·亞歷山德羅娃 -達裏亞·卡薩基納'},
      {id:'4',name:'雅琳娜·薩巴連卡 - 艾理斯·默頓'},
      {id:'5',name:'索菲亞·肯寧 - 阿納斯塔西婭·波塔波娃'}
    ]},
    {id:'1',
      title:'足球',data:[
      {id:'1',name:'歐洲聯賽冠軍盃賽 2024-25'},
      {id:'2',name:'EPL積分榜2024-25'},
      {id:'3',name:'LaLiga積分榜2024-25'},
      {id:'4',name:'Ligue 1積分榜2024-25'},
      {id:'5',name:'Primeira Liga積分榜2024-25'}
    ]},
    {id:'2',
      title:'蓝球',data:[
      {id:'1',name:'歐洲聯賽冠軍盃賽 2024-25'},
      {id:'2',name:'EPL積分榜2024-25'},
      {id:'3',name:'LaLiga積分榜2024-25'},
      {id:'4',name:'Ligue 1積分榜2024-25'},
      {id:'5',name:'Primeira Liga積分榜2024-25'}
    ]},
    {id:'3',
      title:'訪問AiScore的其他語言版本的網球比分直播',data:[
      {id:'1',name:'Tennis Score'},
      {id:'2',name:'เทนนิสคะแนน'},
      {id:'3',name:'Tenis Skor'},
      {id:'4',name:'網球比分'},
      {id:'5',name:'테니스 점수'}
    ]}
]
const stepData = {
  step1: "AiScore",
  step2: "足球比分直播",
  name: "",
};

  return (
    <LayoutAppContext.Provider
      value={{

        handleHeaderReady,
        handleDownLoadReady,
        appHeight,
        headerHeight,
        contentHeight,
        isDownloadVisible,
        setDownloadVisible,
        isShowFrm, 
        setShowFrm,
        isShowStep,
        setShowStep,
        recalcHeaderHeight
      }}
    >
      <div ref={appElementRef} style={{ height:pxToRem(viewportHeight)}} className="app-layout">
        {isDownloadVisible && (
          <div style={{ height: pxToRem(downLoadHeight) }}  className="app-download">
                <DownloadComp />
          </div>
        )}
        <div className="app-content" style={{ minHeight:pxToRem(appHeight) }}>
            {children}
           {  !isShowFrm &&
             <div className={`app-footer `} ref={handleFooterReady} >
              {
                isShowStep &&
                <StepComp
                className="home_StepComp"
                step1={stepData.step1}
                step2={stepData.step2}
                name={stepData.name}
              />
              }
            
             <CollapseComp data={collapseData}/>
             <FooterComp></FooterComp>
           </div>
           }
        </div>
      </div>
    </LayoutAppContext.Provider>
  );
};

export default LayoutAppContextProvider;
