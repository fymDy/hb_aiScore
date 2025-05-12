import React from "react";
import styles from "./index.module.scss";
import cs from 'classnames'

import { ChatMessage } from "../../enum";
import UserLevel from "./userLevel";
import ISpan from "@/components/Common/ISpan";

const HistoryBox: React.FC<{
  data:ChatMessage[]
}> = ({data}) => {


  
  return (
      <ul className={styles.HistoryBox}>
           {
            data?.map((item:ChatMessage,i:number)=>(
              <li key={i} className={styles.item}>
                  <UserLevel level={item?.level}/>
                  <div>
                    <ISpan className={styles.username} name={`${item?.username}:`}/>
                    <ISpan name={item?.message}/>
                  </div>
              </li>
            ))
           }
      </ul>
  );
};

export default HistoryBox;
