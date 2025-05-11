
    import React from 'react';
    import styles from './index.module.scss';
import { Outlet } from 'react-router-dom';

    const TeamDetails: React.FC = () => {
          return (
            <div className={styles.teamDetails}>
              <h1>teamDetails 页面</h1>
              <Outlet/>
            </div>
          );
        };
    export default TeamDetails;
    