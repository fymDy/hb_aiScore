/*
 * @Author: Mark
 * @Date: 2025-04-04 16:58:07
 * @LastEditTime: 2025-04-04 16:59:20
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/LayoutContext/index.tsx
 */
// src/context/LayoutContext.tsx
import { createContext, Suspense, useContext, useRef } from 'react';
import { useDeviceType } from '@/hooks/useDeviceType';
import { LayoutContextType } from '@/types/common';

export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const appElementRef = useRef<HTMLDivElement>(null);
  const { deviceType } = useDeviceType();

  return (
    <LayoutContext.Provider value={{
      appElement: appElementRef,
      deviceType: deviceType,
    }}>
          <Suspense fallback={<div>Loading...</div>}>
      {children}
      </Suspense>
    </LayoutContext.Provider>
  );
};

export const useApp = () => {
  const layoutApp = useContext(LayoutContext);
  if (!layoutApp) {
    throw new Error('useApp must be used within an LayoutContext')
  }
  return layoutApp;
};