/*
 * @Author: Mark
 * @Date: 2025-04-18 18:42:35
 * @LastEditTime: 2025-04-18 19:17:53
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutAppProvider.tsx
 */
import {
    createContext,
    useContext,
    useRef,
    useState,
    useLayoutEffect,
    useMemo,
    useEffect,
    Suspense,
  } from 'react';
  import { useDeviceType, IFDeviceTypeInfo } from '@/hooks/useDeviceType';
  
  export interface LayoutAppContextType extends IFDeviceTypeInfo {
    appElementRef: React.RefObject<HTMLDivElement | null>;
    headerRef: React.RefObject<HTMLDivElement | null>;
    downloadRef: React.RefObject<HTMLDivElement | null>;
    headerHeight: number;
    downloadHeight: number;
    contentHeight: number;
    isDownloadVisible: boolean;
    setDownloadVisible: (visible: boolean) => void;
  }
  
  const LayoutAppContext = createContext<LayoutAppContextType | undefined>(undefined);
  
  export const LayoutAppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const appElementRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const downloadRef = useRef<HTMLDivElement>(null);
  
    const { deviceType, fontSize, deviceRatio } = useDeviceType();
  
    const [headerHeight, setHeaderHeight] = useState(0);
    const [downloadHeight, setDownloadHeight] = useState(0);
    const [isDownloadVisible, setDownloadVisible] = useState(true);
  
    // 动态计算高度
    const calculateHeights = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
      if (downloadRef.current && isDownloadVisible) {
        setDownloadHeight(downloadRef.current.getBoundingClientRect().height);
      } else {
        setDownloadHeight(0);
      }
    };
  
    useLayoutEffect(() => {
      calculateHeights();
    }, [isDownloadVisible]);
  
    useEffect(() => {
      const resizeObserver = new ResizeObserver(calculateHeights);
      headerRef.current && resizeObserver.observe(headerRef.current);
      downloadRef.current && resizeObserver.observe(downloadRef.current);
      return () => resizeObserver.disconnect();
    }, [isDownloadVisible]);
  
    const contentHeight = useMemo(() => {
      const viewHeight = window.innerHeight;
      return viewHeight - headerHeight - downloadHeight;
    }, [headerHeight, downloadHeight]);
  
    return (
      <LayoutAppContext.Provider
        value={{
          appElementRef: appElementRef,
          headerRef,
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
  
  export const useApp = () => {
    const ctx = useContext(LayoutAppContext);
    if (!ctx) {
      throw new Error('useApp must be used within LayoutContextProvider');
    }
    return ctx;
  };
  