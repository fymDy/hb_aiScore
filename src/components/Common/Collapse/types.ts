/*
 * @Author: Mark
 * @Date: 2025-04-26 14:44:46
 * @LastEditTime: 2025-04-26 15:40:40
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Collapse/types.ts
 */
import { ReactNode } from 'react';

export interface CollapseProps {
  accordion?: boolean; // 手风琴模式（只能展开一个）
  activeKeys?: string[]; // 外部控制展开的key列表
  defaultActiveKeys?: string[]; // 初始默认展开
  onChange?: (keys: string[]) => void; // 回调
  children: ReactNode;
}

export interface CollapsePanelProps {
  keyIndex:number,
  header: ReactNode;
  panelKey: string;
  children: ReactNode;
}
