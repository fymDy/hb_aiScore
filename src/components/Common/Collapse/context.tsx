/*
 * @Author: Mark
 * @Date: 2025-04-26 14:51:27
 * @LastEditTime: 2025-04-26 14:53:41
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Collapse/context.tsx
 */
import { createContext } from 'react';

export interface CollapseContextProps {
  activeKeys: string[];
  toggle: (key: string) => void;
}

export const CollapseContext = createContext<CollapseContextProps>({
  activeKeys: [],
  toggle: () => {},
});
