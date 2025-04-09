import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { EnumIconFontType } from "@/enum/enumIconFontType";

const IconBrand: React.FC = () => {
  return (
    <IComp className={cs(styles.icon_brand,EnumIconFontType.icon_donghuazhibo)} />
  );
};
export default IconBrand;
