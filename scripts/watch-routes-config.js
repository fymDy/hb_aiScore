// scripts/watch-routes-config.js
const path = require('path');
const chokidar = require('chokidar');
const { exec } = require('child_process');

const VIEWS_DIR = path.join(__dirname, '../src/views');

console.log(`[WATCH] 正在监听目录变化: ${VIEWS_DIR}`);
chokidar.watch(VIEWS_DIR, {
  ignored: /(^|[/\\])\../, // 忽略以 . 开头的文件和文件夹 (例如 .git, .DS_Store)
  persistent: true,
}).on('all', (event, filePath) => {
    if(event=='change'){
        console.log(`[WATCH]目录变化: ${event},${filePath}`);
    }
    exec('node ./scripts/routerParseJson.js')
});
