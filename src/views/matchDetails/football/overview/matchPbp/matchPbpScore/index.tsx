/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-13 15:24:30
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/matchPbpScore/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import SvgIcon from "@/components/Common/IconSvg";
import TimeText from "../common/timeText";
import TeamInfo from "../common/timeInfo";
const MatchPbpScore = ({className}:any) => {
  return (
    <div className={styles.MatchPbpScore}>
      <div className={`${styles.content} `}>
        <TeamInfo />
        <span className={styles.score}>3-0</span>
        <SvgIcon name={EnumIconFontType.icongoal} size={14} />
      </div>
      <TimeText time={22}/>
  </div>
  );
};
export default MatchPbpScore;
