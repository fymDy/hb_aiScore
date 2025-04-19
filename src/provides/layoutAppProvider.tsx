/*
 * @Author: Mark
 * @Date: 2025-04-18 18:42:35
 * @LastEditTime: 2025-04-19 20:51:11
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutAppProvider.tsx
 */
import {

  useRef,
  useState,
  useMemo,
  Suspense,
} from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { LayoutAppContext } from "./inteface";
import { useElementReady } from "@/hooks/useElementReady";

export const LayoutAppContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const appElementRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  // const headerRef = useRef<HTMLDivElement>(null);

  const [headerEl, setHeaderEl] = useState<HTMLDivElement | null>(null);
  const { deviceType, fontSize, deviceRatio } = useDeviceType();
  const [downloadHeight, setDownloadHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isDownloadVisible, setDownloadVisible] = useState(true);

  
  // ✅ 初次挂载时测量 header
  const handleHeaderReady = useElementReady<HTMLDivElement>((el) => {
    console.log('el',el)
    setHeaderEl(el);
    setHeaderHeight(el.getBoundingClientRect().height);
  });
  
  const handleDownloadReady = useElementReady<HTMLDivElement>((el) => {
    if (isDownloadVisible) {
      setDownloadHeight(el.getBoundingClientRect().height);
    }
  });
 

    // ✅ 自动计算 content 区域高度
    const contentHeight = useMemo(() => {
      return window.innerHeight - headerHeight - downloadHeight;
    }, [headerHeight, downloadHeight]);

  return (
    <LayoutAppContext.Provider
      value={{
        appElementRef,
        handleHeaderReady,
        downloadRef,
        deviceType,
        fontSize,
        deviceRatio,
        headerHeight,
        downloadHeight,
        contentHeight,
        isDownloadVisible,
        setDownloadVisible,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </LayoutAppContext.Provider>
  );
};

