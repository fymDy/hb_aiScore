/*
 * @Author: Mark
 * @Date: 2025-05-02 19:47:34
 * @LastEditTime: 2025-05-02 20:26:21
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutSwrProvider.tsx
 */

/*
 * @Author: Mark
 * @Date: 2025-04-19 12:07:42
 * @LastEditTime: 2025-04-19 22:02:34
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutHomeProvider.tsx
 */
import { useGetUserInfo } from "@/hooksApi/common"
import { LayoutSwrContext, LayoutSwrContextType } from "./inteface"
import { SWRConfig } from "swr"


export const LayoytSwrProvider:React.FC<LayoutSwrContextType>=({
    children
})=>{
    /**
     * todo:全局初始化公共接口在此调用
     */
     const res= useGetUserInfo()
     console.log('useGetUserInfo',res)
    return (
        <LayoutSwrContext.Provider value={{
           
        }}>
        <SWRConfig
              value={{
                //数据缓存有效期 默认不缓存
                // dedupingInterval: 0,
                //错误后自动请求间隔
                errorRetryInterval: 3000,
                //错误后自动重试次数
                errorRetryCount: 2,
                //页面重新激活后是否重新请求
                revalidateOnFocus: false
              }}
            >
                {children}
           </SWRConfig>
        
        </LayoutSwrContext.Provider>
    )
}   
