/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-04 16:01:48
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/infomation/index.tsx
 */
import styles from "./index.module.scss";
import Title from "../../../_components/title";
import cs from "classnames";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import { useMemo, useState } from "react";
const Infomation: React.FC<{
  data: any;
  isBtnShowMore?:boolean,
  showMore?: boolean;
  onclickShow?: (v: boolean) => void;
}> = ({ data,isBtnShowMore=true, showMore=false, onclickShow }) => {
  const showInfo = useMemo(() => {
    return {
      text: showMore ? "隐藏" : "展示更多",
      icon: showMore
        ? EnumIconFontType.icon_shangla
        : EnumIconFontType.icon_xiala,
    };
  }, [showMore]);
  return (
    <section className={styles.Infomation}>
      <div className={cs(styles.title)}>{data.title}</div>
      <div className={styles.info}>
        {data?.info?.map((item: any, i: number) => (
          <p key={i} className={styles.item}>
            <span className={styles.itemTitle}>{item?.title}</span>
            <span className={styles.itemText}>{item?.text}</span>
          </p>
        ))}
      </div>
      <div className={styles.desc}>
        {data.desc && (
          <p className={styles.desc_info}>
            <span className={styles.span1}>{data.desc[0]}</span>
            <span>{data.desc[1]}</span>
          </p>
        )}
        <div className={cs(styles.desc_detail)}>
          <Title
            className={styles.desc_detail_title}
            title={"更多详情"}
            isMore={false}
          ></Title>
          <div className={cs(styles.details)}>
            {data?.details?.map((item: any, i: number) => (
              <span key={i} className={styles.name}>
                {item}
              </span>
            ))}
          </div>
          {showMore && <div className={cs(styles.ps)}>{data.ps}</div> }
            {isBtnShowMore &&
              <div
              className={styles.showMore}
              onClick={() => onclickShow?.(!showMore)}
            >
              <span>{showInfo.text}</span>
              <IconFont className={showInfo.icon} />
           </div>
            }
        </div>
      </div>
    </section>
  );
};
export default Infomation;
