// clean-svgs.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { result } = require('lodash');

const svgDir = path.resolve(__dirname, '../iconSvgs');
const cleanedDir = path.resolve(__dirname, '../iconSvgsCleaned');


async function main(){
  // 创建输出目录
  if (!fs.existsSync(cleanedDir)) {
    fs.mkdirSync(cleanedDir, { recursive: true });
  }

  let allSuccessful = true; // 添加一个标志变量，标记是否所有文件都成功处理
  const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));
  for (const file of files) {
    const filePath = path.join(svgDir, file);
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const dom = new JSDOM(content, { contentType: 'image/svg+xml' });
        const document = dom.window.document;
    
        const svg = document.querySelector('svg');
        if (!svg) throw new Error(`❌ ${file} 缺少 <svg> 标签`);
    
        svg.removeAttribute('width');
        svg.removeAttribute('height');
    
        const clips = document.querySelectorAll('clipPath rect');
        clips.forEach(rect => {
          if (!rect.getAttribute('width')) rect.setAttribute('width', '100%');
          if (!rect.getAttribute('height')) rect.setAttribute('height', '100%');
        });
    
        const cleanTags = ['metadata', 'desc', 'title'];
        cleanTags.forEach(tag => {
          document.querySelectorAll(tag).forEach(el => el.remove());
        });
    
        const cleanedSvg = svg.outerHTML.replace(/<!--[\s\S]*?-->/g, '');
        const cleanedPath = path.join(cleanedDir, file);
        fs.writeFileSync(cleanedPath, cleanedSvg);
    } catch (error) {
        console.error(`❌ 清洗 ${file} 失败:`, error.message);
        allSuccessful = false; // 如果发生错误，将标志变量设置为 false
    }
  }
  // ✅ 只有当 allSuccessful 为 true 时才执行
  if (allSuccessful) {
    console.log(`✅ 成功清洗 ${files.length} 个 SVG 文件。`);
  } else {
    console.error(`⚠️ 清洗 SVG 文件过程中发现错误，请查看错误日志。`);
  }
}
main()
