const path = require('path');
const fs = require('fs');
const Spritesmith = require('spritesmith');

// 假设您的所有 icon 图片都放在 pngs 目录下
const iconsDir = path.resolve(__dirname, '../pngs');
// 雪碧图和 JSON 文件的输出目录:查看
const outputDir = path.resolve(__dirname, '../pngsIconsSprites');
// 雪碧图和 JSON 文件的输出到src/assets/images目录
const outputSrcDir = path.resolve(__dirname, '../src/assets/images');
// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 读取 pngs 目录下所有 .png 文件
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('读取 pngs 目录失败:', err);
    return;
  }

  const pngFiles = files.filter(file => file.endsWith('.png'));
  const input = pngFiles.map(file => path.join(iconsDir, file));

  if (input.length === 0) {
    console.log('pngs 目录下没有找到任何 .png 文件。');
    return;
  }

  Spritesmith.run({
     src: input ,
     padding: 5 // 增加 padding 选项，设置图片间隔为 5px
    }, (err, result) => {
    if (err) {
      console.error('生成雪碧图失败:', err);
      return;
    }

    // 输出雪碧图
    const spritePath = path.join(outputDir, 'sprite.png');
    const spriteSrcPath = path.join(outputSrcDir, 'sprite.png');
    fs.writeFileSync(spritePath, result.image);
    fs.writeFileSync(spriteSrcPath, result.image);
    console.log('雪碧图已生成:', spritePath);

    // 输出 JSON 数据
    const jsonData = {};
    for (const imageName in result.coordinates) {
      const baseName = path.basename(imageName, '.png');
      jsonData[baseName] = result.coordinates[imageName];
    }
    const jsonPath = path.join(outputDir, 'sprite.json');
    const joinSrcDir = path.join(outputSrcDir, 'sprite.json');
 
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
    fs.writeFileSync(joinSrcDir, JSON.stringify(jsonData, null, 2));
    console.log('雪碧图数据已生成:', jsonPath);
  });
});