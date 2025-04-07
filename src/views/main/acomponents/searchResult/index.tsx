
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import cs from 'classnames'
import BtnGroup from './btnGroup';
import { IFSearchResult } from '../../interface';

const SearchResult: React.FC = () => {
    const [activeId,setActiveId]=useState('all')
  const btnGroupData:IFSearchResult[]=useMemo(()=>{
    return [
      {
        id:'all',
        name:'全部',
        iconClass:'',
        isActive:activeId==='all',
      }, {
        id:'team',
        name:'球隊',
        iconClass:'icon-qiudui',
        isActive:activeId==='team',
      },   {
        id:'match',
        name:'赛事',
        iconClass:'icon-saishi',
        isActive:activeId==='match',
      },   {
        id:'member',
        name:'球員',
        iconClass:'icon-qiuyuan',
        isActive:activeId==='member',
      },  
    ]
  },[activeId])

      return (
        <div className={styles.search_result}>
              <BtnGroup classNameActive={styles.active} dataList={btnGroupData} onclick={(id:string)=>setActiveId(id)} />
              <div>{activeId}</div>
        </div>
      );
    };
export default SearchResult;
