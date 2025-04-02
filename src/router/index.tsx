// src/router/routes.tsx
import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import routesJonFile from './routes.json';
import { IFRouterConfig } from './interface';
import AuthGuard from './authGuard'; // 导入 AuthGuard 组件


 const LazyComponentComp=(comp:React.LazyExoticComponent<React.ComponentType<any>>)=>{
return  lazy(() =>
    import(/* @vite-ignore */ `../views/${comp}`).catch((error) => {
      return { default: () => <Navigate to="/" replace /> };
    })
  )
};
const generateReactRouterRoutes = (config: IFRouterConfig[]) => {
  return config.map((route) => {
    const { component, path = '', children, author = false, index, ...rest } = route;
    // const LazyComponent = lazy(() => import(/* @vite-ignore */ `../views/${component}`)) ;
    const LazyComponent =LazyComponentComp(component) ;
    const element = component ? (
      <AuthGuard author={author}>
        <LazyComponent />
      </AuthGuard>
    ) : undefined;

    const reactRouterRoute: any = {
      path: path,
      element,
      ...rest,
    };

    if (children) {
      reactRouterRoute.children = children.map((childRoute: IFRouterConfig) => {
        const { path: childPath, index: isIndex, component: childComponent, author: childAuthor = false, ...childRest } = childRoute;
        const LazyChildComponent = lazy(() => import(/* @vite-ignore */ `../views/${childComponent}`));
        const childElement = childComponent ? (
          <AuthGuard author={childAuthor}>
              <LazyChildComponent />
          </AuthGuard>
        ) : undefined;

        return {
          path: isIndex ? '' : childPath,
          element: childElement,
          ...childRest,
        };
      });
    }

    return reactRouterRoute;
  });
};

const updatedRoutesConfig = [
  {
    path: '/',
    element: <Navigate to="/main" replace />,
  },
  ...routesJonFile,
];

const routes = createBrowserRouter(generateReactRouterRoutes(updatedRoutesConfig as IFRouterConfig[]));

export default routes;