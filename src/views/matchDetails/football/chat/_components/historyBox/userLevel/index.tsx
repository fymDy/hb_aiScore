import React from "react";
import styles from "./index.module.scss";
import cs from 'classnames'
import IconSprite from "@/components/Common/IconSprite";
import { EnumPlayerLevel } from "../../../enum";
import ISpan from "@/components/Common/ISpan";

const UserLevel: React.FC<{
  level:number
}> = ({
  level
}) => {

  /**
   * todo: 级别使用背景色及vipLogo图暂不明确
   */
  const getIcon=(level:number)=>{
    if(level<10){
      return EnumPlayerLevel.Level10
    }else if(level<20){
      return EnumPlayerLevel.Level25
    }else if(level<30){
      return EnumPlayerLevel.Level31
    }else if(level<40){
      return EnumPlayerLevel.Level41
    }else if(level<50){
      return EnumPlayerLevel.Level47
    }else if(level<60){
      return EnumPlayerLevel.Level63
    }
    return EnumPlayerLevel.Level1
  }
  
  return (
      <div  className={cs(styles.UserLevel,
          {[styles.UserLevel10]:level<10},
          {[styles.UserLevel20]:(level>9 && level<20)},
          {[styles.UserLevel30]:(level>19 && level<30)},
          {[styles.UserLevel40]:(level>29 && level<40)},
          {[styles.UserLevel50]:(level>39 && level<50)},
          {[styles.UserLevel60]:(level>49 && level<60)}
      )}>
            <div  className={cs(styles.icon)}>
                <IconSprite  name={getIcon(level)} />
            </div>
            <ISpan className={cs(styles.level)} name={`LV.${level}`} />
      </div>
  );
};

export default UserLevel;
