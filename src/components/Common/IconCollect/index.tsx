import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { EnumIconFontType } from "@/enum/enumIconFontType";

const IconCollect: React.FC<{
  isCollect: boolean;
  onclcik: () => void;
}> = ({ isCollect=false, onclcik }) => {
  return (
      <IComp
        className={cs(
          styles.icon_collect,
          { [styles.isCollected]: isCollect},
          isCollect
            ? EnumIconFontType.icon_yishoucang
            : EnumIconFontType.icon_weishoucang
        )}
        onClick={onclcik}
      />
  );
};
export default IconCollect;
