import React from "react";
import styles from "./index.module.scss";
import IconFont from "@/components/Common/Iconfont";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import cs from 'classnames'

const WriteBox: React.FC = () => {
  return (
      <section className={styles.WriteBox}>
          <div  className={styles.write}>分享你的觀點</div>
          <div  className={styles.sendBox}>
            <IconFont className={cs(styles.iconSend,EnumIconFontType.iconsend)}/>
          </div>
      </section>
  );
};

export default WriteBox;
