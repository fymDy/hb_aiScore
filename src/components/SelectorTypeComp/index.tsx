/*
 * @Author: Mark
 * @Date: 2025-05-27 15:20:26
 * @LastEditTime: 2025-05-30 17:40:35
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Popup/SelectorType/index.tsx
 */
import React from "react";
import styles from "./index.module.scss";
import { LeagueSeasonOption } from "./_types";

interface Props {
  data: LeagueSeasonOption[];
  onSelect: (s: LeagueSeasonOption) => void;
}

const SelectorType: React.FC<Props> = ({ data, onSelect }) => {
  return (
    <div className={styles.SelectorType}>
      {data.map((item:LeagueSeasonOption) => (
        <div
          key={item.id}
          className={`${styles.item} ${item.active ? styles.active : ""}`}
          onClick={() => onSelect(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SelectorType;
