import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { EnumIconFontType } from "@/enum";

const IconBrand: React.FC = () => {
  return (
    <IComp className={cs(styles.icon_brand,EnumIconFontType.iconDonghuazhibo)} />
  );
};
export default IconBrand;
