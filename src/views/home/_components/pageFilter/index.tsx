
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import BtnGroup from '@/components/Common/btnGroup';
import cs from 'classnames'
import { EnumIconFontType } from '@/enum/enumIconFontType';
import IconFont from '@/components/Common/Iconfont';
interface IFFilterProps{
  filterData:any,
  isFilter?:boolean,
  onclick:(id:string)=>void
  onclickFilter?:()=>void
  className?:string
}
const PageFilter: React.FC<IFFilterProps> = ({className,isFilter=true,filterData,onclick,onclickFilter}) => {
      return (
        <section className={cs(className,styles.page_filter)}>
              <BtnGroup dataList={filterData} onclick={onclick} />
              {
                isFilter && 
                <div className={styles.btn_filter}>
                  <IconFont className={cs(EnumIconFontType.icon_shezhi_weixuanzhong,styles.icon)} onClick={onclickFilter} />
              </div>
              }
          
        </section>
      );
    };
export default PageFilter;
