
import React, {  useMemo, useState } from 'react';
import styles from './index.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import DownLoad from '@/components/Download';
import Header from '@/components/Header';
import Menus from '@/components/Menus';
import {  useApp } from '@/components/LayoutContext';
import { RouterPathUtil } from '@/router/routerPathUtil';

export interface IFMenu{
  path:string,
  name:string,
  iconClass:string,
  matchNum:number,
  isActive:boolean,
  onClick:(i:number)=>void
}
export interface IFMenus{
  menuData:IFMenu[]

}
const Main: React.FC = () => {
  const navigate = useNavigate();
    const {deviceType}=useApp()
    console.log('deviceType',deviceType)
  const [activeIndex,setActiveIndex]=useState(0)
  const menuData:IFMenu[]=useMemo(()=>{
    return [
      {
        path: RouterPathUtil.MAIN,
        name:'足球',
        iconClass:'icon-zuqiu-weixuanzhong ',
        matchNum:23,
        isActive:activeIndex==0 ? true:false,
        onClick:(i:number)=>onClickMenu(i)
      }, {
        path: RouterPathUtil.MAIN_BASKETBALL,
        name:'篮球',
        iconClass:'icon-lanqiu-weixuanzhong ',
        matchNum:15,
        isActive:activeIndex==1 ? true:false,
        onClick:(i:number)=>onClickMenu(i)
      }, {
        path: RouterPathUtil.MAIN_TENNIS,
        name:'网球',
        iconClass:'icon-wangqiu-weixuanzhong',
        matchNum:15,
        isActive:activeIndex==2 ? true:false,
        onClick:(i:number)=>onClickMenu(i)
      }, {
        path: RouterPathUtil.MAIN_VOLLEYBALL,
        name:'排球',
        iconClass:'icon-paiqiu-weixuanzhong',
        matchNum:15,
        isActive:activeIndex==3 ? true:false,
        onClick:(i:number)=>onClickMenu(i)
      }, {
        path:RouterPathUtil.MAIN_OTHERS,
        name:'其他',
        iconClass:'icon-xiala',
        matchNum:0,
        isActive:true,
        onClick:(i:number)=>onClickMenu(i)
      }, {
        path: RouterPathUtil.MAIN_FAVORITE,
        name:'Fav',
        iconClass:'icon-yishoucang',
        matchNum:0,
        isActive:false,
        onClick:(i:number)=>onClickMenu(i)
      }
    ]
  },[activeIndex])

  const onClickMenu=(index:number)=>{
      setActiveIndex(index)
      navigate(menuData[index].path); 
  }
  return (
    <div className={styles.main}>
      <DownLoad />
      <Header onclickLogo={onClickMenu} />
      <Menus menuData={menuData}/>
      <Outlet/>
    </div>
  );
};

export default Main;
