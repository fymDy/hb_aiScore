/*
 * @Author: Mark
 * @Date: 2025-04-18 18:56:38
 * @LastEditTime: 2025-04-19 20:03:34
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/layout/AppLayout.tsx
 */
import { useApp } from "@/hooks/useApp";
import React from "react";

interface AppLayoutProps {
  DownloadComponent: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  DownloadComponent,
  children,
}) => {
  const {
    downloadRef,
    contentHeight,
    isDownloadVisible
  } = useApp();

  return (
    <div className="app-layout">
      {/* 下载模块 */}
      {isDownloadVisible && <div className="app-download" ref={downloadRef}> {DownloadComponent} </div>}
      {/* 主内容区域 */}
      <div className="app-content" style={{ height: contentHeight }}>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
