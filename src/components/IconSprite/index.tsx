import React from 'react';
import spriteData from '@/assets/images/sprite.json'; // 引用 sprite.json
import spriteImage from '@/assets/images/sprite.png';

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
    const iconData = (spriteData as SpriteData)[name];

    if (!iconData) {
      console.warn(`雪碧图中找不到名为 "${name}" 的图标。`);
      return null;
    }

    // 如果 scale 大于 1，则认为是缩小倍数（例如 3 表示 3 倍图）
    const finalScale = scale > 1 ? 1 / scale : scale;

    const scaledWidth = iconData.width * finalScale;
    const scaledHeight = iconData.height * finalScale;
    const backgroundPositionX = -iconData.x * finalScale;
    const backgroundPositionY = -iconData.y * finalScale;

    // 计算雪碧图的实际总宽度和总高度
    const spriteSheetWidth = Object.values(spriteData as SpriteData).reduce((maxWidth, data) => {
      return Math.max(maxWidth, data.width + data.x);
    }, 0);
    const spriteSheetHeight = Object.values(spriteData as SpriteData).reduce((maxHeight, data) => {
      return Math.max(maxHeight, data.height + data.y);
    }, 0);

    const componentStyle: React.CSSProperties = {
      display: 'inline-block',
      width: scaledWidth,
      height: scaledHeight,
      backgroundImage: `url(${spriteImage})`,
      backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
      backgroundRepeat: 'no-repeat',
      // backgroundSize 也需要根据缩小倍数进行调整
      backgroundSize: `${spriteSheetWidth * finalScale}px ${spriteSheetHeight * finalScale}px`,
      ...style,
    };

    return <div style={componentStyle} />;
  };

  export default SpriteIcon;