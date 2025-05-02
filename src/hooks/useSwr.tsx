/*
 * @Author: Mark
 * @Date: 2025-05-02 19:57:36
 * @LastEditTime: 2025-05-02 19:59:10
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/useSwr.tsx
 */
/*
 * @Author: Mark
 * @Date: 2025-04-19 21:05:58
 * @LastEditTime: 2025-04-19 22:19:02
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/useAppSys.tsx
 */

import { LayoutSwrContext } from "@/provides/inteface";
import { useContext } from "react";

const useSwr=()=>{
    const ctx=useContext(LayoutSwrContext);
    if(!ctx){
        throw new Error('useSwrContext must be used within HomeContextType');
    }
    return ctx;
}
  export { useSwr }