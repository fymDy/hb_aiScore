/*
 * @Author: Mark
 * @Date: 2025-04-12 20:33:41
 * @LastEditTime: 2025-04-29 19:17:48
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/overview/playerRating/index.tsx
 */
import ImageComp from "@/components/imageComp";
import Image from "@/components/Common/Images";
import styles from "./index.module.scss";
import cs from "classnames";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import IComp from "@/components/IComp";
const PlayerRating = ({data}:any) => {
  return (
    <div className={styles.PlayerRating}>
           <div className={styles.left}>
                  <ImageComp className={styles.logo} imgSrc={'https://img0.aiscore.com/football/player/3b36f882cb724c23a66e00ea192b2140.png!w60'}/>
                  <span className={ cs(styles.name )}>{'马修其鸟'}</span>
                  <div className={styles.star_left}>
                    <IComp className={cs(styles.star_left_icon,EnumIconFontType.iconstar)}  name={'6.8'}></IComp>
                  </div>
           </div>
           <div className={styles.center}>
           <span className={ cs(styles.rating )}>{'球员评分'}</span>
           <div className={styles.cicle}>
              <IComp className={cs(EnumIconFontType.icon_youjiantou)} ></IComp>
              </div>
           </div>
           <div className={styles.right}>
                  <span className={ cs(styles.name )}>{'马修其鸟'}</span>
                  <div className={styles.star_right}>
                    <IComp className={cs(styles.star_right_icon,EnumIconFontType.iconstar)}  name={'7.8'}></IComp>
                  </div>
                  <Image className={styles.logo} imgSrc={'https://img0.aiscore.com/football/player/3b36f882cb724c23a66e00ea192b2140.png!w60'}/>
           </div>
  </div>
  );
};
export default PlayerRating;
