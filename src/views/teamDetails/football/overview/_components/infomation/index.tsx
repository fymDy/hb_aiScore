/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-27 11:45:51
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/overview/_components/infomation/index.tsx
 */
import styles from "./index.module.scss";
import cs from "classnames";
import DescInfomationComp from "@/components/InfomationDescComp";
import TitleMore from "@/views/matchDetails/_components/titleMore";
import InfomationBaseComp from "@/components/InfomationBaseComp";
const Infomation: React.FC<{
  data: any;
  isBtnShowMore?: boolean;
}> = ({ data, isBtnShowMore = true }) => {
  return (
    <section className={styles.Infomation}>
      <InfomationBaseComp title={data.title} data={data?.info} />
      <TitleMore
        className={cs(styles.title)}
        title={data.descTitle}
        isMore={false}
      />
      <DescInfomationComp
        desc1={data?.desc}
        desc2={data?.details}
        desc3={data?.ps}
        isBtnShowMore={isBtnShowMore}
      />
    </section>
  );
};
export default Infomation;
