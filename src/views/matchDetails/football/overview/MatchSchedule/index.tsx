/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-27 12:05:01
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/football/overview/MatchSchedule/index.tsx
 */
import TitleMore from "../../../_components/titleMore";
import styles from "./index.module.scss";
const MatchSchedule = ({title,data}:any) => {
  return (
    <div className={styles.MatchSchedule}>
        <TitleMore className={styles.title} title={title} isMore={false}></TitleMore>
        <div className={styles.content}>
          {
            data?.map((item:any)=>(
              <span key={item.id}  className={styles.name} onClick={()=>alert(item.name)}>{item.name}</span>
            ))
          }
      </div>
  </div>
  );
};
export default MatchSchedule;
