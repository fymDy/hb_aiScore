import React, { forwardRef, useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { RouterPathUtil } from "@/router/routerPathUtil";
import { IFSearchResult, IFTab } from "./interface";
import cs from "classnames";
import Menu from "./_components/menu";
import SearchResult from "./_components/searchResult";
import Header from "./_components/header";
import Tabs from "@/views/home/_components/tabs";
import SearchBox from "@/views/home/_components/searchBox";
import BallList from "@/views/home/_components/ballList";
import { LayoytHomeContextProvider } from "@/provides/layoutHomeProvider";
import PageFilter from "./_components/pageFilter";
import { useApp } from "@/hooks/useApp";
import { pxToRem } from "@/utils/common";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import LayoutOutlet from "@/layout/outlet";
import Football from "./football";
const Home = () => {

  const { pathname,lastPath } = useLocationPlus();
  const { headerHeight, contentHeight, handleHeaderReady,recalcHeaderHeight } = useApp();
  const {setShowFrm,setShowStep}=useApp()
  const [iptValue, setIptValue] = useState("");
  //
  const [clickBtnMenu, setClickBtnMenu] = useState<boolean>(false);
  //
  const [clickBtnOthers, setClickBtnOthers] = useState<boolean>(false);
  //
  const [clickBtnSearch, setClickBtnSearch] = useState<boolean>(false);
  //
  const [clickBtnAllBall, setClickBtnAllBall] = useState<boolean>(false);
  //
  const [activeIconClass, setActiveIconClass] = useState<string>(EnumIconFontType.icon_zuqiu_weixuanzhong);
  //tab切换：选中tab
  const [activeTabId, setActiveTabId] = useState<string>("");
 
  //默认ballList
  const [changeBallDatas, setChangeBallDatas] = useState<IFTab[]>([
    {
      id: "football",
      path: RouterPathUtil.HOME_FOOTBALL,
      name: "足球",
      iconClass: EnumIconFontType.icon_zuqiu_weixuanzhong,
      matchNum: 23,
      isActive: activeTabId == "football" ? true : false,
    },
    {
      id: "basketball",
      path: RouterPathUtil.HOME_BASKETBALL,
      name: "篮球",
      iconClass: "icon-lanqiu-weixuanzhong ",
      matchNum: 15,
      isActive: activeTabId == "basketball" ? true : false,
    },
    {
      id: "tennis",
      path: RouterPathUtil.HOME_TENNIS,
      name: "网球",
      iconClass: "icon-wangqiu-weixuanzhong",
      matchNum: 15,
      isActive: activeTabId == "tennis" ? true : false,
    },
    {
      id: "volleyball",
      path: RouterPathUtil.HOME_VOLLEYBALL,
      name: "排球",
      iconClass: "icon-paiqiu-weixuanzhong",
      matchNum: 15,
      isActive: activeTabId == "volleyball" ? true : false,
    },
  ]);
  //默认ballList
  const [othersBallDatas, setOthersBallDatas] = useState<IFTab[]>([
    
    {
      id: "esports",
      path: RouterPathUtil.HOME_ESPORTS,
      name: "电竞",
      iconClass: "icon-dianjing-weixuanzhong",
      matchNum: 13,
      isActive: activeTabId == "esports" ? true : false,
    },
    {
      id: "iceHockey",
      path: RouterPathUtil.HOME_ICEHOCKEY,
      name: "冰球",
      iconClass: "icon-bingqiu-weixuanzhong",
      matchNum: 11,
      isActive: activeTabId == "iceHockey" ? true : false,
    },
    {
      id: "baseball",
      path: RouterPathUtil.HOME_BASEBALL,
      name: "棒球",
      iconClass: "icon-bangqiu-weixuanzhong",
      matchNum: 8,
      isActive: activeTabId == "baseball" ? true : false,
    },
    {
      id: "cricket",
      path: RouterPathUtil.HOME_CRICKET,
      name: "板球",
      iconClass: "icon-banqiu-weixuanzhong",
      matchNum: 9,
      isActive: activeTabId == "cricket" ? true : false,
    },
    {
      id: "americalBall",
      path: RouterPathUtil.HOME_AMERICALBALL,
      name: "美式橄欖球",
      iconClass: "icon-ganlanqiu-weixuanzhong",
      matchNum: 6,
      isActive: activeTabId == "americalBall" ? true : false,
    },
    {
      id: "tableTennis",
      path: RouterPathUtil.HOME_TABLETENNIS,
      name: "乒乓球",
      iconClass: "icon-pingpangqiu-weixuanzhong",
      matchNum: 13,
      isActive: activeTabId == "tableTennis" ? true : false,
    },
    {
      id: "badminton",
      path: RouterPathUtil.HOME_BADMINTON,
      name: "羽毛球",
      iconClass: "icon-yumaoqiu-weixuanzhong",
      matchNum: 32,
      isActive: activeTabId == "badminton" ? true : false,
    },
    {
      id: "handball",
      path: RouterPathUtil.HOME_HANDBALL,
      name: "手球",
      iconClass: "icon-shouqiu-weixuanzhong",
      matchNum: 53,
      isActive: activeTabId == "handball" ? true : false,
    },
    {
      id: "waterpolo",
      path: RouterPathUtil.HOME_WATERPOLO,
      name: "水球",
      iconClass: "icon-shuiqiu-weixuanzhong",
      matchNum: 73,
      isActive: activeTabId == "waterpolo" ? true : false,
    },
    {
      id: "snooker",
      path: RouterPathUtil.HOME_SNOOKER,
      name: "斯诺克",
      iconClass: "icon-sinuoke-weixuanzhong",
      matchNum: 10,
      isActive: activeTabId == "snooker" ? true : false,
    },
  ]);

  const tabData = useMemo<IFTab[] | any>(() => {
    return [
      ...changeBallDatas,
      {
        id: "others",
        path: "/others",
        name: "其他",
        iconClass: clickBtnOthers ? "icon-shangla" : "icon-xiala",
        matchNum: 0,
        isActive: true,
      },
      {
        id: "fav",
        path: RouterPathUtil.HOME_FAVORITE,
        name: "Fav",
        iconClass: "icon-yishoucang",
        matchNum: 0,
        isActive: true,
      },
    ];
  }, [clickBtnOthers, changeBallDatas]);

  const allBallData: IFTab[] = useMemo(() => {
    if(clickBtnOthers){
      return [...othersBallDatas]
    }else {//if(clickBtnAllBall)
      return [...changeBallDatas, ...othersBallDatas]
    }
  }, [clickBtnAllBall,clickBtnOthers, othersBallDatas]);

  const [activeBtnFilter, setActiveBtnFilter] = useState(false);
  const [activeFilterId, setActiveFilterId] = useState("ing");
  const filterData: IFSearchResult[] = useMemo(() => {
   
    const data = clickBtnSearch?[
      {
        id:'all',
        name:'全部',
        iconClass:'',
        isActive:activeFilterId==='all',
      }, {
        id:'team',
        name:'球隊',
        iconClass:'icon-qiudui',
        isActive:activeFilterId==='team',
      },   {
        id:'match',
        name:'赛事',
        iconClass:'icon-saishi',
        isActive:activeFilterId==='match',
      },   {
        id:'member',
        name:'球員',
        iconClass:'icon-qiuyuan',
        isActive:activeFilterId==='member',
      },  
    ]: [
      {
        id: "all",
        name: "全部",
        isActive: activeFilterId === "all",
      },
      {
        id: "ing",
        name: "进行中",
        iconClass: "icon-jinhangzhong",
        isActive: activeFilterId === "ing",
      },
      {
        id: "2",
        name: "已结束",
        isActive: activeFilterId === "2",
      },
      {
        id: "3",
        name: "赛程",
        isActive: activeFilterId === "3",
      },
    ];
  
    return data;
  }, [clickBtnSearch, activeFilterId]);



  useEffect(() => {
    const tabItem: IFTab = allBallData?.filter(
      (item) => item?.path === (pathname==RouterPathUtil.HOME ? RouterPathUtil.HOME_FOOTBALL : pathname) 
    )?.[0];
    setActiveTabId(tabItem?.id);
   const filterChangeDataId= changeBallDatas.map((item:any)=>item.id)
    if(!filterChangeDataId.includes(tabItem?.id)) {
      onSelectBall(tabItem?.id )
    };
  }, []);

  useEffect(() => {
      if(clickBtnMenu||clickBtnOthers||clickBtnSearch){
          setShowFrm(true)
      }else{
        setShowFrm(false)
      }
  }, [clickBtnMenu,clickBtnOthers,clickBtnSearch]);


  const onClickTab = (item: IFTab) => {
    
    if (item?.id == "others") {
      setClickBtnOthers(!clickBtnOthers);
      recalcHeaderHeight(); // ✅ 手动触发测量
    } else {
      setActiveTabId(item?.id);
      setClickBtnOthers(false);
      setClickBtnSearch(false);
      setClickBtnAllBall(false);
      recalcHeaderHeight(); // ✅ 手动触发测量
      navigatePlus(item?.path);
    }
   
  
  };
  const onclickLogo = (path: RouterPathUtil | string) => {
    if (path === RouterPathUtil.HOME_FOOTBALL) {
      onClickTab(changeBallDatas[0]);
    } 
    else if (path === 'home_menu') {
      setClickBtnMenu(!clickBtnMenu);
      setClickBtnOthers(false);
      setClickBtnSearch(false);
      setClickBtnAllBall(false);
      recalcHeaderHeight(); // ✅ 手动触发测量
    } else if (path === 'home_search') {
      const iStatus=!clickBtnSearch
      setClickBtnSearch(iStatus);
      if(iStatus){
        setActiveFilterId('all')
      }else{
        setActiveFilterId('ing')
      }
      setClickBtnOthers(false);
      setClickBtnAllBall(false);
      setClickBtnMenu(false);
      recalcHeaderHeight(); // ✅ 手动触发测量
    }
  };

  const onSelectBall = (id: string) => {
    if(clickBtnAllBall) {
      const objSelectedBall: IFTab = allBallData?.filter(
        (item) => item.id == id
      )?.[0];
      recalcHeaderHeight(); // ✅ 手动触发测量
      setActiveIconClass(objSelectedBall.iconClass);
      setClickBtnAllBall(false);
    }else{
      const selectedThird: IFTab = changeBallDatas[3];
      const updOthersBallData = othersBallDatas?.filter(
        (item) => item.id !== id
      );
      updOthersBallData.push(selectedThird);
      setOthersBallDatas(updOthersBallData);
      //从others获取选中的球
      const objSelectedBall: any = othersBallDatas?.filter(
        (item) => item.id == id
      )?.[0];
      //剔除change数组索引为3的
      const newChangeBallDatas = [
        ...changeBallDatas.slice(0, 3), // 复制索引 3 之前的元素
        objSelectedBall, // 插入新的对象
        ...changeBallDatas.slice(4), // 复制索引 4 之后的元素
      ];
      setChangeBallDatas(newChangeBallDatas);
      setClickBtnOthers(false);
      if(clickBtnOthers){ //点击其他的列表
        //跳转
        setActiveTabId(id);
        recalcHeaderHeight(); // ✅ 手动触发测量
       navigatePlus(objSelectedBall.path);
    }
  }};
  const handleClickItem = (id:string,item: any) => {
    // pathname==RouterPathUtil.HOME ? RouterPathUtil.HOME_FOOTBALL : pathname
  navigatePlus(`${RouterPathUtil.MATCHDETAILS}/${pathname==RouterPathUtil.HOME  ?'football':lastPath}#overview`, {
      state: {
        sportId:activeTabId,
        leagueId:id, //联赛id
        matchId: item?.id,
      },
    });
    setShowStep(false)
  };
  return (
    <LayoytHomeContextProvider
      activeTabId={activeTabId}
      activeFilterId={activeFilterId}
      onClickJumpPage={handleClickItem}
    >
      <div className={styles.Home} >
        <header ref={handleHeaderReady}  
        style={headerHeight > 0 ? { height: pxToRem(headerHeight) } : undefined}
          className={styles.header_wrap}>
          <Header onclickLogo={onclickLogo} />
          <Tabs
            className={cs({
              [styles.is_notShow_Tabs]: clickBtnMenu || clickBtnSearch,
            })}
            activeTabId={activeTabId}
            tabData={tabData}
            onClick={onClickTab}
          />
          <div
            className={cs(styles.search_box_wrap, {
              [styles.is_notShow_search_box]: !clickBtnSearch,
            })}
          >
            <SearchBox
              isActive={clickBtnAllBall}
              iptValue={iptValue}
              iconClass={activeIconClass}
              onClear={() => {
                setIptValue("");
                setClickBtnAllBall(false);
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const v = event.target.value;
                setIptValue(v);
                setClickBtnAllBall(false);
                //todo 进行接口请求，获取查询结果。。。
              }}
              onclick={(id: string) => {
                if (id === "btnBall") {
                  setClickBtnAllBall(!clickBtnAllBall);
                } else if (id === "btnClose") {
                  setActiveFilterId('ing')
                  setClickBtnOthers(false);
                  setClickBtnAllBall(false);
                  setClickBtnSearch(false);
                  recalcHeaderHeight(); // ✅ 手动触发测量
                }
              }}
            />
          </div>
          <div
            className={cs(styles.filter_wrap, {
              [styles.is_notShow_Filters]:
                clickBtnOthers || clickBtnMenu,
            })}
          >
            <PageFilter
              isFilter={clickBtnSearch ?false:true}
              filterData={filterData}
              onclick={(id: string) => setActiveFilterId(id)}
              onclickFilter={() => setActiveBtnFilter(!activeBtnFilter)}
            />
          </div>
        </header>

        <div
          style={{ height: contentHeight }}
          className={cs(styles.others_wrap, {
            [styles.is_show_others]: clickBtnOthers || clickBtnAllBall,
          })}
        >
          <BallList
            className={styles.font_size}
            isActive={clickBtnAllBall}
            iconClass={activeIconClass}
            dataList={allBallData}
            onclick={onSelectBall}
          />
        </div>

        <div
          style={{ height: contentHeight }}
          className={cs(styles.search_result_wrap, {
            [styles.is_show_search_result]: clickBtnSearch,
          })}
        >
          <SearchResult activeFilterId={activeFilterId} />
        </div>
        <div
          style={{ height: contentHeight }}
          className={cs(styles.menu_option_wrap, {
            [styles.is_show_menu_option]: clickBtnMenu,
          })}
        >
          <Menu
            onclick={(id: string) => {
              if (id == "fav") {
                setActiveTabId("fav");
              }else if (id == "close"){
                //todo
                recalcHeaderHeight(); // ✅ 手动触发测量
              }
              setClickBtnMenu(false);
            }}
          />
        </div>
        <div
          style={{ minHeight: contentHeight }}
          className={cs('child_page',{
            [styles.is_notShow_content]:
              clickBtnOthers || clickBtnMenu || clickBtnSearch,
          })}
        >
          {/* <Football/> */}
          <LayoutOutlet />
        </div>
      </div>
    </LayoytHomeContextProvider>
  );
};

export default forwardRef(Home)
