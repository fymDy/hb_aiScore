
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import { IFSearchResult } from '../../interface';
import BtnGroup from '../searchResult/btnGroup';
import IComp from '@/components/IComp';
import cs from 'classnames'
const PageFilter: React.FC = () => {
    const [activeId,setActiveId]=useState('1')
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
      }  
    ]
  },[activeId])

      return (
        <div className={styles.page_filter}>
              <BtnGroup classNameActive={styles.active} dataList={btnGroupData} onclick={(id:string)=>setActiveId(id)} />
              <div className={styles.btn_filter}>
                  <IComp className={cs('icon-shezhi-weixuanzhong',styles.icon)} onClick={()=>{}} />
              </div>
        </div>
      );
    };
export default PageFilter;
