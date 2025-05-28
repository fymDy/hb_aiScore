import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { mockGroupedTeamMatches } from "./_types/data";
import MatchList from "./_components/MatchList";

import MatchSwitch from "./_components/MatchSwitch";


const Match: React.FC = () => {
  const [showUpcoming, setShowUpcoming] = useState(false);
    
const switchData:any= useMemo(()=>{
        let obj;
        if(showUpcoming){
            obj={
                icon:'arrow_down_up',
                text:'收起接下來的比賽'
            }
        }else{
            obj={
                icon:'arrow_up_down',
                text:'顯示接下來的比賽'
            }
        }
        return obj
    },[showUpcoming])


  return (
    <div className={styles.Match}>
      {/* <CrossSwords classNameItem={styles.crossSwords_item} data={crossSwordsData}/> */}
      <MatchSwitch data={switchData} onClick={()=>setShowUpcoming(!showUpcoming)}/>
      <MatchList data={mockGroupedTeamMatches} showUpcoming={showUpcoming}  />
    </div>
  );
};

export default Match;
