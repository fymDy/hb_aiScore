
    import React from 'react';
    import styles from './index.module.scss';
import { matchData } from '../match_data';
import { useLocationPlus } from '@/hooks/router/useLocationPlus';
import Chat from './chat';
import Data from './data';
import LineUp from './lineUp';
import Match from './match';
import Odds from './odds';
import OverView from './overview';
import Table from './table';

    const Football: React.FC = () => {
       const {hashValue,state}= useLocationPlus();
      const RenderComp =  (
        <>
          {hashValue === "overview" && <OverView />}
          {hashValue === "chat"  && <Chat />}
          {hashValue === "odds"   && <Odds />}
          {hashValue === "data" && <Data teamsData={matchData.teams} />}
          {hashValue === "lineUp"   && <LineUp />}
          {hashValue === "match"  && <Match />}
          {hashValue === "table"  && <Table />}
        </>
    )
          return (
            <div className={styles.football}>
              {RenderComp}
            </div>
          );
        };
    export default Football;
    