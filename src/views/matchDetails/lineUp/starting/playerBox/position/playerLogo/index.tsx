import React, { useMemo } from "react";
import styles from "./index.module.scss";
import Images from "@/components/Common/Images";
import { PlayerEvent, PlayerEventType, PlayerInfo } from "../../../../types";
import Circle from "@/components/Common/Circle";
import SvgIcon from "@/components/Common/IconSvg";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import { EnumPlayerEventType } from "@/views/matchDetails/types/enum";
import stylesAway from "@/views/matchDetails/lineUp/starting/index.module.scss";
import cs from 'classnames'
import IconFont from "@/components/Common/Iconfont";
import ImageComp from "@/components/imageComp";
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

  const getIconFont = (type: PlayerEventType) => {
    let iconType ;
    switch (type) {
      case EnumPlayerEventType.Goal:
        iconType = EnumIconFontType.icongoal;
        break;
      case EnumPlayerEventType.OwnGoal:
        iconType = EnumIconFontType.iconown_goal;
        break;
      case EnumPlayerEventType.PenaltyGoal:
        iconType = EnumIconFontType.iconPenalty;
        break;
      case EnumPlayerEventType.MissedPenalty:
        iconType = EnumIconFontType.iconPenaltySaved;
        break;
      //
      case EnumPlayerEventType.YellowCard:
        iconType = EnumIconFontType.iconyellowcard;
        break;
      case EnumPlayerEventType.RedCard:
        iconType = EnumIconFontType.iconredcard;
        break;
      case EnumPlayerEventType.SecondYellow:
        iconType = EnumIconFontType.icontwoyellow_red;
        break;
      //换场  
      case EnumPlayerEventType.SubIn:
        iconType = EnumIconFontType.iconin1;
        break;
      case EnumPlayerEventType.SubOut:
        iconType = EnumIconFontType.iconout1;
        break;  
      //    
      default:
        iconType = "";
        break;
    }
    return iconType;
  };
  return (
    <div className={cs(styles.PlayerLogo,stylesAway.PlayerLogo_away)}>
      <ImageComp
        className={styles.logo}
        imgStyle={{borderRadius:'50%'}}
        imgSrc={playerData?.photo}
      >
         <>
         <span className={styles.name}>{playerData?.name}</span>
          <span className={styles.rating}>{playerData?.rating}</span>
          <Circle className={styles.shirt_number_wrap}>
            <span className={styles.shirt_number}>{playerData?.shirt_number}</span>
          </Circle>
          <span className={styles.events_card}>
            {eventsData?.[0]?.map((item: PlayerEvent, i: number) => (
            <>
              <SvgIcon key={i} name={getIconFont(item.type)} size={12} />
              {(item.type==EnumPlayerEventType.SubIn || item.type==EnumPlayerEventType.SubOut) && `${item?.minute}‘`}
            </>
            ))}
          </span>
          <span className={styles.events_ball}>
            {eventsData?.[1]?.map((item: PlayerEvent, i: number) => (
              <SvgIcon key={i} name={getIconFont(item.type)} size={12} />
            ))}
          </span>
         </>
      </ImageComp>
    </div>
  );
};
export default PlayerLogo;
