import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import MatchTimelineChart from "@/components/Common/MatchTimelineChart";

import cs from "classnames";


import imgFlag from "@/assets/images/flag.png";
import { useNavigate } from "react-router-dom";
import ChartLineComp from "@/components/ChartLineComp";
import ChartCircleProcess from "@/components/Common/chartCircleProcess";
import ChartLineTextComp from "@/components/ChartLineTextComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import MatchPbp from "./matchPbp";
import EventsAll from "./eventsAll";
import PlayerRating from "./playerRating";
import VenueReferee from "./venueReferee";
import CrossSwords from "./crossSwords";
import OddsBox from "./oddsBox";
import Infomation from "./infomation";
import BallType from "./ballType";
const OverView: React.FC = () => {

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
      { minute: 10, type: EnumIconFontType.icongoal},
      { minute: 35, type: EnumIconFontType.icontwoyellow_red },
      { minute: 60, type: EnumIconFontType.iconCorner },
      { minute: 90, type: EnumIconFontType.icontwoyellow_red  },
    ],
    away: [
      { minute: 5, type: EnumIconFontType.iconCorner },
      { minute: 30, type: EnumIconFontType.iconCorner  },
      { minute: 31, type: EnumIconFontType.iconCorner },
      { minute: 80, type: EnumIconFontType.iconown_goal},
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

  const crossSwordsData = useMemo(() => {
    return {
      title: "交锋",
      teamName: "拉素",
      last: 6,
      win: 3,
      tie: 1,
      lose: 2,
      averageScore:0.5,
      concedScore:0.5,
      data:[
          {
                date:'2025/01/05',
                matchName:'意大利甲级聯賽',
                teamHome: "拉素",
                teamHomeImg:'https://img0.aiscore.com/football/team/4a5873c2f4d2aea786dc787a37b4b34c.png!w60',
                teamHomeScore: 2,
                teamAway: "羅馬",
                teamAwayImg:'https://img0.aiscore.com/football/team/5a2ff46efa33abc6b2908eb6279dfbf8.png!w60',
                teamAwayScore: 0,
                type: '0', //0 L 、1 W 、2 D
          }, {
            date:'2025/04/06',
            matchName:'意大利甲级聯賽',
            teamHome: "拉素",
            teamHomeImg:'https://img0.aiscore.com/football/team/4a5873c2f4d2aea786dc787a37b4b34c.png!w60',
            teamHomeScore: 2,
            teamAway: "羅馬",
            teamAwayImg:'https://img0.aiscore.com/football/team/5a2ff46efa33abc6b2908eb6279dfbf8.png!w60',
            teamAwayScore: 0,
            type: '1', //0 L 、1 W 、2 D
      }, {
        date:'2025/04/06',
        matchName:'意大利甲级聯賽',
        teamHome: "拉素",
        teamHomeImg:'https://img0.aiscore.com/football/team/4a5873c2f4d2aea786dc787a37b4b34c.png!w60',
        teamHomeScore: 2,
        teamAway: "羅馬",
        teamAwayImg:'https://img0.aiscore.com/football/team/5a2ff46efa33abc6b2908eb6279dfbf8.png!w60',
        teamAwayScore: 0,
        type: '2', //0 L 、1 W 、2 D
  }
      ]
     
    };
  }, []);
  
  const oddsBoxData = useMemo(() => {
    return {
      title:'赔率',
      data:[
        {
          img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: '+309',
          X: "+240",
          two: "-125", 
        },{
          img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: '+309',
          X: "+240",
          two: "-125", 
        },{
          img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: '+309',
          X: "+240",
          two: "-125", 
        },{
          img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: '+309',
          X: "+240",
          two: "-125", 
        }
      ],
      hint:'Gamble Responsibly. Gambling Therapy. 18+',
      odds:[
        {
          name:'初始賠率',
          value:'1:3'
        },
        {
          name:'賽前賠率',
          value:'1:2'
        },
        {
          name:'賽中賠率',
          value:'3:1'
        }
      ],

    }
  }, []);

  const infoData={
    title:'信息',
    info:[
      {title:'Name',text:'貝爾格萊德白城後備隊vs 莫德柏里噴射機後備隊'},
      {title:'Date',text:'2025/04/25'},
      {title:'时间',text:'09:45:00'},
      {title:'场馆',text:'-'},
    ],
    desc:['貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊比分直播','(線上視訊直播) 澳大利亚南后备聯賽將在2025/04/25 09:45:00 UTC開始。 在這裡，您可以在 貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊比分直播中找到所有 貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊 之前的結果，按照他們的H2H比賽進行排序。'],
    details:[
      '貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊 H2H',
      '貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊預測',
      '貝爾格萊德白城後備隊比賽賽程',
      '貝爾格萊德白城後備隊比賽賽程',
    ],
    ps:'AiScore足球比分直播提供 iPhone 和 iPad 應用程序，Android 應用程式在 Google Play 上，以及 Windows 手機應用程式。 您可以在不同語言的所有商店中找到我們的身影，名稱為 "AiScore"。 安裝 AiScore應用程序，並在您的行動裝置上關注 貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊比分直播！'
  }
  const ballTypeData= [
    {id:'0',name:'中國足球超級聯賽 賽程'},
    {id:'1',name:'雲南玉昆 賽程'},
     {id:'2',name:'海海港 賽程'},
     {id:'3',name:'雲南玉昆 vs 上海海港 交鋒'},
  ]
  const EventsAllData=[
      {icon:EnumIconFontType.icongoal,name:'進球'},
      {icon:EnumIconFontType.iconPenalty,name:'點球'},
      {icon:EnumIconFontType.iconPenaltySaved,name:'射失點球'},
      {icon:EnumIconFontType.iconown_goal,name:'烏龍球'},
      {icon:EnumIconFontType.iconCorner,name:'角球'},
      {icon:EnumIconFontType.icontwoyellow_red,name:'兩黃變一紅'},
      {icon:EnumIconFontType.iconsubstitution,name:'換人'},
      {icon:EnumIconFontType.iconInjuryreplace,name:'因傷換人'}

  ]

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
        <PlayerRating/>
        <MatchPbp/>
        <VenueReferee isReferee={true} title={'裁判'} imgSrc={''} name={'羅馬奧林匹克球場'} scoreHome={'4.58'} scoreWay={'0.48'}/>
        <VenueReferee title={'场馆'} imgSrc={''} name={'羅馬奧林匹克球場'} scoreHome={'4.58'} scoreWay={'0.48'} crossSwordsData={crossSwordsData}/>
         {/* <OddsBox data={oddsBoxData}>
                <Infomation data={infoData} />
          </OddsBox>        */}
        <BallType data={ballTypeData}/>
   
        <EventsAll data={EventsAllData}/>
      </div>
  );
};

export default OverView;
