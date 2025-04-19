
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import { IFSearchResult } from '../../interface';
import BtnGroup from '../searchResult/btnGroup';
import IComp from '@/components/IComp';
import cs from 'classnames'
import { EnumIconFontType } from '@/enum/enumIconFontType';
import IconFont from '@/components/Common/Iconfont';
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
                  <IconFont className={cs(EnumIconFontType.icon_shezhi_weixuanzhong,styles.icon)} onClick={onclickFilter} />
              </div>
        </section>
      );
    };
export default PageFilter;
