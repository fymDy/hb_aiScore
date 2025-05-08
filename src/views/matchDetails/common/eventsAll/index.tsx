/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-08 15:20:02
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/common/eventsAll/index.tsx
 */
import styles from "./index.module.scss";
import SvgIcon from "@/components/Common/IconSvg";
import cs from 'classnames'
const EventsAll:React.FC<{
  className:string,
  data:any
}> = ({className,data}:any) => {
  return (
    <div className={cs(className,styles.EventsAll)}>
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
