/*
 * @Author: Mark
 * @Date: 2025-05-27 15:20:26
 * @LastEditTime: 2025-05-30 19:11:12
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/SelectorFilterComp/index.tsx
 */
import React, { useState } from "react";
import styles from "./index.module.scss";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import PlayerComp from "@/components/PlayerComp";
import cs from 'classnames'

const SelectorFilterComp: React.FC<{

  name:string,
    logo?:string,
    className?:string
  onClick:()=>void
}> = ({  logo,name ,className,onClick}) => {
  return (
    <div className={cs(styles.SelectorFilterComp,className)}>
        <PlayerComp className={""} logo={logo} name={name}/>
        <IconFont className={cs(EnumIconFontType.iconxialajiantou,styles.font)} onClick={onClick}/>
    </div>
  );
};

export default SelectorFilterComp;
