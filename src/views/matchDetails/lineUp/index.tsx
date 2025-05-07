import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import Starting from "./starting";
import {matchLineupData} from "./data";


const LineUp: React.FC = () => {
  

  
  return (
    <div className={styles.LineUp}>
        <Starting data={matchLineupData}/>

    </div>
  );
};

export default LineUp;
