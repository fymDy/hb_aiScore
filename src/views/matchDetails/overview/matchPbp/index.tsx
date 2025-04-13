/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-13 15:36:54
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";
import MatchPbpChange from "./matchPbpChange";
import MatchPbpTop from "./matchPbpTop";
import MatchPbpScore from "./matchPbpScore";
import MatchPbpStatus from "./matchPbpStatus";
const MatchPbp = () => {
  return (
    <div className={styles.match_pbp}>
      <MatchPbpStatus statusText={"FT 0-1"} />
      <MatchPbpChange />
      <MatchPbpChange />
      <MatchPbpChange className={cs({ [styles.rowReverse]: true })} />
      <MatchPbpTop />
      <MatchPbpTop className={cs({ [styles.rowReverse]: true })} />
      <MatchPbpScore />
      <MatchPbpStatus statusText={"HT 1-1"} />
      <MatchPbpTop />
      <MatchPbpTop />
    </div>
  );
};
export default MatchPbp;
