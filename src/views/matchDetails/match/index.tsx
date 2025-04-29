import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { IFSearchResult } from "@/views/home/interface";
import BtnGroup from "@/components/Common/btnGroup";
import IComp from "@/components/IComp";
import { EnumIconFontType } from "@/enum/enumIconFontType";
import SelectNum from "@/components/Common/selectNum";


const Match: React.FC = () => {
  const [activeFilterId, setActiveFilterId] = useState("0");
    const [activeNum, setActiveNum] = useState(6);
    const [isShowNum, setShowNum] = useState(false);
  const filterData: IFSearchResult[] = useMemo(() => {
     const data = [
       {
         id: "0",
         name: "交锋",
         isActive: activeFilterId === "0",
       },
       {
         id: "1",
         name: "馬都拉聯",
         isActive: activeFilterId === "1",
       },
       {
         id: "2",
         name: "佩斯凱迪瑞",
         isActive: activeFilterId === "2",
       }
     ];
 
     return data;
   }, [activeFilterId]);
  
  return (
    <div className={styles.Match}>
      <BtnGroup dataList={filterData} onclick={(id: string) => setActiveFilterId(id)} />
 

       <div className={styles.selectNum_Wrap}>
          <div className={styles.logo_box}>
              <div className={styles.logo}>
                <img src={'https://img0.aiscore.com/basketball/team/de8eeac1d5e6719368776db77b2aa18d.png!w250'} />
              </div>
              <span className={styles.name}>交鋒</span>
          </div>
          <SelectNum isShowNum={isShowNum} data={[6,12,18,24]} activeNum={activeNum} 
            onclick={()=>setShowNum(!isShowNum)}
            onclickNum={(i:number)=>{
              setActiveNum(i)
              setShowNum(!isShowNum)
            }}
          />
        </div>
    </div>
  );
};

export default Match;
