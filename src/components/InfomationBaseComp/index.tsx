/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-27 11:45:24
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/InfomationBaseComp/index.tsx
 */
import styles from "./index.module.scss";
import cs from "classnames";
import TitleMore from "@/views/matchDetails/_components/titleMore";

const InfomationBaseComp: React.FC<{
  title: string;
  data:any;
  isMore?:boolean
}> = ({ title,data,isMore=false}) => {
  return (
    <section className={styles.InfomationBaseComp}>
      <TitleMore className={cs(styles.title)} title={title} isMore={isMore}/>
      <div className={styles.info}>
        {data?.map((item: any, i: number) => (
          <p key={i} className={styles.item}>
            <span className={styles.itemTitle}>{item?.title}</span>
            <span className={styles.itemText}>{item?.text}</span>
          </p>
        ))}
      </div>
    </section>
  );
};
export default InfomationBaseComp;
