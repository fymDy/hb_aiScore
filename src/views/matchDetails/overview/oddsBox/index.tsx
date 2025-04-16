/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-16 20:49:35
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/oddsBox/index.tsx
 */
import ImageComp from "@/components/imageComp";
import styles from "./index.module.scss";
import Title from "../../common/title";
import cs from 'classnames'
const OddsBox:React.FC<{
  data:any
}> = ({data}) => {
  return (
    <section className={styles.OddsBox}>
        <Title className={styles.title}  title={'赔率'}></Title>
      <div className={styles.dt}>
         <span className={styles.name}></span>
         <span className={styles.name}>{'1'}</span>
         <span className={styles.name}>{'X'}</span>
         <span className={styles.name}>{'2'}</span>
      </div>
    {
      data?.data?.map((item:any,i:number)=>(
        <div key={i} className={cs(styles.dd)}>
          <div className={styles.img_box}>
               <ImageComp className={styles.img} imgSrc={item.img}></ImageComp>
          </div>
         <span className={styles.name}>{item.one}</span>
         <span className={cs(styles.name,styles.nameX)}>{item.X}</span>
         <span className={styles.name}>{item.two} </span>
       </div>
      ))
    }
    <div className={styles.hint}>{data?.hint}</div>
    <div className={styles.odds}>
        {
          data?.odds?.map((item:any,i:number)=>(
            <p key={i} className={styles.item}>
              <span>{item?.name}</span>
              <span>{item?.value}</span>
            </p>
          ))
        }
    </div>
  </section>
  );
};
export default OddsBox;
