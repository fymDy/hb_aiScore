/*
 * @Author: Mark
 * @Date: 2025-04-26 15:03:05
 * @LastEditTime: 2025-04-26 16:44:43
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Collapse/Panel/index.tsx
 */
import React, { useContext, useRef, useState, useEffect } from 'react';
import { CollapsePanelProps } from '../types';
import { CollapseContext } from '../context';
import styles from './index.module.scss'
import cs from 'classnames' 
import IconFont from '../../Iconfont';
import { EnumIconFontType } from '@/enum/enumIconFontType';
import { pxToRem } from '@/utils/common';
export const CollapsePanel: React.FC<CollapsePanelProps> = ({
  keyIndex,
  header,
  panelKey,
  children,
}) => {
  const { activeKeys, toggle } = useContext(CollapseContext);
  const isActive = activeKeys.includes(panelKey);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0');

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        const scrollHeight = contentRef.current.scrollHeight;
        setContentHeight(pxToRem(scrollHeight));
      } else {
        setContentHeight('0');
      }
    }
  }, [isActive]);

  return (
    <div  className={cs(styles.collapse_panel)} key={`${keyIndex}`}>
      <div className={styles.collapse_header} onClick={() => toggle(panelKey)}>
        <div className={styles.collapse_title}>{header}</div>
        {/* <div className={cs(styles.collapse_arrow,{[styles.open]:isActive})
        }>▼</div> */}
        <IconFont className={cs(styles.collapse_arrow,isActive?EnumIconFontType.iconminus1:EnumIconFontType.iconplus)}></IconFont>
      </div>
      <div
        className={styles.collapse_content_wrapper}
        style={{
          height: contentHeight,
        }}
      >
        <div ref={contentRef} className={cs(styles.collapse_content,{[styles.keyIndex]:keyIndex==0})}>
          {children}
        </div>
      </div>
    </div>
  );
};
