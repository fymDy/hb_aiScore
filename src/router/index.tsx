// src/router/routes.tsx
import React, { lazy } from 'react';
import { createBrowserRouter, HashRouter, Navigate, RouterProvider } from 'react-router-dom';
import routesJonFile from './routes.json';
import { IFRouterConfig } from './interface';
import AuthGuard from './authGuard'; // 导入 AuthGuard 组件
import { RouterPathUtil } from './routerPathUtil';
const modules = import.meta.glob('../views/**/index.tsx');

//  const LazyComponentComp=(comp:React.LazyExoticComponent<React.ComponentType<any>>)=>{
// return  lazy(() =>
//     import(`../views/${comp}`).catch((error) => {
//       console.error('LazyComponentComp 懒加载失败:', error);
//       return { default: () => <div>页面加载失败</div> };
//     })
//   )
// };
const LazyComponentComp = (comp: string): React.LazyExoticComponent<React.ComponentType<any>> => {
   const importPath = `../views/${comp}.tsx`; // JSON 中的 component 是 "home/index"

  const loader = modules[importPath];

  if (!loader) {
    console.error('未找到组件路径:', comp);
    return lazy(() =>
      Promise.resolve({
        default: () => <div>页面未找到：{comp}</div>,
      })
    );
  }

return lazy(() =>
  loader().catch((err) => {
    console.error('LazyComponentComp 懒加载失败:', err);
    return Promise.resolve({ default: () => <div>页面加载失败</div> });
  }) as Promise<{ default: React.ComponentType<any> }>
);
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
      ...(index ? { index: true } : { path: customPath || path }),
      element,
      ...rest,
    };
    if (children?.length && !index) {
      reactRouterRoute.children = generateReactRouterRoutes(children);
    }

    return reactRouterRoute;
  });
};
/**
 * 这种事不使用index的情况，<Layout/>组件去指定具体跳转路径
 */
// const updatedRoutesConfig = [
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       ...routesJonFile
//     ]
//   },
//   {
//     path: '*',
//     element: <Navigate to="/" replace />,
//   },
// ];
/**
 * 这种是使用index的情况，根据routerConfig.ts中指定index为默认路由的结构
 */
const updatedRoutesIndexConfig = [
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

const routes =generateReactRouterRoutes(updatedRoutesIndexConfig as IFRouterConfig[])
console.log('last routes--',routes)
 const resRoutes=createBrowserRouter(routes);

const AppRouter = () => {
   return <RouterProvider router={resRoutes}   />
};

export default AppRouter;