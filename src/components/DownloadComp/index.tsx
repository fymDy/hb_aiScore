import { useApp } from "@/hooks/useApp";
import Download from "./Download";

/*
 * @Author: Mark
 * @Date: 2025-04-18 19:41:08
 * @LastEditTime: 2025-05-03 11:47:42
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/DownloadComp/index.tsx
 */
const DownloadComp = () => {
    const {isDownloadVisible, setDownloadVisible } = useApp(); // ✅ Provider 内部调用 useApp，没问题
  
    return <Download onClose={() => setDownloadVisible(!isDownloadVisible)} />;
  };
  export default DownloadComp