
    import React from 'react';
    import styles from './index.module.scss';
import { useLocationPlus } from '@/hooks/router/useLocationPlus';
import Football from './Football';

    const TeamDetails: React.FC = () => {
    const {params}=  useLocationPlus()
debugger
    const renderContent = () => {
      switch (params?.type) {
        case 'football':
          return <Football />;
        case 'baseball':
          return <div />;
        default:
          return <div>暂不支持的项目类型</div>;
      }
    };
    
          return (
            <div className={styles.teamDetails}>
              <h1>teamDetails 页面</h1>
              {renderContent()}
            </div>
          );
        };
    export default TeamDetails;
    