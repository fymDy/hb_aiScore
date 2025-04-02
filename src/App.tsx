import { createContext, Suspense, useContext, useRef, useState } from 'react'

import routes from './router';
import { RouterProvider } from 'react-router-dom';
import { useDeviceType } from '@/hooks/useDeviceType';
import { LayoutContextType } from './types/common';

export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);


function App() {
  const appElementRef = useRef<HTMLDivElement>(null); 
  const {deviceType}=useDeviceType()
  return (
    <LayoutContext.Provider value={{
      appElement: appElementRef,
      deviceType: deviceType, // 默认设备类型
    }}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
  </Suspense>
  </LayoutContext.Provider>
  )
}

export default App

export const useApp=()=>{
  const layoutApp=useContext(LayoutContext);
  if (!layoutApp) {
    throw new Error('useApp must be used within an LayoutContext')
  }
  return layoutApp
}