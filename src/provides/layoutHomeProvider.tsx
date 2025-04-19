
/*
 * @Author: Mark
 * @Date: 2025-04-19 12:07:42
 * @LastEditTime: 2025-04-19 16:44:04
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutHomeProvider.tsx
 */
import { RouterPathUtil } from "@/router/routerPathUtil"
import { createContext, useContext } from "react"

export interface LayoutHomeContextType{
    activeTabId:string,
    activeTabPath:RouterPathUtil,
    onClickJumpPage:(item:any)=>void,
}

export const LayoutHomeContext=createContext<LayoutHomeContextType | null >(null)

export const LayoytHomeContextProvider:React.FC<{
    activeTabId:string,
    activeTabPath:RouterPathUtil,
    onClickJumpPage:(item:any)=>void,
    children:React.ReactNode
}>=({
    activeTabId,
    activeTabPath,
    onClickJumpPage,
    children
})=>{
    return (
        <LayoutHomeContext.Provider value={{
            activeTabId,
            activeTabPath,
            onClickJumpPage
        }}>
            {children}
        </LayoutHomeContext.Provider>
    )
}   
export const useHomeContext=()=>{
    const ctx=useContext(LayoutHomeContext);
    if(!ctx){
        throw new Error('useHomeContext must be used within HomeContextType');
    }
    return ctx;
}