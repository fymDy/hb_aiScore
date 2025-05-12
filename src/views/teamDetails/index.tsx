
    import React from 'react';
    import styles from './index.module.scss';
import { useLocationPlus } from '@/hooks/router/useLocationPlus';
import LayoutOutlet from '@/layout/outlet';

    const TeamDetails: React.FC = () => {
    const {state}=  useLocationPlus()
      
    
          return (
            <div className={styles.teamDetails}>
              <h1>teamDetails 页面</h1>
              <LayoutOutlet />
            </div>
          );
        };
    export default TeamDetails;
    