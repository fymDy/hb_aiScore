/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-13 15:20:32
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/matchPbpChange/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";
import SvgIcon from "@/components/Common/IconSvg";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import TimeText from "../common/timeText";
import TeamInfo from "../common/timeInfo";
const MatchPbpChange = ({className}:any) => {
  return (
    <div className={cs(className,styles.MatchPbpChange)}>
        <TimeText time={38}/>
        <SvgIcon  name={EnumIconFontType.iconsubstitution} />
        <TeamInfo />
 </div>
  );
};
export default MatchPbpChange;
