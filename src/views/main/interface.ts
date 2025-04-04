import { RouterPathUtil } from "@/router/routerPathUtil";

/*
 * @Author: Mark
 * @Date: 2025-04-04 19:37:29
 * @LastEditTime: 2025-04-04 21:04:45
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/main/interface.ts
 */
export interface IFTab{
    id:string,
    path:RouterPathUtil,
    name:string,
    iconClass:string,
    matchNum:number,
    isActive:boolean,
    // onClick?:(i:number)=>void
  }
  export interface IFTabs{
    menuData:IFTab[]
  
  }

  