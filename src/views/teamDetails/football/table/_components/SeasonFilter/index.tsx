/*
 * @Author: Mark
 * @Date: 2025-05-27 15:20:26
 * @LastEditTime: 2025-05-27 15:51:56
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/table/_components/SeasonFilter/index.tsx
 */
import React, { useState } from "react";
import styles from "./index.module.scss";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import PlayerComp from "@/components/PlayerComp";
import cs from 'classnames'

const SeasonFilter: React.FC<{
  logo:string,
  name:string,
  onClick:()=>void
}> = ({  logo,name ,onClick}) => {
  return (
    <div className={styles.SeasonFilter}>
        <PlayerComp className={""} logo={logo} name={name}/>
        <IconFont className={cs(EnumIconFontType.iconxialajiantou,styles.font)} onClick={onClick}/>
    </div>
  );
};

export default SeasonFilter;
