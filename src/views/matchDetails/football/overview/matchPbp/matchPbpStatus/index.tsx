/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-13 15:36:34
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/matchPbpStatus/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";

const MatchPbpStatus = ({statusText}:any) => {
  return (
    <div className={styles.MatchPbpStatus}>{statusText}</div>
  );
};
export default MatchPbpStatus;
