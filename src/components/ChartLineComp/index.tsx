import React from "react";
import styles from "./index.module.scss";

import cs from "classnames";
import IComp from "@/components/IComp";
import ImageComp from "@/components/imageComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import LineProcess from "../Common/lineProcess";

const ChartLineComp: React.FC<{
  title:string
  imgFlag:string
}> = ({title,imgFlag}) => {
  return (
    <div className={styles.ChartLineComp}>
    <ImageComp className={styles.img_flag} imgSrc={imgFlag}></ImageComp>
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
    <ImageComp className={styles.img_flag} imgSrc={imgFlag}></ImageComp>
  </div>
  );
};
export default ChartLineComp;
