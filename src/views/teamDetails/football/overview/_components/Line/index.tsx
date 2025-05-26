import React, { useMemo } from "react";
import styles from "./index.module.scss";

import { TeamBasicInfo } from "@/views/teamDetails/_types";


const Football: React.FC<{
  data:TeamBasicInfo
}> = ({data}) => {
  
  const getSquadType=(type:string)=>{
    let str=''
    switch (type) {
      case 'first':
        str='一线队'
        break;
      case 'reserve':
        str='预备队'
        break;
        case 'youth':
        str='青年队'
        break;
    }
    return str ;
  }
  const resData=useMemo(()=>{
     return {
      squadType:getSquadType(data?.squadType),
      foreignPlayerCount:`${data?.foreignPlayerCount} 外援`,
      localPlayerCount:`${data?.localPlayerCount} 本土球员`
     }
  },[data])

  return (
    <div className={styles.LineProcess_title}>
           <label>{resData.foreignPlayerCount }</label>
           <span>{resData.squadType}</span>
           <label>{resData.localPlayerCount }</label>
  </div>
  );
};
export default Football;
