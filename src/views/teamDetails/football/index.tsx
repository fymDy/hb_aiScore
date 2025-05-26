import React, { useMemo } from "react";
import styles from "./index.module.scss";
import TeamHeader from "../_components/teamHeader";
import { useNavigatePlus } from "@/hooks/router/useNavigatePlus";
import { mockTeamBasicInfo } from "../_types/data";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import StepComp from "@/components/StepComp";
import OverView from "./overview";
import Table from "./table";
import Match from "./match";
import Champion from "./champion";
import Transfer from "./transfer";
import LineUp from "./lineUp";




const Football: React.FC<{}> = ({}) => {
  const { hashValue, state } = useLocationPlus();




const RenderComp =  (
        <>
          {hashValue === "overview" && <OverView />}
          {hashValue === "table"  && <Table />}
           {hashValue === "match"  && <Match />}
            {hashValue === "lineUp"   && <LineUp />}
           {hashValue === "champion"  && <Champion />}
             {hashValue === "transfer"   && <Transfer />}
        
        </>
    )
  return (
    <div className={styles.Football}>
      {RenderComp}
    </div>
  );
};
export default Football;
