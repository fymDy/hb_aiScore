const fs = require('fs');
const path = require('path');

const scssFilePath = path.join(__dirname, '..', 'src', 'assets', 'styles', 'fontClass.scss');
const outputDir = path.join(__dirname, '..', 'src', 'enum');
const outputFilePath = path.join(outputDir, 'EnumIconFontType.ts');

fs.readFile(scssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取 fontClass.scss 文件失败:', err);
    return;
  }

  const lines = data.trim().split('\n');
  const enumMembers = [];

  for (const line of lines) {
    if (line.includes(':before')) {
      const classNameWithDot = line.substring(0, line.indexOf('::before')).trim();
      // 去掉开头的点
      const classNameWithoutDot = classNameWithDot.startsWith('.') ? classNameWithDot.substring(1) : classNameWithDot;
      let enumKey = classNameWithoutDot;
      if (classNameWithoutDot.includes('-')) {
        enumKey = classNameWithoutDot.replace(/-/g, '_');
      }

      const enumValue = classNameWithDot.substring(1);

      enumMembers.push(`  ${enumKey} = '${enumValue}',`);
    }
  }

  const enumContent = `export enum EnumIconFontType {\n${enumMembers.join('\n')}\n}`;

  // 检查目录是否存在，不存在则创建
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`目录 ${outputDir} 创建成功`);
  }

  // 写入文件（会覆盖已有内容）
  try {
    fs.writeFileSync(outputFilePath, enumContent, 'utf8');
    console.log(`枚举类型已成功写入到 ${outputFilePath}`);
  } catch (writeErr) {
    console.error('写入文件失败:', writeErr);
  }
});