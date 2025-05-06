/*
 * @Author: Mark
 * @Date: 2025-03-30 21:51:34
 * @LastEditTime: 2025-05-06 16:09:54
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/router/interface.ts
 */


/*
 * @Author: Mark
 * @Date: 2025-03-28 19:52:06
 * @LastEditTime: 2025-03-30 16:57:31
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /webmatrix-new-20250322/src/router/interface.ts
 */
export interface IFRouterConfig {
    /**
     * @zh 跟文件夹路径保持同名
     */
    name?: string

    /**
     * @zh 当前路由是否需要登录鉴权
     */
    author?: boolean

    /**
     * @zh 路由路径，建议无需配置，根据文件路径自动生成，当有动态路由需求时，可配置
     * xx/xxx/xx:xx?
     */
    path?: string
    /**
     * @zh 子路由 true :默认跳转路由
     */
    index?: boolean,
    /**
     * 子路由
     */
    children?:any
     /**
     * @zh 注意该字段只有当 lazyLoad = true时才生效 ，通常来说无需配置
     */
    component?: any

    /**
     * @zh 填写了自定义路径，则自定义路径展示路由
     */
    customPath?: string
    // /**
    //  * @zh 当有多级子路由时 该字段有用 可指定默认展示子路由
    //  * -views
    //  *   -home
    //  *      -testPage1
    //  *      -testPage2
    //  * 如果defaultRoute = 'testPage2'
    //  * 那么默认展示的路由则是home下的testPage2
    //  */
    // defaultRoute?: string

    // /**
    //  * @zh 指定该路由是否是根路由 
    //  * -views
    //  *   -home
    //  *     -testPage1
    //  *     -testPage2
    //  * 如果testPage1 ，testPage2
    //  * 不设置isRootRouter = true，那么testPage1 与 ，testPage2是home的子路由
    //  * 如果设置isRootRouter = true，那么testPage1 与 ，testPage2与home一样是一级路由
    //  */
    // isRootRouter?: boolean

    // /**
    //  * @zh 当前路由是否需要懒加载，一般来说不需要设置，只有首屏内容需要设置该字段，用于首屏内容更快加载展示
    //  */
    // lazyLoad?: boolean

    // /**
    //  * 指定父路由
    //  */
    // parentRouterName?: string
  
}


