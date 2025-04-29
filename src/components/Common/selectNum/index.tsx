import React, { useMemo, useState } from "react";

import IComp from "@/components/IComp";
import cs from "classnames";
import { IFSearchResult } from "@/views/home/interface";
import styles from "./index.module.scss";
import parentStyles from '@/views/home/index.module.scss'
import { EnumIconFontType } from "@/enum/enumIconFontType";
import IconFont from "../Iconfont";
export interface IFBtnGroup {
  isShowNum?: boolean;
  data?: number[];
  onclick: () => void;
  onclickNum: (key:number) => void;
  activeNum:number;
  className?:string
}
const SelectNum: React.FC<IFBtnGroup> = ({
  className,
  activeNum,
  data,
  onclick,
  onclickNum,
  isShowNum=false,
}) => {
  return (
    <div className={styles.SelectNumBox}>
        <span className={styles.activeNum}>{activeNum}</span>
        <IconFont  className={cs(styles.icon, EnumIconFontType.icon_xiala)}  onClick={onclick}/>
        <p className={cs(styles.select_list,{[styles.is_not_show]:!isShowNum})}>
          {
            data?.map((item:any,i:number)=>(
                <span key={i} className={styles.num} onClick={()=>onclickNum(item)}>{item}</span>
            ))
          }
          </p>
    </div>
  );
};

export default SelectNum;
