import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { EnumIconFontType } from "@/enum";
interface IFTitleProps {
  isCollect: boolean;
  onclcik: () => void;
}
const IconCollect: React.FC<IFTitleProps> = ({ isCollect=false, onclcik }) => {
  return (
      <IComp
        className={cs(
          styles.icon_collect,
          { [styles.isCollected]: isCollect},
          isCollect
            ? EnumIconFontType.iconYishoucang
            : EnumIconFontType.iconWeishoucang
        )}
        onClick={onclcik}
      />
  );
};
export default IconCollect;
