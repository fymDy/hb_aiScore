// src/router/routes.tsx
import React, { lazy } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import routesJonFile from './routes.json';
import { IFRouterConfig } from './interface';
import AuthGuard from './authGuard'; // 导入 AuthGuard 组件
import { RouterPathUtil } from './routerPathUtil';


 const LazyComponentComp=(comp:React.LazyExoticComponent<React.ComponentType<any>>)=>{
return  lazy(() =>
    import(/* @vite-ignore */ `../views/${comp}`).catch((error) => {
      console.error('LazyComponentComp 懒加载失败:', error);
      return { default: () => <div>页面加载失败</div> };
    })
  )
};
const generateReactRouterRoutes = (config: IFRouterConfig[]) => {
  return config.map((route) => {
    const { component, path, children, author = false, index,customPath,fullPath,name,  ...rest } = route;
    const LazyComponent = component  ? LazyComponentComp(component): null;
    const element = LazyComponent ? (
      <AuthGuard author={author}>
        <LazyComponent />
      </AuthGuard>
    ) : undefined;

    const reactRouterRoute: any = {
      // path: index ? undefined : (customPath ? customPath : path),
      ...(index ? { index: true } : { path: customPath || path }),
      element,
      ...rest,
    };
    if (children?.length && !index) {
      // reactRouterRoute.children = generateReactRouterRoutes(children.map((childRoute:IFRouterConfig) => {
      //   const { path: childPath, index: isIndex, customPath: childCustomPath } = childRoute;
      //   return {
      //     ...childRoute,
      //     path: isIndex ? undefined : (childCustomPath  ? childCustomPath : childPath),
      //   };
      // }));
      reactRouterRoute.children = generateReactRouterRoutes(children);
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
        element: <Navigate to={RouterPathUtil.HOME} replace />
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