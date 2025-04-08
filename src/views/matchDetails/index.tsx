
import React from 'react';
import styles from './index.module.scss';
import MatchTimelineChart, { BarData, EventItem } from '@/components/Common/MatchTimelineChart';

const MatchDetails: React.FC = () => {

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
  
  

      return (
        <div className={styles.matchDetails}>
          <h1>matchDetails 页面</h1>
          <h2>Match Timeline Chart</h2>
          <div className={styles.matchChart}>
          <MatchTimelineChart barData={barData} events={events} />
          </div>
    
        </div>
      );
    };

export default MatchDetails;
