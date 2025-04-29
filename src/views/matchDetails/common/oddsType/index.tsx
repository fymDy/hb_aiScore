/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-29 14:41:38
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/common/oddsType/index.tsx
 */
import ImageComp from "@/components/imageComp";
import styles from "./index.module.scss";
import Title from "../title";
import cs from 'classnames'
import Infomation from "../../overview/infomation";
const OddsType:React.FC<{
  data:any,
  onclick?:(id:string)=>void
  children?:any
}> = ({data,children}) => {
  return (
      <div className={styles.OddsType}>
          <div className={styles.hint}>{data?.hint}</div>
          <div className={styles.type}>
              {
                data?.odds?.map((item:any,i:number)=>(
                  <p key={i} className={styles.item}>
                    <span>{item?.name}</span>
                    <span>{item?.value}</span>
                  </p>
                ))
              }
          </div>
          {children}
      </div>
  );
};
export default OddsType;
