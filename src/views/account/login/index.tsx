
import React from 'react';
import styles from './index.module.scss';
import { useGetUserDetail, useGetUserInfo, useUpdateUser } from '@/hooksApi/common';

const Login: React.FC = () => {
  const { data:dataDetails } = useGetUserDetail({ name: '123' ,age:20})
  const { data:dataUser } = useGetUserInfo()
  const { trigger, isMutating, data, error } = useUpdateUser()
  const onSubmit = () => {
    trigger({ name: 'Mark', age: 25 })
  }

      return (
        <div className={styles.login}>
          <div onClick={onSubmit}>用户名：{dataUser?.name}</div>
 
        </div>
      );
    };

export default Login;
