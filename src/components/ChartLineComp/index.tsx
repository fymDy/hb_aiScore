import React from "react";
import styles from "./index.module.scss";

import cs from "classnames";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import LineProcess from "../Common/lineProcess";
import Images from "../Common/Images";
const ChartLineComp: React.FC<{
  title:string
  imgFlag:string
}> = ({title,imgFlag}) => {
  return (
    <div className={styles.ChartLineComp}>
    <Images className={styles.img_flag} imgSrc={imgFlag}></Images>
    <IComp
      className={cs(styles.card_red, EnumIconFontType.iconredcard1)}
    />
    <IComp
      className={cs(
        styles.card_yellow,
        EnumIconFontType.iconyellowcard1
      )}
    />
    <LineProcess
      title={title}
      leftValue={0}
      rightValue={5}
    />
    <IComp className={cs(
        styles.card_yellow,
        EnumIconFontType.iconyellowcard1
      )}/>
    <IComp className={cs(styles.card_red, EnumIconFontType.iconredcard1)} />
    <Images className={styles.img_flag} imgSrc={imgFlag}></Images>
  </div>
  );
};
export default ChartLineComp;
