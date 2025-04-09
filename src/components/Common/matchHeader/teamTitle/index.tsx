import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import cs from "classnames";

const TeamTitle: React.FC<{
  matchName:string,
  startTime:string,
}> = ({matchName,startTime}) => {
  
  return (
    <div className={styles.title}>
      <IComp  className={cs(styles.icon_back,EnumIconFontType.iconback)}></IComp>
      <div className={styles.title_name}>
        <span>{matchName}</span>
        <span>{startTime}</span>
      </div>
      <IComp className={ cs(styles.icon,EnumIconFontType.icon_weishoucang)}></IComp>
  </div>
  );
};
export default TeamTitle;
