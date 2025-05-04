import React, { useMemo, useState } from "react";

import IComp from "@/components/IComp";
import cs from "classnames";
import { IFSearchResult } from "@/views/home/interface";
import styles from "./index.module.scss";
import parentStyles from '@/views/home/index.module.scss'
export interface IFBtnGroup {
  classNameActive?: string;
  dataList?: IFSearchResult[];
  onclick: (id: string) => void;
  className?:string
}
const BtnGroup: React.FC<IFBtnGroup> = ({
  className,
  dataList,
  onclick,
}) => {
  return (
    <div className={cs(className,styles.btn_group)}>
      {dataList?.map((item: IFSearchResult) => (
        <div
          key={item.id}
          id={item.id}
          className={cs(
            styles.item,
            parentStyles.item,
            { [styles.defaultActive]: item.isActive && item.id  },
            { [parentStyles.isActiveRed]: item.isActive && item.id =='ing' },
          )}
          onClick={() => onclick(item.id)}
        >
          <IComp classParentName={styles.name} className={cs(styles.icon, item.iconClass)} name={item.name}/>
        </div>
      ))}
    </div>
  );
};

export default BtnGroup;
