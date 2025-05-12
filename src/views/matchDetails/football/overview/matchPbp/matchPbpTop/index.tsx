/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-13 15:32:52
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/matchPbpTop/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import TimeText from "../common/timeText";
const MatchPbpTop = ({className}:any) => {
  return (
    <div className={cs(className,styles.MatchPbpTop)}>
      <TimeText time={18}/>
       <div>
       <IComp
        className={cs(
          styles.match_pbp_top_icon,
          EnumIconFontType.iconyellowcard
        )}  />
       <span className={styles.name}>莫腾·尤尔曼德</span>
       </div>
  </div>
  );
};
export default MatchPbpTop;
