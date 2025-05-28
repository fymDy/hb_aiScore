import React, { useMemo } from "react";
import styles from "./index.module.scss";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import OverView from "./overview";
import Standings from "./standings";
import Match from "./match";
import Champion from "./champion";
import Transfer from "./transfer";
import LineUp from "./lineUp";

const Football: React.FC<{}> = ({}) => {
  const { hashValue, state } = useLocationPlus();

  const RenderComp = (
    <>
      {hashValue === "overview" && <OverView />}
      {hashValue === "standings" && <Standings />}
      {hashValue === "match" && <Match />}
      {hashValue === "lineUp" && <LineUp />}
      {hashValue === "champion" && <Champion />}
      {hashValue === "transfer" && <Transfer />}
    </>
  );
  return <div className={styles.Football}>{RenderComp}</div>;
};
export default Football;
