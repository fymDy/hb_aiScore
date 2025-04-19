/*
 * @Author: Mark
 * @Date: 2025-03-31 11:22:23
 * @LastEditTime: 2025-04-19 20:00:36
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/types/common.d.ts
 */
export interface LayoutContextType {
    /**折叠左侧112*/
    appElementRef: React.RefObject<HTMLDivElement | null> 
    deviceType: EnumDeviceType;
    fontSize: number;
    deviceRatio: number;
  }

  export interface ReactLazyComponent {
      default: React.ComponentType<any>;
    }
    
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
