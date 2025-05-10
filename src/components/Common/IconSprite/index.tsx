import React from 'react';
import spriteData from '@/assets/images/sprite.json'; // 引用 sprite.json
import spriteImage from '@/assets/images/sprite.png';
import { getRatioType, pxToRem } from '@/utils/common';
import { useAppSys } from '@/hooks/useAppSys';

// 定义雪碧图数据中每个图标项的类型
interface SpriteDataItem {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  // 定义雪碧图数据的类型
  interface SpriteData {
    [key: string]: SpriteDataItem;
  }

  // 定义 SpriteIcon 组件的 Props 类型
  interface SpriteIconProps {
    name: string;
    scale?: number;
    style?: React.CSSProperties;
  }

  const SpriteIcon: React.FC<SpriteIconProps> = ({ name, scale = 2, style }) => {
    const {deviceRatio}=useAppSys()
    if(deviceRatio==3){
      scale = 2 // scale =3 图片是2倍图，所以只能用2
    }else if(deviceRatio==2){
      scale = 1
    }else {
      scale = 1
    }
    const iconData = (spriteData as SpriteData)[name];
    if (!iconData) {
      console.warn(`雪碧图中找不到名为 "${name}" 的图标。`);
      return null;
    }
    // 如果 scale 大于 1，则认为是缩小倍数（例如 3 表示 3 倍图）
    const finalScale = scale > 1 ? 1 / scale : scale;

    const scaledWidthPx = iconData.width * finalScale;
    const scaledHeightPx = iconData.height * finalScale;
    const backgroundPositionXPx = -iconData.x * finalScale;
    const backgroundPositionYPx = -iconData.y * finalScale;

    // 计算雪碧图的实际总宽度和总高度（像素单位）
    const spriteSheetWidthPx = Object.values(spriteData as SpriteData).reduce((maxWidth, data) => {
      return Math.max(maxWidth, data.width + data.x);
    }, 0);
    const spriteSheetHeightPx = Object.values(spriteData as SpriteData).reduce((maxHeight, data) => {
      return Math.max(maxHeight, data.height + data.y);
    }, 0);



    const componentStyle: React.CSSProperties = {
      display: 'inline-block',
      width: pxToRem(scaledWidthPx),
      height: pxToRem(scaledHeightPx),
      backgroundImage: `url(${spriteImage})`,
      backgroundPosition: `${pxToRem(backgroundPositionXPx)} ${pxToRem(backgroundPositionYPx)}`,
      backgroundRepeat: 'no-repeat',
      // backgroundSize 也需要根据缩小倍数进行调整
      backgroundSize: `${pxToRem(spriteSheetWidthPx * finalScale)} ${pxToRem(spriteSheetHeightPx * finalScale)}`,
      ...style,
    };

    return <span style={componentStyle} />;
  };

  export default SpriteIcon;