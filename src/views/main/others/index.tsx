
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { IFTab } from '../interface';

const Others: React.FC = () => {
  const [activeIndex,setActiveIndex]=useState(0)
  const menuDatas:IFTab[]=useMemo(()=>{
    return [
      {id:'esports',
        path: RouterPathUtil.MAIN,
        name:'电竞',
        iconClass:'icon-dianjing-weixuanzhong',
        matchNum:13,
        isActive:activeIndex==0 ? true:false,
      },
      {id:'iceHockey',
       path: RouterPathUtil.MAIN,
       name:'冰球',
       iconClass:'icon-bingqiu-weixuanzhong',
       matchNum:13,
       isActive:activeIndex==0 ? true:false,
     },{id:'baseball',
      path: RouterPathUtil.MAIN,
      name:'棒球',
      iconClass:'icon-bangqiu-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },{id:'baseball',
      path: RouterPathUtil.MAIN,
      name:'板球',
      iconClass:'icon-banqiu-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },{id:'americalBall',
      path: RouterPathUtil.MAIN,
      name:'美式橄欖球',
      iconClass:'icon-ganlanqiu-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },{id:'tableTennis',
      path: RouterPathUtil.MAIN,
      name:'乒乓球',
      iconClass:'icon-pingpangqiu-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },{id:'badminton',
      path: RouterPathUtil.MAIN,
      name:'羽毛球',
      iconClass:'icon-yumaoqiu-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },
    {id:'handball',
      path: RouterPathUtil.MAIN,
      name:'手球',
      iconClass:'icon-shouqiu-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },{id:'waterpolo',
      path: RouterPathUtil.MAIN,
      name:'水球',
      iconClass:'icon-shuiqiu-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },{id:'snooker',
      path: RouterPathUtil.MAIN,
      name:'羽毛球',
      iconClass:'icon-sinuoke-weixuanzhong',
      matchNum:13,
      isActive:activeIndex==0 ? true:false,
    },
    ]
  },[])
      return (
        <div className={styles.others}>
          <h1>others 页面</h1>
        </div>
      );
    };

export default Others;
