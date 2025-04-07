
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import IComp from '@/components/IComp';
import cs from 'classnames'
import { IFSearchResult } from '@/views/main/interface';
export interface IFBtnGroup{
  classNameActive:string,
  dataList?:IFSearchResult[],
  onclick:(id:string)=>void
}
const BtnGroup: React.FC<IFBtnGroup> = ({classNameActive,dataList,onclick}) => {
      return (
        <div className={styles.btn_group}>
         {
          dataList?.map((item:IFSearchResult)=>(
           <div key={item.id} className={cs(styles.item,{[classNameActive]:item.isActive})} onClick={()=>onclick(item.id)}>
            <IComp className={cs(styles.icon,item.iconClass)}  ></IComp>
                <span className={styles.name}>{item.name}</span>
            </div>
          ))
         }
        </div>
      );
    };

export default BtnGroup;
