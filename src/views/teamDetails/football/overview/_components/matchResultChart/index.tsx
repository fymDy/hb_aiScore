import React, { useRef, useEffect, useState } from 'react';
import { drawMatchTrendChart } from './util';
import { MatchCanvasPoint } from '@/views/teamDetails/_types';
import TitleMore from '@/views/matchDetails/_components/titleMore';
import { useAppSys } from '@/hooks/useAppSys';

interface Props {
  data: MatchCanvasPoint[];
  width?: number;
  height?: number;
}

const MatchTrendCanvasChart: React.FC<Props> = ({ data, width = 375, height = 135 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const {deviceRatio}=useAppSys()
  useEffect(() => {
    if (!canvasRef.current || !data?.length) return;
     const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
 // ✅ 设置高清渲染支持：物理分辨率 × dpr

    // canvas.width = width * deviceRatio;
    // canvas.height = height * deviceRatio;
    // canvas.style.width = `${width}px`;
    // canvas.style.height = `${height}px`;
    // ctx.scale(deviceRatio, deviceRatio); // ✅ 缩放坐标系保持绘制尺寸一致

    drawMatchTrendChart(ctx, data, width, height, hoverIndex, setHoverIndex, canvas);
  }, [data, width, height, hoverIndex, deviceRatio]);

  return (
     <div >
        <TitleMore title={'賽果'} isMore={true}/>
        <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width: '100%',paddingLeft:'10px',paddingRight:'10px',backgroundColor:'#fff' }}
        />
     </div>
   
  );
};

export default MatchTrendCanvasChart;
