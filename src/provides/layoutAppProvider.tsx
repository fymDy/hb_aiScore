/*
 * @Author: Mark
 * @Date: 2025-04-19 21:27:42
 * @LastEditTime: 2025-04-20 14:19:48
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutAppProvider.tsx
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useElementReady } from "@/hooks/useElementReady";
import { LayoutAppContext,  LayoutSysContextType } from "./inteface";
import DownloadComp from "@/components/DownloadComp";
import { pxToRem } from "@/utils/common";

const LayoutAppContextProvider: React.FC<LayoutSysContextType> = ({
  children,
}) => {
    const FIXED_DOWNLOAD_HEIGHT = 48; // px
   const appElementRef = useRef<HTMLDivElement | null>(null);
  const [downloadHeight, setDownloadHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isDownloadVisible, setDownloadVisible] = useState(true);

  const handleHeaderReady = useElementReady<HTMLDivElement>((el) => {
    setHeaderHeight(el.getBoundingClientRect().height);
  });

//   const handleDownloadReady = useElementReady<HTMLDivElement>((el) => {
//     if (isDownloadVisible) {
//         const rect=el.getBoundingClientRect().height
//         setDownloadHeight(rect);
//     }
//   });


  const contentHeight = useMemo(() => {
      const h= window.innerHeight - headerHeight - (isDownloadVisible ? FIXED_DOWNLOAD_HEIGHT : 0);
      console.log('headerHeight',headerHeight)
      return pxToRem(h)
  }, [headerHeight, isDownloadVisible]);

  const appHeight = useMemo(() => {
    const h= window.innerHeight - (isDownloadVisible ? FIXED_DOWNLOAD_HEIGHT : 0);
    return pxToRem(h)
  }, [ isDownloadVisible]);

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
      <div ref={appElementRef} style={{ height: '100%' }} className="app-layout">
        {isDownloadVisible && (
          <div  style={{ height: FIXED_DOWNLOAD_HEIGHT }}  className="app-download">
                <DownloadComp />
          </div>
        )}
        <div className="app-content" style={{ height:appHeight }}   >
          {children}
        </div>
      </div>
    </LayoutAppContext.Provider>
  );
};

export default LayoutAppContextProvider;
