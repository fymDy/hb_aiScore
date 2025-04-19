import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { IFSearchResult } from "@/views/home/interface";
export interface IFBtnGroup {
  classNameActive?: string;
  dataList?: IFSearchResult[];
  onclick: (id: string) => void;
}
const BtnGroup: React.FC<IFBtnGroup> = ({
  dataList,
  onclick,
}) => {
  return (
    <div className={styles.btn_group}>
      {dataList?.map((item: IFSearchResult) => (
        <div
          key={item.id}
          className={cs(
            styles.item,
            { [styles.isActiveRed]: item.isActive && item.id =='ing' },
            { [styles.defaultActive]: item.isActive && item.id !=='ing'  }
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
