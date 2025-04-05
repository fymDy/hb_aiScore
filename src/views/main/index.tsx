
import React, {  useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import DownLoadComp from '@/components/DownloadComp';
import HeaderComp from '@/components/HeaderComp';
import {  useApp } from '@/components/LayoutContext';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { IFTab } from './interface';
import TabsComp from '@/components/TabsComp';
import cs from 'classnames'
const Main: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {pathname} = location;
    // const {deviceType}=useApp()
    //下载
    const [isShowDownLoad,setIsShowDownLoad]=useState<boolean>(true)
    //header组件是否点击菜单栏:显示menu页面
    const defaultTab=pathname?.startsWith('/main/menu/')? true:false
    const [clickBtnMenu,setClickBtnMenu]=useState<boolean>(defaultTab)
    //tab切换：选中tab
  
  const [activeTab,setActiveTab]=useState<string>('')
  const changTabs= [
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
  ]

 useEffect(()=>{
  const tabItem:IFTab= changTabs?.filter(item=>item?.path===pathname)?.[0] 
  setActiveTab(tabItem?.id ?? 'football')
 },[])
  const tabData:IFTab[]=useMemo(()=>{
 
    return [
      ...changTabs,
      {
        id:'others',
        path:RouterPathUtil.MAIN_OTHERS,
        name:'其他',
        iconClass:'icon-xiala',
        matchNum:0,
        isActive:activeTab=='others' ? true:false,
      }, {
        id:'fav',
        path: RouterPathUtil.MAIN_FAVORITE,
        name:'Fav',
        iconClass:'icon-yishoucang',
        matchNum:0,
        isActive:activeTab=='fav' ? true:false,
      },  
    ]
  },[activeTab])

  const onClickTab=(item:IFTab)=>{
      setActiveTab(item?.id)
      navigate(item.path); 
  }
  const onclickLogo=(path:RouterPathUtil)=>{
    if(path===RouterPathUtil.MAIN_FOOTBALL){
      onClickTab(changTabs[0])
    }else if(path===RouterPathUtil.MAIN_MENU){
      if(!clickBtnMenu){//默认为false 不展示menu,点击后为true，展示，所以true的时候点击则关闭为false
        navigate(`${path}/0`,{state:{type:'0'},replace:false}); //replace如果为 true，则单击链接将替换历史堆栈中的当前入口，而不是添加新入口,所以这里必须是默认false
      }else{
        navigate(-1)
      }
      setClickBtnMenu(!clickBtnMenu)
    }else  if(path===RouterPathUtil.MAIN_SERCH){
      navigate(`${path}/test`); 
    }
}
  return (
    <div className={styles.main} >
      <header className={styles.header} >
        <DownLoadComp className={cs({[styles.is_show_down]:!isShowDownLoad }) } onClose={()=>setIsShowDownLoad(!isShowDownLoad) }/>
        <HeaderComp       onclickLogo={onclickLogo} />
        <TabsComp  className={cs({[styles.is_show_menu]:clickBtnMenu }) }  tabData={tabData} onClick={onClickTab}/>
      </header>
      <Outlet />
    </div>
  );
};

export default Main;
