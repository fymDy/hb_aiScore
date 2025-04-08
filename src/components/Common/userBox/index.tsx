import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { EnumIconFontType } from "@/enum";
import { pxToRem } from "@/utils/common";
import IconSprite from "@/components/IconSprite";


const UserBox: React.FC<{
  iconFontType: number;
  userNum:number
}> = ({iconFontType,userNum}) => {
  return (
    <div className={styles.user_box}>
    {iconFontType == 1 &&  <IComp  className={cs(styles.icon_user, EnumIconFontType.iconRenshu)}/> }
     {iconFontType == 0 && <IconSprite style={{marginRight:pxToRem(5)}} name='10002'/>}
    <span className={cs(styles.num,{[styles.hot]:!iconFontType})}>{userNum}</span>
  </div>
  );
};
export default UserBox;
