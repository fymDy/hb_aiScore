/*
 * @Author: Mark
 * @Date: 2025-04-22 17:41:35
 * @LastEditTime: 2025-06-08 13:39:17
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/types/navigation.d.ts
 */
import { To } from 'react-router-dom';
import { RouterPathUtil } from "@/router/routerPathUtil";

 type QueryValue = string | number | boolean | undefined | null;
/**
 * NavigateOptions 原始参数6个如下：
 * replace	boolean	是否使用 history.replace，默认是 push（false）, true，会替换掉当前页面，用户点击“返回”无法返回本页
 * state	any	携带额外参数，供目标页面通过 useLocation().state 获取
 * preventScrollReset	boolean	配合 <ScrollRestoration />，防止自动滚动回顶部
 * relative	"route" | "path"	路径中 ../ 的解析方式（更常见于 <Link />）
 * flushSync	boolean	使用 ReactDOM.flushSync() 来强制同步渲染更新（适用于强交互）
 * viewTransition	boolean	启用浏览器原生 View Transitions API（页面过渡动画）
 * ---------------以下为自定义扩展--------------
 * query：query以?开始的后面参数
 * hash： 用来锚点定位
*/

export interface IFNavigateOptionsPlus extends Omit<NavigateOptions, 'relative'> {
    query?: Record<string, QueryValue>;
    hash?: string;
  }

  export type NavigatePlusFn = (
    // to: To | number,
    to:RouterPathUtil | number | string,
    options?: IFNavigateOptionsPlus & { state?: any }
  ) => void;

  export type GoToFn = (to: To, options?: IFNavigateOptionsPlus) => void;

// declare global {
//     interface Window {
//       navigatePlus: NavigatePlusFn;
//       goTo: GoToFn;
//     }
  
//   }
declare global {
  var navigatePlus: NavigatePlusFn;
  var goTo: GoToFn;

  interface Window {
    navigatePlus: NavigatePlusFn;
    goTo: GoToFn;
  }
}

  export {}; // 让这个文件成为一个 module，避免全局污染