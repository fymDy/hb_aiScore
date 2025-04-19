/*
 * @Author: Mark
 * @Date: 2025-04-19 21:27:42
 * @LastEditTime: 2025-04-19 22:07:40
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutAppProvider.tsx
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useElementReady } from "@/hooks/useElementReady";
import { LayoutAppContext, LayoutAppContextType, LayoutSysContextType } from "./inteface";
import DownloadComp from "@/components/DownloadComp";

const LayoutAppContextProvider: React.FC<LayoutSysContextType> = ({
  children,
}) => {
   const appElementRef = useRef<HTMLDivElement | null>(null);

  const [downloadHeight, setDownloadHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isDownloadVisible, setDownloadVisible] = useState(true);

  const handleHeaderReady = useElementReady<HTMLDivElement>((el) => {
    setHeaderHeight(el.getBoundingClientRect().height);
  });

  const handleDownloadReady = useElementReady<HTMLDivElement>((el) => {
    if (isDownloadVisible) {
      setDownloadHeight(el.getBoundingClientRect().height);
    }
  });

  const contentHeight = useMemo(() => {
    return window.innerHeight - headerHeight - (isDownloadVisible ? downloadHeight : 0);
  }, [headerHeight, downloadHeight, isDownloadVisible]);

  const appHeight = useMemo(() => {
    return window.innerHeight -  (isDownloadVisible ? downloadHeight : 0);
  }, [ downloadHeight, isDownloadVisible]);

  return (
    <LayoutAppContext.Provider
      value={{
        handleHeaderReady,
        downloadHeight,
        headerHeight,
        contentHeight,
        isDownloadVisible,
        setDownloadVisible,
      }}
    >
      <div ref={appElementRef} className="app-layout">
        {isDownloadVisible && (
          <div ref={handleDownloadReady} className="app-download">
                <DownloadComp />
          </div>
        )}
        <div className="app-content" style={{ height: appHeight }}>
          {children}
        </div>
       
      </div>
    </LayoutAppContext.Provider>
  );
};

export default LayoutAppContextProvider;
