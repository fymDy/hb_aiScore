
import React from 'react';
import styles from './index.module.scss';
import Login from './login';

const Account: React.FC = () => {
      return (
        <div className={styles.account}>
          <h1>account 页面</h1>
          <Login/>
        </div>
      );
    };

export default Account;
