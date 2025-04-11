
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 要遍历的目录
const directoriesToProcess = [
    path.join(__dirname, '../pngs')
];

// 输出目录路径
const outputDirectory = path.join(__dirname, '../pngstowebp');

// 创建输出目录
const createOutputDirectory = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`创建输出目录：${dir}`);
    }
};

function clearDirectorySync(targetDir) {
    try {
      const files = fs.readdirSync(targetDir);
      files.forEach(file => {
        const filePath = path.join(targetDir, file);
        const stat = fs.statSync(filePath);
  
        if (stat.isDirectory()) {
          // 递归清空子文件夹
          clearDirectorySync(filePath);
          fs.rmdirSync(filePath);  // 删除空文件夹
          console.log(`成功删除文件夹: ${filePath}`);
        } else {
          fs.unlinkSync(filePath);  // 删除文件
          console.log(`成功删除文件: ${filePath}`);
        }
      });
    } catch (err) {
      console.error(`清空目标文件夹失败: ${targetDir}`, err);
    }
  }

// 转换函数
const convertPngToWebp = async (inputFilePath, outputFilePath) => {
    try {
        await sharp(inputFilePath)
            .toFile(outputFilePath);
        console.log(`转换成功：${inputFilePath} -> ${outputFilePath}`);
    } catch (error) {
        console.error(`转换失败：${inputFilePath}，错误：`, error);
    }
};

// 遍历目录并转换 PNG 文件
const processDirectory = async (directory) => {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // 递归处理子目录
            await processDirectory(filePath);
        } else if (path.extname(file).toLowerCase() === '.png') {
            // 计算相对路径
            const relativePath = path.relative(directoriesToProcess[0], filePath);
            // 生成输出文件的路径，保持原有目录结构
            const outputFilePath = path.join(outputDirectory, relativePath.replace(/\.png$/, '.webp'));
            const outputDirPath = path.dirname(outputFilePath);
            
            // 创建输出目录
            createOutputDirectory(outputDirPath);
            
            await convertPngToWebp(filePath, outputFilePath);
        }
    }
};

// 主函数
const main = async () => {
    // 清空输出目录
    clearDirectorySync(outputDirectory);
    
    // 创建输出目录
    createOutputDirectory(outputDirectory);
    
    for (const directory of directoriesToProcess) {
        await processDirectory(directory);
    }
};

// 执行主函数
main().catch(console.error);