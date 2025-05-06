// src/router/routes.tsx
import React, { lazy } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import routesJonFile from './routes.json';
import { IFRouterConfig } from './interface';
import AuthGuard from './authGuard'; // 导入 AuthGuard 组件
import { RouterPathUtil } from './routerPathUtil';
import { divide } from 'lodash';
import LayoutApp from '@/layout/appRouter';

 const LazyComponentComp=(comp:React.LazyExoticComponent<React.ComponentType<any>>)=>{
return  lazy(() =>
    import(/* @vite-ignore */ `../views/${comp}`).catch((error) => {
     
    })
  )
};
const generateReactRouterRoutes = (config: IFRouterConfig[]) => {
  return config.map((route) => {
    const { component, path, children, author = false, index,customPath, ...rest } = route;
    const LazyComponent =LazyComponentComp(component) ;
    const element = component ? (
      <AuthGuard author={author}>
        <LazyComponent />
      </AuthGuard>
    ) : undefined;

    const reactRouterRoute: any = {
      path: index ? '' : (customPath ? customPath : path),
      element,
      ...rest,
    };
    if (children) {
      reactRouterRoute.children = generateReactRouterRoutes(children.map((childRoute:IFRouterConfig) => {
        const { path: childPath, index: isIndex, customPath: childCustomPath } = childRoute;
        return {
          ...childRoute,
          path: isIndex ? '' : (childCustomPath  ? childCustomPath : childPath),
        };
      }));
    }

    return reactRouterRoute;
  });
};

const updatedRoutesConfig = [
  {
    path: '/',
    children:[
      {
        index: true,
        element: <Navigate to="home" replace />
      },
      ...routesJonFile
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

const routes =generateReactRouterRoutes(updatedRoutesConfig as IFRouterConfig[])
console.log('last routes--',routes)
export const resRoutes=createBrowserRouter(routes);

const AppRouter = () => {
   return <RouterProvider router={resRoutes}   />
};

export default AppRouter;