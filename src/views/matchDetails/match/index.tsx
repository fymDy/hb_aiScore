import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { IFSearchResult } from "@/views/home/interface";
import BtnGroup from "@/components/Common/btnGroup";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import SelectNum from "@/components/Common/selectNum";
import ImageComp from "@/components/imageComp";
import ISpan from "@/components/Common/ISpan";
import CheckboxComp from "@/components/CheckboxComp";
import CircleL from "@/components/Common/CircleL";
import CircleW from "@/components/Common/CircleW";
import Infomation from "../overview/infomation";
import CrossSwords from "./crossSwords";
import CircleD from "@/components/Common/CircleD";


const Match: React.FC = () => {
  const [activeFilterId, setActiveFilterId] = useState("0");
    const [activeNum, setActiveNum] = useState(6);
    const [isShowNum, setShowNum] = useState(false);
      const [checkedList, setCheckedList] = useState<any[]>([]);
    
  const filterData: IFSearchResult[] = useMemo(() => {
     const data = [
       {
         id: "0",
         name: "交锋",
         isActive: activeFilterId === "0",
       },
       {
         id: "1",
         name: "馬都拉聯",
         isActive: activeFilterId === "1",
       },
       {
         id: "2",
         name: "佩斯凱迪瑞",
         isActive: activeFilterId === "2",
       }
     ];
 
     return data;
   }, [activeFilterId]);
  const oddsTypeData = useMemo(() => {
      return [
        {
          label: "主场-中北大学",
          value: "1",
        },
        {
          label: "賽前賠率",
          value: "2",
        }
      ]
    }, []);
    const infoData={
      title:'比赛信息',
      info:[
        {title:'Name',text:'貝爾格萊德白城後備隊vs 莫德柏里噴射機後備隊'},
        {title:'Date',text:'2025/04/25'},
        {title:'时间',text:'09:45:00'},
        {title:'场馆',text:'-'},
      ],
      // desc:['貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊比分直播','(線上視訊直播) 澳大利亚南后备聯賽將在2025/04/25 09:45:00 UTC開始。 在這裡，您可以在 貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊比分直播中找到所有 貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊 之前的結果，按照他們的H2H比賽進行排序。'],
      details:[
        '貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊 H2H',
        '貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊預測',
        '貝爾格萊德白城後備隊比賽賽程',
        '貝爾格萊德白城後備隊比賽賽程',
      ],
      ps:'AiScore足球比分直播提供 iPhone 和 iPad 應用程序，Android 應用程式在 Google Play 上，以及 Windows 手機應用程式。 您可以在不同語言的所有商店中找到我們的身影，名稱為 "AiScore"。 安裝 AiScore應用程序，並在您的行動裝置上關注 貝爾格萊德白城後備隊 vs 莫德柏里噴射機後備隊比分直播！'
    }
 const crossSwordsData = useMemo(() => {
    return {
      countryIcon: "https://img1.aiscore.com/country/907eba32d950bfab68227fd7ea22999b.png!w60",
      country:'西班牙:',
      countryTeamDesc:'西班牙國王盃',
      HT:'HT',
      FT:'FT',
      data:[
          {
                date:'2025年1月5日星期一',
                teamHome: "中北大学",
                teamHomeImg:'https://img0.aiscore.com/football/team/47ba2fe5caa3770cfa2e99dc4b7e72cd.png!w60',
                teamHomeScore: 2,
                teamAway: "重庆大些",
                teamAwayImg:'https://img0.aiscore.com/football/team/fd954d083ee85a6f1a3f2471dc756242.png!w60',
                teamAwayScore: 0,
                type: 'L', //0 L 、1 W 、2 D
          }, {
            date:'2025年1月5日星期一',
            teamHome: "拉素",
            teamHomeImg:'https://img0.aiscore.com/football/team/4a5873c2f4d2aea786dc787a37b4b34c.png!w60',
            teamHomeScore: 2,
            teamAway: "羅馬",
            teamAwayImg:'https://img0.aiscore.com/football/team/fd954d083ee85a6f1a3f2471dc756242.png!w60',
            teamAwayScore: 0,
            type: 'W', //0 L 、1 W 、2 D
      }, {
        date:'2025年1月5日星期一',
        teamHome: "拉素",
        teamHomeImg:'https://img0.aiscore.com/football/team/4a5873c2f4d2aea786dc787a37b4b34c.png!w60',
        teamHomeScore: 2,
        teamAway: "羅馬",
        teamAwayImg:'https://img0.aiscore.com/football/team/fd954d083ee85a6f1a3f2471dc756242.png!w60',
        teamAwayScore: 0,
        type: 'D', //0 L 、1 W 、2 D
  }
      ]
     
    };
  }, []);
  const circleData=[
    {type:'W',name:'X0'},
    {type:'L',name:'X0'}
  ]
  return (
    <div className={styles.Match}>
      <BtnGroup className={styles.btnGroup_wrap} dataList={filterData} onclick={(id: string) => setActiveFilterId(id)} />
       <div className={styles.selectNum_Wrap}>
          <ISpan className={styles.name} name='交鋒'/>
          <SelectNum isShowNum={isShowNum} data={[6,12,18,24]} activeNum={activeNum} 
            onclick={()=>setShowNum(!isShowNum)}
            onclickNum={(i:number)=>{
              setActiveNum(i)
              setShowNum(!isShowNum)
            }}
          />
        </div>
         {/* 复选框 */}
      <CheckboxComp
        className={styles.checkBox_Wrap}
        options={oddsTypeData}
        checkedList={checkedList}
        onChange={setCheckedList}
      />
      <div     className={styles.circle_Wrap}>
        {
          circleData?.map((item:any,i:number)=>(
            <div key={i} className={styles.circle_item}>
                  {item.type==='L'&&<CircleL  name={item.type}  />}
                  {item.type==='D'&&<CircleD  name={item.type}  />}
                  {item.type==='W'&&<CircleW  name={item.type}  />}
                  <ISpan name={item.name}/>
           </div>
          ))
        }
      </div>
      {activeFilterId=='0' && <Infomation data={infoData} isBtnShowMore={false} />}
      {activeFilterId=='1' &&   <CrossSwords classNameItem={styles.crossSwords_item} data={crossSwordsData}/>}
    </div>
  );
};

export default Match;
