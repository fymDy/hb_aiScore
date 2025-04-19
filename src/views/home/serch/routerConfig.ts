
 import { IFRouterConfig } from '@/router/interface'
const routerConfig:IFRouterConfig[] = [
  {
    name: 'serch', // 使用当前文件名作为路由路径
    path: '/home/serch', // 使用完整路径作为自定义路径
    author: false, // 默认不需要登录验证
    customPath: '/home/serch/:type', // 是否默认跳转,
  }
];
export default routerConfig;
