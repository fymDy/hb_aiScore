
 import { IFRouterConfig } from '@/router/interface'
const routerConfig:IFRouterConfig[] = [
  {
    name: 'home', // 使用当前文件名作为路由路径
    path: '/home', // 使用完整路径作为自定义路径
    author: false, // 默认不需要登录验证
    // customPath:'/home/:type' //看后续接口定义：若同一个接口则使用动态路由，若不同接口则使用子路由
  }
];
export default routerConfig;
