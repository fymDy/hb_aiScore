
    import { IFRouterConfig } from '@/router/interface'
    
    const routerConfig:IFRouterConfig[] = [
      {
        name: 'football', // 当前文件名
        path: 'football', // 使用当前文件名作为路径，routerV6的字路径不需要开头'/'
        fullPath: '/teamDetails/football', // 使用完整路径作为生成枚举路径
        author: false, // 默认不需要登录验证
      }
    ];
    export default routerConfig;
    