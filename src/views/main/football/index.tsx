
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import { IFSearchResult } from '../interface';
import PageFilter from '../acomponents/pageFilter';

const Football: React.FC = () => {
    const [activeId,setActiveId]=useState('all')
    const btnGroupData:IFSearchResult[]=useMemo(()=>{
      return [
        {
          id:'0',
          name:'全部',
          isActive:activeId==='0',
        }, {
          id:'1',
          name:'进行中',
          iconClass:'icon-jinhangzhong',
          isActive:activeId==='1',
        }, {
          id:'2',
          name:'已结束',
          isActive:activeId==='2',
        },   {
          id:'3',
          name:'赛程',
          isActive:activeId==='3',
        },  
      ]
    },[activeId])
  return (
    <div className={styles.football}>
        <PageFilter></PageFilter>
        <div>
       
        </div>
    </div>
  );
};

export default Football;
