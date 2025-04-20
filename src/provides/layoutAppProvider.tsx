/*
 * @Author: Mark
 * @Date: 2025-04-19 21:27:42
 * @LastEditTime: 2025-04-20 16:44:49
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutAppProvider.tsx
 */
import React, {  useMemo, useRef, useState } from "react";
import { useElementReady } from "@/hooks/useElementReady";
import { LayoutAppContext,  LayoutSysContextType } from "./inteface";
import DownloadComp from "@/components/DownloadComp";
import {  pxToRem } from "@/utils/common";
import { useAppSys } from "@/hooks/useAppSys";

const LayoutAppContextProvider: React.FC<LayoutSysContextType> = ({
  children,
}) => {
   const {viewportHeight}= useAppSys();

    const FIXED_DOWNLOAD_HEIGHT = 48; // px
   const appElementRef = useRef<HTMLDivElement | null>(null);
   const [downLoadHeight, setDownLoadHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isDownloadVisible, setDownloadVisible] = useState(true);

  const handleDownLoadReady = useElementReady<HTMLDivElement>((el) => {
    setDownLoadHeight(el.getBoundingClientRect().height);
  });

  const handleHeaderReady = useElementReady<HTMLDivElement>((el) => {
    setHeaderHeight(el.getBoundingClientRect().height);
  });
  const appHeight = useMemo(() => {
    return viewportHeight - (isDownloadVisible ? FIXED_DOWNLOAD_HEIGHT : 0);
  }, [ viewportHeight,isDownloadVisible]);
  
  const contentHeight = useMemo(() => {
      const h= viewportHeight - headerHeight - (isDownloadVisible ? FIXED_DOWNLOAD_HEIGHT : 0);
      return pxToRem(h)
  }, [viewportHeight,headerHeight, isDownloadVisible]);


  return (
    <LayoutAppContext.Provider
      value={{
        handleHeaderReady,
        handleDownLoadReady,
        headerHeight,
        contentHeight,
        isDownloadVisible,
        setDownloadVisible,
      }}
    >
      <div ref={appElementRef} style={{ height:pxToRem(viewportHeight)}} className="app-layout">
        {isDownloadVisible && (
          <div style={{ height: pxToRem(downLoadHeight) }}  className="app-download">
                <DownloadComp />
          </div>
        )}
        <div className="app-content" style={{ height:pxToRem(appHeight) }}>
          {children}
        </div>
      </div>
    </LayoutAppContext.Provider>
  );
};

export default LayoutAppContextProvider;
