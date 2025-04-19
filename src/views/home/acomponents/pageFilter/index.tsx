
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import { IFSearchResult } from '../../interface';
import BtnGroup from '../searchResult/btnGroup';
import IComp from '@/components/IComp';
import cs from 'classnames'
interface IFFilterProps{
  filterData:any,
  onclick:(id:string)=>void
  onclickFilter:()=>void
}
const PageFilter: React.FC<IFFilterProps> = ({filterData,onclick,onclickFilter}) => {

      return (
        <section className={styles.page_filter}>
              <BtnGroup  dataList={filterData} onclick={onclick} />
              <div className={styles.btn_filter}>
                  <IComp className={cs('icon-shezhi-weixuanzhong',styles.icon)} onClick={onclickFilter} />
              </div>
        </section>
      );
    };
export default PageFilter;
