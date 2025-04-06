
import React, {  useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DownLoadComp from '@/components/DownloadComp';
import HeaderComp from '@/components/HeaderComp';
import {  useApp } from '@/components/LayoutContext';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { IFTab } from './interface';
import TabsComp from '@/components/TabsComp';
import cs from 'classnames'
import SearchBox from '@/components/SearchComp';
import OptionBallComp from '@/components/OptionBallComp';
import Menu from './acomponents/menu';
import BtnGroup from './acomponents/searchResult/btnGroup';
import SearchResult from './acomponents/searchResult';
const Main: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {pathname} = location;
    // const {deviceType}=useApp()
    //下载
    const [isShowDownLoad,setIsShowDownLoad]=useState<boolean>(true)
    //
    const [clickBtnMenu,setClickBtnMenu]=useState<boolean>(false)
      //
      const [clickBtnOthers,setClickBtnOthers]=useState<boolean>(false)
    //
    const [clickBtnSearch,setClickBtnSearch]=useState<boolean>(false)
    //
    const [clickBtnAllBall,setClickBtnAllBall]=useState<boolean>(false)
  //
  const [activeIconClass,setActiveIconClass]=useState<string>('icon-zuqiu-weixuanzhong')
    //tab切换：选中tab
  const [activeTab,setActiveTab]=useState<string>('')

    //默认ballList
    const [changeBallDatas, setChangeBallDatas] = useState<IFTab[]>([
      {
        id:'football',
        path: RouterPathUtil.MAIN_FOOTBALL,
        name:'足球',
        iconClass:'icon-zuqiu-weixuanzhong ',
        matchNum:23,
        isActive:activeTab=='football' ? true:false,
      }, {
        id:'basketball',
        path: RouterPathUtil.MAIN_BASKETBALL,
        name:'篮球',
        iconClass:'icon-lanqiu-weixuanzhong ',
        matchNum:15,
        isActive:activeTab=='basketball' ? true:false,
      }, {
        id:'tennis',
        path: RouterPathUtil.MAIN_TENNIS,
        name:'网球',
        iconClass:'icon-wangqiu-weixuanzhong',
        matchNum:15,
        isActive:activeTab=='tennis' ? true:false,
      }, {
        id:'volleyball',
        path: RouterPathUtil.MAIN_VOLLEYBALL,
        name:'排球',
        iconClass:'icon-paiqiu-weixuanzhong',
        matchNum:15,
        isActive:activeTab=='volleyball' ? true:false,
      }
    ]);
    //默认ballList
    const [othersBallDatas, setOthersBallDatas] = useState<IFTab[]>([
      {id:'esports',
        path: RouterPathUtil.MAIN_ESPORTS,
        name:'电竞',
        iconClass:'icon-dianjing-weixuanzhong',
        matchNum:13,
        isActive:activeTab=='esports' ? true:false,
      },
      {id:'iceHockey',
       path: RouterPathUtil.MAIN_ICEHOCKEY,
       name:'冰球',
       iconClass:'icon-bingqiu-weixuanzhong',
       matchNum:11,
       isActive:activeTab=='iceHockey'? true:false,
     },{id:'baseball',
      path: RouterPathUtil.MAIN_BASEBALL,
      name:'棒球',
      iconClass:'icon-bangqiu-weixuanzhong',
      matchNum:8,
      isActive:activeTab=='baseball' ? true:false,
    },{id:'cricket',
      path: RouterPathUtil.MAIN_CRICKET,
      name:'板球',
      iconClass:'icon-banqiu-weixuanzhong',
      matchNum:9,
      isActive:activeTab=='cricket' ? true:false,
    },{id:'americalBall',
      path: RouterPathUtil.MAIN_AMERICALBALL,
      name:'美式橄欖球',
      iconClass:'icon-ganlanqiu-weixuanzhong',
      matchNum:6,
      isActive:activeTab=='americalBall' ? true:false,
    },{id:'tableTennis',
      path: RouterPathUtil.MAIN_TABLETENNIS,
      name:'乒乓球',
      iconClass:'icon-pingpangqiu-weixuanzhong',
      matchNum:13,
      isActive:activeTab=='tableTennis' ? true:false,
    },{id:'badminton',
      path: RouterPathUtil.MAIN_BADMINTON,
      name:'羽毛球',
      iconClass:'icon-yumaoqiu-weixuanzhong',
      matchNum:32,
      isActive:activeTab=='badminton' ? true:false,
    },
    {id:'handball',
      path: RouterPathUtil.MAIN_HANDBALL,
      name:'手球',
      iconClass:'icon-shouqiu-weixuanzhong',
      matchNum:53,
      isActive:activeTab=='handball' ? true:false,
    },{id:'waterpolo',
      path: RouterPathUtil.MAIN_WATERPOLO,
      name:'水球',
      iconClass:'icon-shuiqiu-weixuanzhong',
      matchNum:73,
      isActive:activeTab=='waterpolo' ? true:false,
    },{id:'snooker',
      path: RouterPathUtil.MAIN_SNOOKER,
      name:'斯诺克',
      iconClass:'icon-sinuoke-weixuanzhong',
      matchNum:10,
      isActive:activeTab=='snooker' ? true:false,
    }
    ]);

  const tabData:IFTab[]=useMemo(()=>{
    return [
      ...changeBallDatas,
      {
        id:'others',
        path:'/others',
        name:'其他',
        iconClass:'icon-xiala',
        matchNum:0,
        isActive:true,
      }, {
        id:'fav',
        path: RouterPathUtil.MAIN_FAVORITE,
        name:'Fav',
        iconClass:'icon-yishoucang',
        matchNum:0,
        isActive:true,
      },  
    ]
  },[ changeBallDatas])

  const allBallData:IFTab[]=useMemo(()=>{
    return clickBtnAllBall ? [
      ...changeBallDatas,
      ...othersBallDatas
    ]:[...othersBallDatas]
  },[clickBtnAllBall,othersBallDatas])

  useEffect(()=>{
    const tabItem:IFTab= changeBallDatas?.filter(item=>item?.path===pathname)?.[0] 
    setActiveTab(tabItem?.id ?? 'football')
   },[])

  const onClickTab=(item:IFTab)=>{
    setActiveTab(item?.id)
      if(item?.id =='others'){
        setClickBtnOthers(!clickBtnOthers)
      }else{
        setClickBtnOthers(false)
        setClickBtnSearch(false)
        setClickBtnAllBall(false)
        navigate(item.path); 
      }
     
  }
  const onclickLogo=(path:RouterPathUtil)=>{
    if(path===RouterPathUtil.MAIN_FOOTBALL){
      onClickTab(changeBallDatas[0])
    }else if(path===RouterPathUtil.MAIN_MENU){
      setClickBtnMenu(!clickBtnMenu)
      setClickBtnOthers(false)
      setClickBtnSearch(false)
      setClickBtnAllBall(false)
    }else  if(path===RouterPathUtil.MAIN_SERCH){
      setClickBtnSearch(!clickBtnSearch)
      setClickBtnOthers(false)
      setClickBtnAllBall(false)
      setClickBtnMenu(false)
    }
}


const onSelectBall=(id:string)=>{

  if(clickBtnOthers){
    const selectedThird:IFTab=changeBallDatas[3]
    const updOthersBallData= othersBallDatas?.filter((item=>item.id !==id))
    updOthersBallData.push(selectedThird)
    setOthersBallDatas(updOthersBallData)
    //从others获取选中的球
     const objSelectedBall: any= othersBallDatas?.filter((item=>item.id ==id))?.[0]
      //剔除change数组索引为3的
     const newChangeBallDatas = [
      ...changeBallDatas.slice(0, 3), // 复制索引 3 之前的元素
      objSelectedBall,                         // 插入新的对象
      ...changeBallDatas.slice(4),    // 复制索引 4 之后的元素
    ];
    setChangeBallDatas(newChangeBallDatas)
    setClickBtnOthers(false)
      //跳转
      setActiveTab(id)
      navigate(objSelectedBall.path); 
  }else if(clickBtnAllBall){
    const objSelectedBall: IFTab=  allBallData?.filter((item=>item.id ==id))?.[0]
    setActiveIconClass(objSelectedBall.iconClass)
    setClickBtnAllBall(false)
  }


}
  return (
    <div className={styles.main} >
      <header className={styles.header} >
        <DownLoadComp className={cs({[styles.is_notShow_download]:!isShowDownLoad }) } onClose={()=>setIsShowDownLoad(!isShowDownLoad) }/>
        <HeaderComp       onclickLogo={onclickLogo} />
        <TabsComp  className={cs({[styles.is_notShow_Tabs]: clickBtnMenu || clickBtnSearch  }) } activeTab={activeTab}  tabData={tabData} onClick={onClickTab}/>
        {
          clickBtnSearch &&  <SearchBox isActive={clickBtnAllBall} iconClass={activeIconClass} onclick={(id:string)=>{
            if(id==='btnBall'){
              setClickBtnAllBall(!clickBtnAllBall)
            }else if(id==='btnClose'){
              setClickBtnOthers(false)
              setClickBtnAllBall(false)
                setClickBtnSearch(false)
            }
          }} />
        }
      </header>
     
      <div className={cs(styles.others,{[styles.is_show_others]:(clickBtnOthers || clickBtnAllBall ) })}>
        <OptionBallComp className={styles.font_size} arrowRight={false} isActive={clickBtnAllBall}  iconClass={activeIconClass} dataList={allBallData} onclick={onSelectBall} />
       </div>
      
      <div className={cs(styles.search_result,{[styles.is_show_search_result]:clickBtnSearch})}>
            <SearchResult/>
      </div>
      <div className={cs(styles.menu_option,{[styles.is_show_menu_option]:clickBtnMenu})}>
          <Menu onclick={(id:string)=>{ 
            if(id=='fav'){
              setActiveTab('fav')
            }
            setClickBtnMenu(false) 
           } }/>
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
