import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { IFSearchResult } from "../interface";
import PageFilter from "../acomponents/pageFilter";
import MatchList from "../acomponents/matchList";
import { RouterPathUtil } from "@/router/routerPathUtil";
import { useHomeContext } from "@/provides/layoutHomeProvider";

const Football: React.FC = () => {
  const { activeFilterId,onClickJumpPage } = useHomeContext();



  const [allData, setAllData] = useState([
    {
      id: "ind",
      isCollect: true, //true 是否搜藏
      country: "印度 :",
      countryTeamDesc: "印德女聯",
      countryIcon:
        "https://img1.aiscore.com/country/7d31e0da1ab99fe8b08a22118e2f402b.png!w30",
      iconFontType: 1, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      data: [
        {
          id: "0",
          isCollect: false, //true
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
          isCollect: false, //true
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
          id: "2",
          isCollect: false, //true
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
      ],
    },
    {
      id: "guoji",
      isCollect: false,
      country: "國際 :",
      countryTeamDesc: "歐洲杯手球賽",
      countryIcon:
        "https://img1.aiscore.com/country/3b3038cc69ba1e3700a196f030bc0099.png!w60",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      data: [
        {
          id: "0",
          isCollect: false, //true
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
      ],
    },
    {
      id: "yazhou",
      isCollect: false,
      country: "亞洲 :",
      countryTeamDesc: "U17亞洲杯",
      countryIcon:
        "https://img1.aiscore.com/country/742b8abe5776a6d942a92ce7dc7d84a0.png!w30",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      data: [
        {
          id: "0",
          isCollect: false, //true
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
          id: "1",
          isCollect: false, //true
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
      ],
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
      data: [
        {
          id: "0",
          isCollect: false, //true
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
      ],
    },
    {
      id: "ouz",
      isCollect: true,
      country: "欧洲 :",
      countryTeamDesc: "U17亞洲杯",
      countryIcon:
        "https://img1.aiscore.com/country/742b8abe5776a6d942a92ce7dc7d84a0.png!w30",
      iconFontType: 0, //1:'icon-renshu' 0:代表取接口参数img
      userNum: 4485,
      data: [
        {
          id: "0",
          isCollect: false, //true
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
        {
          id: "1",
          isCollect: false, //true
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
        {
          id: "2",
          isCollect: false, //true
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
      ],
    },
  ]);

  const matchList = useMemo(() => {
    if (activeFilterId == "0") {
      return allData;
    } else {
      return allData?.filter((item: any) => item?.id == activeFilterId);
    }
  }, [activeFilterId, allData]);

  const onclcikCollect = (id: string) => {
    const data: any = allData?.map((item: any) => {
      if (item?.id === id) {
        return { ...item, isCollect: !item.isCollect };
      }
      return item;
    });
    setAllData(data);
  };
  const onclcikCollectItem = (id: string, matchId: string) => {
    const data: any = allData?.map((item: any) => {
      const updatedItemData = item?.data?.map((itenMatch: any) => {
        if (item?.id === id && itenMatch?.id == matchId) {
          return { ...itenMatch, isCollect: !itenMatch.isCollect };
        }
        return itenMatch;
      });
      return { ...item, data: updatedItemData };
    });
    setAllData(data);
  };

  return (
    <article className={styles.football} >
      <MatchList
        dataList={matchList}
        onclcikCollect={onclcikCollect}
        onclcikCollectItem={onclcikCollectItem}
        onClickJumpPage={onClickJumpPage}
      />
    </article>
  );
};

export default Football;
