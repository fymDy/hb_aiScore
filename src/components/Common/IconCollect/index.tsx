import React from "react";
import styles from "./index.module.scss";
import cs from "classnames";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import IconFont from "../Iconfont";

const IconCollect: React.FC<{
  isCollect: boolean;
  onclcik: () => void;
}> = ({ isCollect=false, onclcik }) => {
  return (
      <IconFont
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
