import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { IFSearchResult } from "@/views/home/interface";
import BtnGroup from "@/components/Common/btnGroup";
import Title from "../../_components/title";
import League from "./league";
import { scorerList, standingsGrouped } from "./data";
import { StandingGroup, StandingTeam } from "./enum";
import Scorer from "./scorer";


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
        name: "主場",
        isActive: activeFilterId === "home",
      },
      {
        id: "away",
        name: "客場",
        isActive: activeFilterId === "away",
      }
    ];

    return data;
  }, [activeFilterId]);
  const resLeagueData=useMemo<StandingTeam[]>(()=>{
   return standingsGrouped?.filter((item)=>item.type===activeFilterId)?.[0]?.list ?? []
  },[activeFilterId])

  return (
    <article className={styles.Table}>
      <League data={resLeagueData} filterData={filterData} onclickFilter={(id: string) => setActiveFilterId(id)} matchName={'亞冠精英資格賽'}/>
      <Scorer data={scorerList}/>
    </article>
  );
};

export default Table;
