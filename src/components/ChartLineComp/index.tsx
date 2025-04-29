import React from "react";
import styles from "./index.module.scss";

import cs from "classnames";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import LineProcess from "../Common/lineProcess";
import Image from '@/components/Common/Image'
const ChartLineComp: React.FC<{
  title:string
  imgFlag:string
}> = ({title,imgFlag}) => {
  return (
    <div className={styles.ChartLineComp}>
    <Image className={styles.img_flag} imgSrc={imgFlag}></Image>
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
    <Image className={styles.img_flag} imgSrc={imgFlag}></Image>
  </div>
  );
};
export default ChartLineComp;
