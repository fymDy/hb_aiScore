
import React from 'react';
import styles from './index.module.scss';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import Test from './test';
import Testtest from './testtest';


const Serch: React.FC = () => {
    const  state:any = useParams()
      return (
        <div className={styles.serch}>
          {state.type=='test' && <Test/>}
          {state.type=='testtest' && <Testtest/>}
        </div>
      );
    };

export default Serch;
