
    import { IFRouterConfig } from '@/router/interface'
    
    const routerConfig:IFRouterConfig[] = [
      {
        name: 'teamDetails', // 使用当前文件名作为路由路径
        path: '/teamDetails', // 使用完整路径作为自定义路径
        author: false, // 默认不需要登录验证
        // customPath:'/teamDetails/:type' //这里还是决定用子路由而不是动态路由，因为不同球类型的队伍详情结构相差有点大
      }
    ];
    export default routerConfig;
    