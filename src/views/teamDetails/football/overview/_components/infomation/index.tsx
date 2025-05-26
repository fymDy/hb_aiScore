/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-26 20:36:16
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/overview/_components/infomation/index.tsx
 */
import styles from "./index.module.scss";
import cs from "classnames";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import { useMemo, useState } from "react";
import HtmlDomComp from "@/components/HtmlDomComp";
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
        {data.desc && <HtmlDomComp html={data.desc} />}
        <div className={cs(styles.desc_detail)}>
           <HtmlDomComp className={cs(styles.details)} html={data.details} />
          {showMore &&   <HtmlDomComp  className={cs(styles.ps)} html={data.ps} /> }
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
