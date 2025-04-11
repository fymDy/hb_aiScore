// generate-sprite-with-preview.js
const path = require('path');
const fs = require('fs');
const SVGSpriter = require('svg-sprite');

const iconsDir = path.resolve(__dirname, '../iconSvgs');
const outputDir = path.resolve(__dirname, '../iconSvgsSprite');
const outputSrcDir = path.resolve(__dirname, '../src/assets/images');
const previewHtmlPath = path.resolve(outputSrcDir, 'sprite-preview.html');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(outputSrcDir)) {
  fs.mkdirSync(outputSrcDir, { recursive: true });
}

const spriter = new SVGSpriter({
  dest: outputDir,
  mode: {
    symbol: {
      sprite: 'sprite.svg',
    },
  },
  shape: {
    id: {
      generator: function (filePath) {
        return path.basename(filePath, '.svg');
      },
    },
  },
});

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
if (files.length === 0) {
  console.log('❌ iconSvgs 目录下未发现任何 SVG 文件');
  process.exit(0);
}

files.forEach(file => {
  const filePath = path.join(iconsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  spriter.add(filePath, file, content);
});

spriter.compile((error, result) => {
  if (error) {
    console.error('❌ 生成失败:', error);
    return;
  }

  const spritePath = path.join(outputSrcDir, 'sprite.svg');
  const spriteContent = result.symbol.sprite.contents.toString();
  fs.writeFileSync(spritePath, spriteContent);
  console.log('✅ 雪碧图生成成功:', spritePath);

  const symbolIds = [...spriteContent.matchAll(/<symbol[^>]*id="([^"]+)"/g)].map(m => m[1]);
  const jsonPath = path.join(outputSrcDir, 'sprite-symbols.json');
  fs.writeFileSync(jsonPath, JSON.stringify(symbolIds, null, 2));
  console.log('✅ symbol 列表已生成:', jsonPath);

  const previewHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SVG Sprite Preview</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .icon-item { display: inline-block; margin: 10px; text-align: center; width: 100px; }
    svg { width: 40px; height: 40px; fill: currentColor; display: block; margin: 0 auto 6px; }
  </style>
</head>
<body>
  <h1>SVG Sprite Preview</h1>
  <div style="display:none">
    ${spriteContent}
  </div>
  <div class="icon-list">
    ${symbolIds
      .map(
        id => `
      <div class="icon-item">
        <svg><use xlink:href="#${id}" /></svg>
        <div>${id}</div>
      </div>`
      )
      .join('\n')}
  </div>
</body>
</html>
  `;

  fs.writeFileSync(previewHtmlPath, previewHTML);
  console.log('✅ 图标预览页面已生成:', previewHtmlPath);
});
