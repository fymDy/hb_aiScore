/*
 * @Author: Mark
 * @Date: 2025-04-11 22:11:05
 * @LastEditTime: 2025-04-11 22:11:06
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/SvgSpriteLoader/index.tsx
 */
import { useEffect } from 'react';
import sprite from '@/assets/images/sprite.svg?raw';

const SvgSpriteLoader = () => {
  useEffect(() => {
    const existing = document.getElementById('__svg-sprite__');
    if (!existing) {
      const div = document.createElement('div');
      div.id = '__svg-sprite__';
      div.style.display = 'none';
      div.innerHTML = sprite;
      document.body.appendChild(div);
    }
  }, []);

  return null;
};

export default SvgSpriteLoader;