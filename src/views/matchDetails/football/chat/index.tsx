import React from "react";
import styles from "./index.module.scss";

import cs from 'classnames'
import WriteBox from "./_components/writeBox";
import HistoryBox from "./_components/historyBox";
import { chatList } from "./data";

const Chat: React.FC = () => {
  
  return (
    <div className={styles.Chat}>
          <HistoryBox data={chatList}/>
          <WriteBox />
    </div>
  );
};

export default Chat;
