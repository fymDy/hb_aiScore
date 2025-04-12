const path = require('path');
const { exec } = require('child_process');
const VIEWS_DIR = path.join(__dirname, '../src/views');
const GENERATE_ROUTES_SCRIPT = 'node ./scripts/generate-routes.js';

let isBuilding = false;

function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`[ERROR] 执行失败: ${error}`);
        return;
      }
      if (stderr) {
        reject(`[ERROR] 脚本异常: ${stderr}`);
        return;
      }
      resolve(stdout);
  
    });
  });
}

async function execRoutersToJson() {
  if (isBuilding) return;

  isBuilding = true;
  try {
    const result = await execAsync(GENERATE_ROUTES_SCRIPT);
    console.log(`[LOGO] ✅ 生成路由 JSON 成功: ${result.trim()}`);
  } catch (err) {
    console.error(err);
  } finally {
    isBuilding = false;
  }
}

execRoutersToJson();
