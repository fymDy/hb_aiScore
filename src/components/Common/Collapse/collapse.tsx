/*
 * @Author: Mark
 * @Date: 2025-04-26 14:51:06
 * @LastEditTime: 2025-04-26 14:51:07
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Collapse/collapse.tsx
 */
import React, { useState, useMemo, useCallback } from 'react';
import { CollapseProps } from './types';
import { CollapseContext } from './context';

export const Collapse: React.FC<CollapseProps> = ({
  accordion = false,
  activeKeys,
  defaultActiveKeys = [],
  onChange,
  children,
}) => {
  const [internalActiveKeys, setInternalActiveKeys] = useState<string[]>(defaultActiveKeys);

  // 受控还是非受控
  const currentActiveKeys = activeKeys !== undefined ? activeKeys : internalActiveKeys;

  const toggle = useCallback((key: string) => {
    let newActiveKeys: string[] = [];

    if (accordion) {
      newActiveKeys = currentActiveKeys[0] === key ? [] : [key];
    } else {
      if (currentActiveKeys.includes(key)) {
        newActiveKeys = currentActiveKeys.filter(k => k !== key);
      } else {
        newActiveKeys = [...currentActiveKeys, key];
      }
    }

    if (activeKeys === undefined) {
      setInternalActiveKeys(newActiveKeys);
    }

    onChange?.(newActiveKeys);
  }, [accordion, activeKeys, currentActiveKeys, onChange]);

  const contextValue = useMemo(() => ({
    activeKeys: currentActiveKeys,
    toggle,
  }), [currentActiveKeys, toggle]);

  return (
    <CollapseContext.Provider value={contextValue}>
      <div className="collapse">{children}</div>
    </CollapseContext.Provider>
  );
};
