import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { IFSearchResult } from "@/views/home/interface";
import BtnGroup from "@/components/Common/btnGroup";
import Title from "../_components/title";
import League from "./league";
import { standingsGrouped } from "./data";
import { StandingGroup, StandingTeam } from "./enum";


const Table: React.FC = () => {
   const [activeFilterId, setActiveFilterId] = useState("all");
const filterData: IFSearchResult[] = useMemo(() => {
    const data = [
      {
        id: "all",
        name: "全部",
        isActive: activeFilterId === "all",
      },
      {
        id: "home",
        name: "主场",
        isActive: activeFilterId === "home",
      },
      {
        id: "away",
        name: "客场",
        isActive: activeFilterId === "away",
      }
    ];

    return data;
  }, [activeFilterId]);

  const resLeagueData=useMemo<StandingTeam[]>(()=>{
   return standingsGrouped?.filter((item)=>item.type===activeFilterId)?.[0]?.list ?? []
  },[activeFilterId])

  return (
    <div className={styles.Table}>
     <BtnGroup
        className={styles.btnGroupr_wrap}
        dataList={filterData}
        onclick={(id: string) => setActiveFilterId(id)}
      />
      <League data={resLeagueData}/>
    </div>
  );
};

export default Table;
