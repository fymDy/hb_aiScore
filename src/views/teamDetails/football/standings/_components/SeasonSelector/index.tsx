/*
 * @Author: Mark
 * @Date: 2025-05-27 15:20:26
 * @LastEditTime: 2025-05-27 15:26:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/table/_components/SeasonSelector/index.tsx
 */
import React, { useState } from "react";
import styles from "./index.module.scss";
import { LeagueSeasonOption } from "../../_types";

interface Props {
  seasons: LeagueSeasonOption[];
  onSelect: (s: LeagueSeasonOption) => void;
}

const SeasonSelector: React.FC<Props> = ({ seasons, onSelect }) => {
  return (
    <div className={styles.options}>
      {seasons.map((season) => (
        <div
          key={season.id}
          className={`${styles.item} ${season.active ? styles.active : ""}`}
          onClick={() => onSelect(season)}
        >
          {season.name}
        </div>
      ))}
    </div>
  );
};

export default SeasonSelector;
