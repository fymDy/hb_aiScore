/*
 * @Author: Mark
 * @Date: 2025-05-09 14:27:36
 * @LastEditTime: 2025-05-28 20:43:57
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/PlayerTeamComp/index.tsx
 */
import { spawn } from "child_process";
import Images from "../Common/Images";
import ISpan from "../Common/ISpan";
import PlayerComp from "../PlayerComp";
import styles from "./index.module.scss";
import cs from "classnames";
const PlayerTeamComp: React.FC<{
  player_photo: string | undefined;
  player_name: string | undefined;
  team_logo?: string | undefined;
  team_name?: string | undefined;
  className?: string;
  is_player_photo_bg?: boolean;
  classPlayerLogo?:string
  classPlayerName?:string
}> = ({
  className,
  player_photo,
  player_name,
  team_logo,
  team_name = "",
  is_player_photo_bg = false,
  classPlayerLogo,
  classPlayerName
}) => {
  return (
    <div className={cs(styles.PlayerTeamComp, className)}>
      <div className={cs({ [styles.is_player_photo_bg]: is_player_photo_bg })}>
        <Images
          className={cs(styles.left, { [styles.left_bg]: is_player_photo_bg })}
          imgSrc={player_photo}
        />
      </div>
      <div className={styles.right}>
        <ISpan className={cs(styles.player_name,classPlayerName)} name={player_name} />
        {team_name ? (
          <PlayerComp
            className={styles.teamWrap}
            classPlayerLogo={cs(styles.teamLogo,classPlayerLogo)}
            classPlayerName={cs(styles.teamName)}
            logo={team_logo}
            name={team_name}
          />
        ) : (<span  className={styles.teamName}>-</span>)
        }
      </div>
    </div>
  );
};
export default PlayerTeamComp;
