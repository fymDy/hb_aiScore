/*
 * @Author: Mark
 * @Date: 2025-03-31 20:25:18
 * @LastEditTime: 2025-05-06 17:29:32
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/router/authGuard.tsx
 */
// src/router/AuthGuard.tsx
import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RouterPathUtil } from './routerPathUtil';

// 假设您有一个判断用户是否登录的函数
const isAuthenticated = () => {
  // 这里实现您的登录校验逻辑，例如检查 token 是否存在等
  // 示例：
  const token = localStorage.getItem('authToken');
  return !!token;
};

interface AuthGuardProps {
  author: boolean;
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ author, children }) => {
  const location = useLocation();

  if (author && !isAuthenticated()) {
    // 如果需要登录校验但用户未登录，则重定向到登录页面
    return <Navigate to={RouterPathUtil.ACCOUNT} state={{ from: location }} replace />;
  }

  // 否则，渲染子组件
  return <>{children}</>;
};

export default AuthGuard;