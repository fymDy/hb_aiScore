import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { IFSearchResult } from "../interface";
import PageFilter from "../acomponents/pageFilter";
import Match from "../acomponents/match";

const Football: React.FC = () => {
  const [activeBtnFilter, setActiveBtnFilter] = useState(false);
  const [activeTabId, setActiveTabId] = useState("ing");
  const [collectId, setCollectId] = useState("");
  const filterData: IFSearchResult[] = useMemo(() => {
    const data = [
      {
        id: "0",
        name: "全部",
        isActive: activeTabId === "0",
      },
      {
        id: "ing",
        name: "进行中",
        iconClass: "icon-jinhangzhong",
        isActive: activeTabId === "ing",
      },
      {
        id: "2",
        name: "已结束",
        isActive: activeTabId === "2",
      },
      {
        id: "3",
        name: "赛程",
        isActive: activeTabId === "3",
      },
    ];

    return data;
  }, [activeTabId]);

  const [allData,setAllData]=useState([
    {
      id: "0",
      isCollect: true, //true 是否搜藏
      country: "印度 :",
      countryTeamDesc: "印德女聯",
      countryIcon:
        "https://img1.aiscore.com/country/7d31e0da1ab99fe8b08a22118e2f402b.png!w30",
      iconFontType: 1, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      isCollectTeam: false, //true
      startDate: "13:30",
      twinkle: "16",
      teamAIcon:
        "https://img0.aiscore.com/football/team/def54236ff4898d0e3b66bf560fa3b81.png!w30",
      teamAName: "皇家遊騎兵女足",
      teamBIcon:
        "https://img0.aiscore.com/football/team/d9e25acf23913bb2f3c4b5566bcce445.png!w30",
      teamBName: "錫格納圖雷女足",
      teamAScore: 1,
      teamBScore: 0,
      liveBrand: "icon-donghuazhibo",
    },
    {
      id: "1",
      isCollect: false,
      country: "國際 :",
      countryTeamDesc: "歐洲杯手球賽",
      countryIcon:
        "https://img1.aiscore.com/country/3b3038cc69ba1e3700a196f030bc0099.png!w60",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      isCollectTeam: false, //true
      startDate: "13:30",
      twinkle: "21+",
      teamAIcon:
        "https://img0.aiscore.com/football/team/def54236ff4898d0e3b66bf560fa3b81.png!w30",
      teamAName: "皇家遊騎兵女足",
      teamBIcon:
        "https://img0.aiscore.com/football/team/d9e25acf23913bb2f3c4b5566bcce445.png!w30",
      teamBName: "錫格納圖雷女足",
      teamAScore: 3,
      teamBScore: 2,
      liveBrand: "icon-donghuazhibo",
    },
    {
      id: "2",
      isCollect: false,
      country: "亞洲 :",
      countryTeamDesc: "U17亞洲杯",
      countryIcon:
        "https://img1.aiscore.com/country/742b8abe5776a6d942a92ce7dc7d84a0.png!w30",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      isCollectTeam: false, //true
      startDate: "13:30",
      twinkle: "21+",
      teamAIcon:
        "https://img0.aiscore.com/football/team/488df3a9b3fc86ac6c9e8f6d40733067.png!w30",
      teamAName: "越南U17",
      teamBIcon:
        "https://img0.aiscore.com/football/team/940bb92f83d40985137748d0d3aeb213.png!w30",
      teamBName: "也门U17",
      teamAScore: 1,
      teamBScore: 2,
      liveBrand: "icon-donghuazhibo",
    },
    {
      id: "ing",
      isCollect: true,
      country: "欧洲 :",
      countryTeamDesc: "U17亞洲杯",
      countryIcon:
        "https://img1.aiscore.com/country/742b8abe5776a6d942a92ce7dc7d84a0.png!w30",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      isCollectTeam: false, //true
      startDate: "13:30",
      twinkle: "21+",
      teamAIcon:
        "https://img0.aiscore.com/football/team/488df3a9b3fc86ac6c9e8f6d40733067.png!w30",
      teamAName: "越南U18",
      teamBIcon:
        "https://img0.aiscore.com/football/team/940bb92f83d40985137748d0d3aeb213.png!w30",
      teamBName: "也门U18",
      teamAScore: 1,
      teamBScore: 2,
      liveBrand: "icon-donghuazhibo",
    },
    ,
    {
      id: "3",
      isCollect: false,
      country: "國際3:",
      countryTeamDesc: "歐洲杯手球賽3",
      countryIcon:
        "https://img1.aiscore.com/country/3b3038cc69ba1e3700a196f030bc0099.png!w60",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      isCollectTeam: false, //true
      startDate: "13:30",
      twinkle: "21+",
      teamAIcon:
        "https://img0.aiscore.com/football/team/def54236ff4898d0e3b66bf560fa3b81.png!w30",
      teamAName: "皇家遊騎兵女足",
      teamBIcon:
        "https://img0.aiscore.com/football/team/d9e25acf23913bb2f3c4b5566bcce445.png!w30",
      teamBName: "錫格納圖雷女足",
      teamAScore: 3,
      teamBScore: 2,
      liveBrand: "icon-donghuazhibo",
    },
    {
      id: "4",
      isCollect: false,
      country: "亞洲4 :",
      countryTeamDesc: "U17亞洲杯4",
      countryIcon:
        "https://img1.aiscore.com/country/742b8abe5776a6d942a92ce7dc7d84a0.png!w30",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      isCollectTeam: false, //true
      startDate: "13:30",
      twinkle: "21+",
      teamAIcon:
        "https://img0.aiscore.com/football/team/488df3a9b3fc86ac6c9e8f6d40733067.png!w30",
      teamAName: "越南U174",
      teamBIcon:
        "https://img0.aiscore.com/football/team/940bb92f83d40985137748d0d3aeb213.png!w30",
      teamBName: "也门U17",
      teamAScore: 1,
      teamBScore: 2,
      liveBrand: "icon-donghuazhibo",
    },
  ])

  const matchList = useMemo(() => {
    if (activeTabId == "0") {
      return allData;
    } else {
      return allData?.filter((item: any) => item?.id == activeTabId);
    }
  }, [activeTabId,allData]);


  function toggelCollect(id:string,type:string){
    const data:any= allData?.map((item:any)=>{
      if( item?.id===id && type=='title'){
        return  {...item,isCollect:!item.isCollect}
      }else if( item?.id===id && type=='content'){
        return  {...item,isCollectTeam:!item.isCollectTeam}
      }
      return item
    })
    setAllData(data)
  }

  const onclcikCollect = (id: string) => {
    toggelCollect(id,'title')
  };
  const onclcikCollectTeam = (id: string) => {
    toggelCollect(id,'content')
  };
  return (
    <article className={styles.football}>
      <PageFilter
        filterData={filterData}
        onclick={(id: string) => setActiveTabId(id)}
        onclickFilter={() => setActiveBtnFilter(!activeBtnFilter)}
      />
      <Match dataList={matchList} onclcikCollect={onclcikCollect} onclcikCollectTeam={onclcikCollectTeam} />
    </article>
  );
};

export default Football;
