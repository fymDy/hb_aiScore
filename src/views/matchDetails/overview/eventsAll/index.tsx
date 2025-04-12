/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-12 20:52:19
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/eventsAll/index.tsx
 */
import styles from "./index.module.scss";
import SvgIcon from "@/components/Common/IconSvg";
const EventsAll = ({data}:any) => {
  return (
    <div className={styles.events_all}>
    {
      data?.map((item:any,i:number)=>(
       <div key={i} className={styles.events_content}>
         <SvgIcon name={item.icon} size={14} />
         <span className={styles.events_name}>{item.name}</span>
       </div>
      ))
    }
  </div>
  );
};
export default EventsAll;
