
/*
 * @Author: Mark
 * @Date: 2025-04-19 12:07:42
 * @LastEditTime: 2025-04-19 22:02:34
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutHomeProvider.tsx
 */
import { createContext, useContext } from "react"
import { LayoutHomeContext, LayoutHomeContextType } from "./inteface"



export const LayoytHomeContextProvider:React.FC<LayoutHomeContextType>=({
    activeTabId,
    activeFilterId,
    onClickJumpPage,
    children
})=>{
    return (
        <LayoutHomeContext.Provider value={{
            activeTabId,
            activeFilterId,
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