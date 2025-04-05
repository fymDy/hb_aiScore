
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { IFTab } from '../interface';
import OptionBox from '@/components/OptionBox';

const Others: React.FC = () => {
  const [activeIndex,setActiveIndex]=useState(0)
  const menuOtherDatas:IFTab[]=useMemo(()=>{
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
       matchNum:11,
       isActive:activeIndex==0 ? true:false,
     },{id:'baseball',
      path: RouterPathUtil.MAIN,
      name:'棒球',
      iconClass:'icon-bangqiu-weixuanzhong',
      matchNum:8,
      isActive:activeIndex==0 ? true:false,
    },{id:'baseball',
      path: RouterPathUtil.MAIN,
      name:'板球',
      iconClass:'icon-banqiu-weixuanzhong',
      matchNum:9,
      isActive:activeIndex==0 ? true:false,
    },{id:'americalBall',
      path: RouterPathUtil.MAIN,
      name:'美式橄欖球',
      iconClass:'icon-ganlanqiu-weixuanzhong',
      matchNum:6,
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
      matchNum:32,
      isActive:activeIndex==0 ? true:false,
    },
    {id:'handball',
      path: RouterPathUtil.MAIN,
      name:'手球',
      iconClass:'icon-shouqiu-weixuanzhong',
      matchNum:53,
      isActive:activeIndex==0 ? true:false,
    },{id:'waterpolo',
      path: RouterPathUtil.MAIN,
      name:'水球',
      iconClass:'icon-shuiqiu-weixuanzhong',
      matchNum:73,
      isActive:activeIndex==0 ? true:false,
    },{id:'snooker',
      path: RouterPathUtil.MAIN,
      name:'羽毛球',
      iconClass:'icon-sinuoke-weixuanzhong',
      matchNum:10,
      isActive:activeIndex==0 ? true:false,
    },
    ]
  },[])

  const onClickMenu=()=>{

  }
      return (
        <div className={styles.others}>
         <OptionBox className={styles.font_size} arrowRight={false} menusData={menuOtherDatas} onClickMenu={onClickMenu} />
        </div>
      );
    };

export default Others;
