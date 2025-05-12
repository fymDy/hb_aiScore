/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-26 12:15:42
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/ballType/index.tsx
 */
import Title from "../../../_components/title";
import styles from "./index.module.scss";
const BallType = ({data}:any) => {
  return (
    <div className={styles.BallType}>
        <Title className={styles.title} title='中國足球超級聯賽 數據' isMore={false}></Title>
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
export default BallType;
