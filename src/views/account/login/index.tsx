
import React from 'react';
import styles from './index.module.scss';
import { useGetUserDetail, useGetUserInfo, useUpdateUser } from '@/api/user';

const Login: React.FC = () => {
  const { data:dataDetails } = useGetUserDetail({ id: '123'})
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
