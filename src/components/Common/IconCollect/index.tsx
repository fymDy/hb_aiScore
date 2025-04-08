import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { EnumIconFontType } from "@/enum";
interface IFTitleProps {
  id:string,
  isCollect: boolean;
  onclcik: (id:string) => void;
}
const IconCollect: React.FC<IFTitleProps> = ({ id,isCollect=false, onclcik }) => {
  return (
      <IComp
        className={cs(
          styles.icon_collect,
          { [styles.isCollected]: isCollect},
          isCollect
            ? EnumIconFontType.iconYishoucang
            : EnumIconFontType.iconWeishoucang
        )}
        onClick={()=>onclcik(id)}
      />
  );
};
export default IconCollect;
