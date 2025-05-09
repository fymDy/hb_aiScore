import React, { useMemo } from "react";
import styles from "./index.module.scss";
import { PlayerEvent,  PlayerInfo } from "../../../../types";
import Circle from "@/components/Common/Circle";

import { EnumPlayerEventType } from "@/views/matchDetails/types/enum";
import stylesAway from "@/views/matchDetails/lineUp/starting/index.module.scss";
import cs from 'classnames'
import ImageComp from "@/components/imageComp";
import EventsType from "@/views/matchDetails/lineUp/_components/eventsType";
import ISpan from "@/components/Common/ISpan";
const PlayerLogo: React.FC<{
  playerData: PlayerInfo;
}> = ({ playerData }) => {
  const eventsData = useMemo(() => {
    const ball = playerData?.events?.filter(
      (item: PlayerEvent) =>
        item.type === EnumPlayerEventType.Goal ||
        item.type === EnumPlayerEventType.OwnGoal ||
        item.type === EnumPlayerEventType.PenaltyGoal ||
        item.type === EnumPlayerEventType.MissedPenalty
    );
    //
    const card = playerData?.events?.filter(
      (item: PlayerEvent) =>
        item.type === EnumPlayerEventType.YellowCard ||
        item.type === EnumPlayerEventType.RedCard ||
        item.type === EnumPlayerEventType.SecondYellow ||
        item.type === EnumPlayerEventType.SubIn ||
        item.type === EnumPlayerEventType.SubOut
    );
    return [card, ball];
  }, [playerData]);

  
  return (
    <div className={cs(styles.PlayerLogo,stylesAway.PlayerLogo_away)}>
      <ImageComp
        className={styles.logo}
        imgStyle={{borderRadius:'50%'}}
        imgSrc={playerData?.photo}
      >
         <>
          <ISpan className={styles.name} name={playerData?.name} />
          <ISpan className={styles.rating} name={playerData?.rating} />
          <Circle className={styles.shirt_number_wrap}>
            <span className={styles.shirt_number}>{playerData?.shirt_number}</span>
          </Circle>
           <EventsType className={styles.events_card} data={eventsData?.[0] } />
            <EventsType className={styles.events_ball} data={eventsData?.[1] } />
         </>
      </ImageComp>
    </div>
  );
};
export default PlayerLogo;
