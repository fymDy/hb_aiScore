/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-25 18:03:34
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/infomation/index.tsx
 */
import styles from "./index.module.scss";
import Title from "../../common/title";
import cs from 'classnames'
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
const Infomation:React.FC<{
  data:any
}> = ({data}) => {
  return (
    <section className={styles.Infomation}>
        <div className={cs(styles.title)}  >{data.title}</div>
      <div className={styles.info}>
        {
          data?.info?.map((item:any,i:number)=>(
            <p key={i} className={styles.item}>
              <span  className={styles.itemTitle}>{item?.title}</span>
              <span  className={styles.itemText}>{item?.text}</span>
            </p>
          ))
        }
      </div>
      <div className={styles.desc}>
        <p>
            <span>{data.desc[0]}</span>
            <span>{data.desc[1]}</span>
        </p>
        <div className={cs(styles.desc_info)}>
          <Title className={styles.desc_info_title}  title={'更多详情'} isMore={false}></Title>
          <div className={cs(styles.details)}>
            {
                data?.details?.map((item:any,i:number)=>(
                  <span  key={i} className={styles.name}>{item}</span>
              ))
            }
          </div>
          <div className={cs(styles.ps)}>
              {data.ps}
          </div>
        </div>
         <div className={styles.showMore}>
              <span>展示更多</span>
              <IconFont className={EnumIconFontType.icon_xiala}/>
        </div>
    </div>
  </section>
  );
};
export default Infomation;
