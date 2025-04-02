/*
 * @Author: Mark
 * @Date: 2025-04-01 15:13:57
 * @LastEditTime: 2025-04-01 16:03:16
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore_h5/src/assets/images/sprite.d.ts
 */
/*
 * @Author: Mark
 * @Date: 2025-04-01 14:46:17
 * @LastEditTime: 2025-04-01 14:53:14
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore_h5/src/assets/images/sprite.d.ts
 */
declare module '@/assets/images/sprite.json' {
  interface SpriteDataItem {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  interface SpriteData {
    [key: string]: SpriteDataItem;
  }

  const spriteData: SpriteData;
  export default spriteData;
  }
  declare module '*.json' {
    const value: any;
    export default value;
  }