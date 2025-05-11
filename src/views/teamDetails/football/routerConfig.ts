
    import { IFRouterConfig } from '@/router/interface'
    
    const routerConfig:IFRouterConfig[] = [
      {
        name: 'football', // 使用当前文件名作为路由路径
        path: '/teamDetails/football', // 使用完整路径作为自定义路径
        author: false, // 默认不需要登录验证
      }
    ];
    export default routerConfig;
    