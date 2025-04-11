import React from "react";
import styles from "./index.module.scss";

import cs from "classnames";

import LineProcess from "../Common/lineProcess";

const ChartLineTextComp: React.FC<{
  title:string
  item?:any
}> = ({title}) => {
  return (
    <div className={styles.ChartLineTextComp}>
    <span >1</span>
    <span >2</span>
    <span >3</span>
    <LineProcess
      title={title}
      leftValue={2}
      rightValue={5}
    />
    <span >1</span>
    <span >2 </span>
    <span >3</span>
  </div>
  );
};
export default ChartLineTextComp;
