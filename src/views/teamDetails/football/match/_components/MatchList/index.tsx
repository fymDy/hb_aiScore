/*
 * @Author: Mark
 * @Date: 2025-05-28 11:50:23
 * @LastEditTime: 2025-05-28 13:56:09
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/match/_components/MatchList/index.tsx
 */
import React, { useMemo, useState } from 'react';
import { TeamMatchRecordGrouped } from '../../_types';
import TitleMore from '@/views/matchDetails/_components/titleMore';
import styles from './index.module.scss'
import cs from 'classnames'
import CircleD from '@/components/Common/CircleD';
import CircleL from '@/components/Common/CircleL';
import CircleW from '@/components/Common/CircleW';
import ISpan from '@/components/Common/ISpan';
import ImageComp from '@/components/imageComp';
interface Props {
  showUpcoming:boolean;
  data: TeamMatchRecordGrouped;
}

const MatchList: React.FC<Props> = ({ data ,showUpcoming}) => {

  const filteredGroups = useMemo(()=>{
  return  data.groups
    .map(group => ({
      matchType: group.matchType,
      matches: group.matches.filter(m => m.status === (showUpcoming ? 'upcoming' : 'finished'))
    })).filter(group => group.matches.length > 0);
  },[showUpcoming])

  return (
    <div className={cs(styles.MatchList)}>
      {filteredGroups.map(group => (
        <div key={group.matchType} >
          <TitleMore title={group.matchType} isMore={false} />
          {group.matches.map((item,i) => (
                  <div key={i} className={cs(styles.item)}>
                    <div className={styles.item_left}>
                      <ISpan className={styles.date} name={item.date}></ISpan>
                      <div className={cs(styles.team)}>
                            <ImageComp className={styles.team_img} imgSrc={item.teamLogo}>
                                  <span className={styles.teamHome}>{item.teamName}</span>
                              </ImageComp>
                              <ImageComp className={styles.team_img} imgSrc={item.teamLogo}>
                                <span>{item.teamName}</span>
                              </ImageComp>
                      </div>
                      <div className={styles.score}>
                        <span>{item.score}</span>
                        <span>{item.score}</span>
                      </div>
                      <div className={styles.score}>
                        <span>{item.score}</span>
                        <span>{item.score}</span>
                      </div>
                    </div>
               <div className={styles.flag}>
                        {item.result=='L' && <CircleL  name={item.result} />}
                        {item.result=='W' && <CircleW  name={item.result} />}
                        {item.result=='D' && <CircleD  name={item.result} />}
                    </div>
                  </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchList;
