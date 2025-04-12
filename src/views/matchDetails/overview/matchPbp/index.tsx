/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-12 20:44:22
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/matchPbp/index.tsx
 */
import cs from "classnames";
import styles from "./index.module.scss";
import SvgIcon from "@/components/Common/IconSvg";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
const MatchPbp = () => {
  return (
    <div className={styles.match_pbp}>
      <div className={styles.match_pbp_top}>
        <IComp
          className={cs(
            styles.match_pbp_top_icon,
            EnumIconFontType.iconyellowcard
          )}
        />
        <span className={styles.time}>38'</span>
      </div>
  
        <div className={styles.match_pbp_content}>
            {
                [1,2,3]?.map((item,i)=>(
                   <div key={i} className={`${styles.content} `}>
                        <span className={styles.time}>38'</span>
                        <div className={styles.match_num}>
                            <SvgIcon name={EnumIconFontType.icongoal} size={14} />
                            <span className={styles.num}>3-0</span>
                        </div>
                   </div>
                ))
            }
        </div>
     
    </div>
  );
};
export default MatchPbp;
