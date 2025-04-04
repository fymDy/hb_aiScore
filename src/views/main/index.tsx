
import React, {  useMemo, useState } from 'react';
import styles from './index.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import DownLoad from '@/components/Download';
import Header from '@/components/Header';
import {  useApp } from '@/components/LayoutContext';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { IFTab } from './interface';
import Tabs from '@/components/Tabs';

const Main: React.FC = () => {
  const navigate = useNavigate();
    // const {deviceType}=useApp()

  const [activeId,setActiveId]=useState<string>('footerball')
  const changTabs= [
    {
      id:'footerball',
      path: RouterPathUtil.MAIN_FOOTBALL,
      name:'足球',
      iconClass:'icon-zuqiu-weixuanzhong ',
      matchNum:23,
      isActive:activeId=='footerball' ? true:false,
    }, {
      id:'basketball',
      path: RouterPathUtil.MAIN_BASKETBALL,
      name:'篮球',
      iconClass:'icon-lanqiu-weixuanzhong ',
      matchNum:15,
      isActive:activeId=='basketball' ? true:false,
    }, {
      id:'tennis',
      path: RouterPathUtil.MAIN_TENNIS,
      name:'网球',
      iconClass:'icon-wangqiu-weixuanzhong',
      matchNum:15,
      isActive:activeId=='tennis' ? true:false,
    }, {
      id:'volleyball',
      path: RouterPathUtil.MAIN_VOLLEYBALL,
      name:'排球',
      iconClass:'icon-paiqiu-weixuanzhong',
      matchNum:15,
      isActive:activeId=='volleyball' ? true:false,
    }
  ]
  const tabData:IFTab[]=useMemo(()=>{
    return [
      ...changTabs,
      {
        id:'others',
        path:RouterPathUtil.MAIN_OTHERS,
        name:'其他',
        iconClass:'icon-xiala',
        matchNum:0,
        isActive:activeId=='others' ? true:false,
      }, {
        id:'fav',
        path: RouterPathUtil.MAIN_FAVORITE,
        name:'Fav',
        iconClass:'icon-yishoucang',
        matchNum:0,
        isActive:activeId=='fav' ? true:false,
      },  
    ]
  },[activeId])
  const navigatePathFunc=(path:RouterPathUtil)=>{
    navigate(path); 
  }
  const onClickTab=(item:IFTab)=>{
      setActiveId(item?.id)
      navigatePathFunc(item.path); 
  }
  const onclickLogo=(path:RouterPathUtil)=>{

    if(path===RouterPathUtil.MAIN_FOOTBALL){
      onClickTab(changTabs[0])
    }else{
      navigatePathFunc(path); 
    }
}
  return (
    <div className={styles.main} >
      <DownLoad />
      <Header onclickLogo={onclickLogo} />
      <Tabs tabData={tabData} onClick={onClickTab}/>
      <Outlet />
    </div>
  );
};

export default Main;
