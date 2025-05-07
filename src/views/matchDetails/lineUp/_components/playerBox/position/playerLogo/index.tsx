import React from "react";
import styles from "./index.module.scss";
import Images from "@/components/Common/Images";
import { PlayerInfo } from "../../../../types";

const PlayerLogo: React.FC<{
  playerData:PlayerInfo,
}> = ({playerData}) => {
  return (
      <div className={styles.PlayerLogo}>
            <Images className={styles.logo} imgSrc={playerData?.photo}/>
            <span className={styles.name}>{playerData?.name}</span>
      </div>
  );
};
export default PlayerLogo;
