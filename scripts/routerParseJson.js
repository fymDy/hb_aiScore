

const path = require('path');
const { exec } = require('child_process');
const VIEWS_DIR = path.join(__dirname, '../src/views');
const GENERATE_ROUTES_SCRIPT = 'node ./scripts/generate-routes.js'; // 如果您使用 TypeScript，可能是 'ts-node ./scripts/generate-routes.ts'
console.log(`[WATCH] 正在监听目录变化: ${VIEWS_DIR}`);
async function execRoutersToJson(){
    // 这里我们监听所有的事件类型，包括 'add', 'change', 'unlink' 等
  await exec(GENERATE_ROUTES_SCRIPT, (error, stdout, stderr) => {
    if (error) {
      console.error(`[ERROR] 执行生成脚本失败: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`[ERROR] 生成脚本错误输出: ${stderr}`);
      return;
    }
    console.error(`[LOGO] 执行生成路由JSON脚本成功: ${stdout}`);
  });
}
execRoutersToJson()