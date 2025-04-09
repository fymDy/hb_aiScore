import React from "react";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import cs from "classnames";
import { EnumIconFontType } from "@/enum/enumIconFontType";

const MatchHeader: React.FC = () => {
  return (
    <ul className={styles.match_header}>
          <li>
            <IComp className={EnumIconFontType.iconback}></IComp>
          </li>
          <li></li>
          <li></li>
    </ul>
  );
};
export default MatchHeader;
