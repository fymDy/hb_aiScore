
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import DownLoadComp from '@/components/DownloadComp';
import MatchTimelineChart, { BarData, EventItem } from '@/components/Common/MatchTimelineChart';
import IconBrand from '@/components/Common/IconBrand';
import MatchHeader from '@/components/Common/matchHeader';
import cs from 'classnames'
const MatchDetails: React.FC = () => {
 //下载
    const [isShowDownLoad,setIsShowDownLoad]=useState<boolean>(true)
  const barData: any[] = [
    ...Array.from({ length: 100 }, (_, i) => ({
      team: 'home',
      minute: i,
      value: Math.floor(Math.random() * 20),
    })),
    ...Array.from({ length: 100 }, (_, i) => ({
      team: 'away',
      minute: i,
      value: Math.floor(Math.random() * 30),
    })),
  ];

  const events:any = {
    home: [
      { minute: 10, type: 'corner' },
      { minute: 35, type: 'yellowCard' },
      { minute: 60, type: 'corner' },
      { minute: 90, type: 'yellowCard' },
    ],
    away: [
      { minute: 5, type: 'corner' },
      { minute: 30, type: 'corner' },
      { minute: 31, type: 'corner' },
      { minute: 80, type: 'yellowCard' },
    ],
  };
  
  const headerData=useMemo(()=>{
      return {
          matchName:'以色列乙級聯賽',
          startTime:'14:30 2025年4月9日星期三',
          matchMin:58,
          teamHome:'卡迪斯亞',
          teamHomeImg:"https://img0.aiscore.com/football/team/3f0164c40c878bc710d0e7f83c6f5d71.png!w100",
          result:'1',//0待定  1完场  2 展示matchMin
          htScore:'0 - 0',
          ftScore:'0 - 1',
          homeResultScore:0,
          teamAway:'上海海港富盛经开',
          teamAwayImg:"https://img0.aiscore.com/football/team/fef70eb7dee84d19446f52cb3490fd71.png!w100",
          awayResultScore:1,
          iconBrand:'icondonghuazhibo',
          iconBrandName:'動畫'
      }
  },[])

      return (
        <div className={styles.matchDetails}>
               <DownLoadComp className={cs({[styles.is_notShow_download]:!isShowDownLoad }) } onClose={()=>setIsShowDownLoad(!isShowDownLoad) }/>
              <MatchHeader data={headerData} />
          
           {/* <MatchTimelineChart className={styles.matchChart} barData={barData} events={events} /> */}
         
    
        </div>
      );
    };

export default MatchDetails;
