
 import { IFRouterConfig } from '@/router/interface'
const routerConfig:IFRouterConfig[] = [
  {
    name: 'tennis', // 使用当前文件名作为路由路径
    customPath: '/main/tennis', // 使用完整路径作为自定义路径
    author: false, // 默认不需要登录验证
    index: false, // 是否默认跳转
  }
];
export default routerConfig;
