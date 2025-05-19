import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import cs from "classnames";

const TeamTitle: React.FC<{
  title?:string,
  onClick:()=>void
}> = ({title,onClick}) => {
  
  return (
    <div className={styles.title}>
      <IComp  className={cs(styles.icon_back,EnumIconFontType.iconback)} onClick={onClick}></IComp>
      {title &&
        <>
        <div className={styles.title_name}>
        {title}
      </div>
      <IComp className={ cs(styles.icon,EnumIconFontType.icon_weishoucang)}></IComp>
        </>
      }
  </div>
  );
};
export default TeamTitle;
