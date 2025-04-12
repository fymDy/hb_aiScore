/*
 * @Author: Mark
 * @Date: 2025-03-30 22:41:03
 * @LastEditTime: 2025-03-30 22:41:04
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore_h5/scripts/delete-router.cjs
 */
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer').default;
const { exec } = require('child_process');
 const ROUTES_PARSE_JSON = path.resolve(__dirname, "./routerParseJson.js");
// 提示用户输入要删除的目录名
inquirer.prompt([
  {
    type: 'input',
    name: 'directory',
    message: "请输入要删除的views内目录名，（相对于 'src/views/'目录下）如：'account'",
    validate: function (input) {
      if (input.length) {
        return true;
      } else {
        return '请输入有效的目录名';
      }
    }
  }
]).then((answers) => {
  const dirPath = path.join(__dirname, '../src/views', answers.directory);

  // 检查目录是否存在
  if (fs.existsSync(dirPath)) {
    // 删除目录及其内容
    fs.rm(dirPath, { recursive: true, force: true }, (err) => {
      if (err) {
        console.error(`[ERROR] 删除目录时出错: ${err.message}`);
      } else {
          exec(`node "${ROUTES_PARSE_JSON}"`, (err, stdout, stderr) => {
                    isBuildingRoutes = false; // 构建完成后重置标志
                    if (err) console.error("[ERROR] 路由构建失败:", err);
                    if (stderr) console.error(stderr);
                    if (stdout) console.log(stdout);
                  });
        console.log(`[LOG]目录及目录内所有文件已成功删除: ${dirPath}`);
      }
    });
  } else {
    console.log(`[ERROR] 目录不存在: ${dirPath}`);
  }
}).catch(()=>{
  console.log(`删除指令已取消`);
});
