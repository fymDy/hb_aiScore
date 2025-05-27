/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-05-27 11:38:53
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/InfomationDescComp/index.tsx
 */
import styles from "./index.module.scss";
import cs from "classnames";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import {  useMemo, useState } from "react";
import HtmlDomComp from "@/components/HtmlDomComp";
const InfomationDescComp: React.FC<{
  desc1: string;
  desc2: string;
  desc3: string;
  isBtnShowMore?: boolean; //提供不需要显示展示更多/隐藏文本的控制
  onclickShow?: (v: boolean) => void;
}> = ({
  desc1,
  desc2,
  desc3,
  isBtnShowMore = true,
}) => {
    const [showMore,setShowMore]=useState(false)
  const showInfo = useMemo(() => {
    return {
      text: showMore ? "隐藏" : "展示更多",
      icon: showMore
        ? EnumIconFontType.icon_shangla
        : EnumIconFontType.icon_xiala,
    };
  }, [showMore]);
  return (
    <section className={styles.InfomationDescComp}>
      {desc1 && <HtmlDomComp html={desc1} />}
      <div className={cs(styles.desc_detail)}>
        <HtmlDomComp className={cs(styles.details)} html={desc2} />
        {showMore && <HtmlDomComp className={cs(styles.ps)} html={desc3} />}
        {isBtnShowMore && (
          <div
            className={styles.showMore}
            onClick={() => setShowMore?.(!showMore)}
          >
            <span>{showInfo.text}</span>
            <IconFont className={showInfo.icon} />
          </div>
        )}
      </div>
    </section>
  );
};
export default InfomationDescComp;
