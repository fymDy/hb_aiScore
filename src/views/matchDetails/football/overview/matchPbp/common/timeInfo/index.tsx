/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-13 15:20:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/common/timeInfo/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";

const TeamInfo = ({time}:any) => {
  return (
    <div className={styles.TeamInfo}>
    <span className={styles.up}>換上:莫腾·尤尔曼德</span>
    <span className={styles.down}>換下:Pedro Ferreira</span>
</div>
  );
};
export default TeamInfo;