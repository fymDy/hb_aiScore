/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-13 15:12:33
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/common/timeText/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";

const TimeText = ({time}:any) => {
  return (
    <span className={styles.time}>{`${time}'`}</span>
  );
};
export default TimeText;