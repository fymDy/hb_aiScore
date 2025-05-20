import { MatchCanvasPoint } from "@/views/teamDetails/_types";


// 常量定义
const yAxisLabelWidth = 20;
const sidePadding = 30;
const pointRadius = 10;

const topLineY = 30;
const firstLineY = topLineY + 20;
const lineGap = 28;

const resultYMap = {
  W: firstLineY,
  D: firstLineY + lineGap,
  L: firstLineY + lineGap * 2,
};

const yLines = [
  { label: 'W', y: resultYMap.W },
  { label: 'D', y: resultYMap.D },
  { label: 'L', y: resultYMap.L },
];



// ✅ 背景
function drawBackground(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
}

// ✅ 顶部日期文字
function drawDateLabels(ctx: CanvasRenderingContext2D, points: any[]) {
  ctx.fillStyle = '#999';
  ctx.textBaseline = 'bottom';
  points.forEach((pt) => ctx.fillText(pt.date, pt.x, 22));
}

// ✅ 横线与 Y 轴标签
function drawGuidelines(ctx: CanvasRenderingContext2D, width: number) {
  drawLine(ctx, yAxisLabelWidth, width, topLineY); // 顶部线

  yLines.forEach(({ label, y }) => {
    drawLine(ctx, yAxisLabelWidth, width, y);
    ctx.fillStyle = '#999';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, 4, y);
  });
}

// ✅ 折线连接
function drawPolyline(ctx: CanvasRenderingContext2D, points: any[]) {
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 1;
  ctx.beginPath();
  points.forEach((pt, i) => {
    if (i === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  });
  ctx.stroke();
}

// ✅ 图标绘制
function drawIcons(ctx: CanvasRenderingContext2D, points: any[]) {
  points.forEach((pt) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, pointRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(pt.img, pt.x - pointRadius, pt.y - pointRadius, pointRadius * 2, pointRadius * 2);
    ctx.restore();
  });
}

// ✅ 比分文字（底部）
function drawScores(ctx: CanvasRenderingContext2D, points: any[], height: number, hoverIndex: number | null) {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  points.forEach((pt, i) => {
    ctx.fillStyle = i === hoverIndex ? '#1890ff' : '#999';
    ctx.fillText(pt.score, pt.x, height - 15);
  });
}

// ✅ 悬浮提示框
function drawTooltip(ctx: CanvasRenderingContext2D, pt: any) {
  const tooltip = `${pt.date} 比分: ${pt.score}`;
  const textWidth = ctx.measureText(tooltip).width;
  const boxW = textWidth + 12;
  const boxH = 24;
  const boxX = pt.x - boxW / 2;
  const boxY = pt.y - pointRadius - boxH - 6;

  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 4);
  else ctx.rect(boxX, boxY, boxW, boxH);
  ctx.fillStyle = 'rgba(0,0,0,0.75)';
  ctx.fill();
  ctx.strokeStyle = '#666';
  ctx.stroke();

  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'middle';
  ctx.fillText(tooltip, pt.x, boxY + boxH / 2);
}

// ✅ 通用横线绘制
function drawLine(ctx: CanvasRenderingContext2D, x1: number, x2: number, y: number) {
  ctx.beginPath();
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}
// 📦 渲染主流程入口
function renderChart(
  ctx: CanvasRenderingContext2D,
  points: any[],
  width: number,
  height: number,
  hoverIndex: number | null
) {
  drawBackground(ctx, width, height);
  drawDateLabels(ctx, points);
  drawGuidelines(ctx, width);
  drawPolyline(ctx, points);
  drawIcons(ctx, points);
  drawScores(ctx, points, height, hoverIndex);
  if (hoverIndex !== null) drawTooltip(ctx, points[hoverIndex]);
}
// 🎯 外部调用的主函数：加载图标 & 绑定 hover 事件
export function drawMatchTrendChart(
  ctx: CanvasRenderingContext2D,
  data: MatchCanvasPoint[],
  width: number,
  height: number,
  hoverIndex: number | null,
  setHoverIndex: (i: number | null) => void,
  canvas: HTMLCanvasElement
) {
  const innerWidth = width - yAxisLabelWidth - sidePadding * 2;
  const spacingX = innerWidth / (data.length - 1);

  const points: {
    x: number;
    y: number;
    img: HTMLImageElement;
    score: string;
    date: string;
  }[] = [];

  let loaded = 0;

  data.forEach((item, index) => {
    const img = new Image();
    img.src = item.opponentLogo;
    img.onload = () => {
      const x = yAxisLabelWidth + sidePadding + index * spacingX;
      const y = resultYMap[item.result];
      points[index] = { x, y, img, score: item.score, date: item.date };
      loaded++;
      if (loaded === data.length) {
        renderChart(ctx, points, width, height, hoverIndex);
      }
    };
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let found = null;
    for (let i = 0; i < points.length; i++) {
      const pt = points[i];
      if ((x - pt.x) ** 2 + (y - pt.y) ** 2 <= pointRadius ** 2) {
        found = i;
        break;
      }
    }

    if (found !== hoverIndex) {
      setHoverIndex(found);
      renderChart(ctx, points, width, height, found);
    }
  });
}
