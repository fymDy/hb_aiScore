import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import Starting from "./starting";
import {matchLineupData} from "./data";
import { EventsAllData } from "../match_data";
import EventsAll from "../_components/eventsAll";


const LineUp: React.FC = () => {
  

  
  return (
    <div className={styles.LineUp}>
        <Starting data={matchLineupData}/>
        <EventsAll className={styles.eventsAll_wrap} data={EventsAllData}/>
    </div>
  );
};

export default LineUp;
