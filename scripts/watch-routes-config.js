// scripts/watch-routes-config.js
const path = require("path");
const fg = require("fast-glob");
const chokidar = require("chokidar");
const { exec } = require("child_process");
const CLEAN_SVGS_PATH = path.join(__dirname, "./clear-svgs.js");
const GENERATE_SVG_SPRITE = path.join(__dirname, "./generate-svg-sprite.js");
const VIEWS_ROUTERCONFIG_DIR = path.resolve(__dirname, "../src/views/**/routerConfig.ts");

const ICONS_DIR = path.join(__dirname, "../iconSvgs");
const ROUTES_PARSE_JSON = path.resolve(__dirname, "./routerParseJson.js");
console.log(`[启动监听]VIEWS_ROUTERCONFIG_DIR ${VIEWS_ROUTERCONFIG_DIR} `);
 /**
  *使用 fg.sync 自动在文件系统中扫描所有匹配的实际文件(获取所有 routerConfig.ts 文件路径)
  *会执行以下动作：
  *1、解析routerConfig.ts 的模式；
  *2、去你电脑的文件系统下，从 src/views 开始递归；
  *3、找到所有匹配这个规则的实际文件
  *4、把这些文件名拼成完整路径返回回来
  *ps:replace(/\\/g, "/")); // 兼容 Windows
 **/

const files = fg.sync(VIEWS_ROUTERCONFIG_DIR.replace(/\\/g, "/")); 
console.log(`[启动监听] ${files.length} 个 routerConfig.ts 文件`);


 const watcher = chokidar.watch(
  [files, ICONS_DIR],
   {
  ignored: /(^|[/\\])\../, // 忽略以 . 开头的文件和文件夹 (例如 .git, .DS_Store)
  persistent: true,
});

let isBuildingIcons = false; // 添加一个标志，表示图标是否正在构建
let isBuildingRoutes = false; // 添加一个标志，表示路由是否正在构建
 function main() {
 
  watcher.on("all", (event, filePath) => {
    if (["change", "add", "unlink"].includes(event)) {

      // 如果是图标相关改动:注释，这里手动执行即可以
      if (filePath.includes("iconSvgs")) {
        
        if (!isBuildingIcons) {
           isBuildingIcons = true;
        exec(
          `node "${CLEAN_SVGS_PATH}" && node "${GENERATE_SVG_SPRITE}"`,
          (err, stdout, stderr) => {
            isBuildingIcons = false; // 构建完成后重置标志
            if (err) console.error("[ERROR] 图标构建失败:", err);
            if (stdout) console.log(stdout);
            if (stderr) console.error(stderr);
          }
        );
      }
      }
      console.log(`[启动监听]files ${filePath} `);
      if (filePath.endsWith("routerConfig.ts")  ) {
    
        if(!isBuildingRoutes){
          isBuildingRoutes = true;
          exec(`node "${ROUTES_PARSE_JSON}"`, (err, stdout, stderr) => {
            isBuildingRoutes = false; // 构建完成后重置标志
            if (err) console.error("[ERROR] 路由构建失败:", err);
            if (stderr) console.error(stderr);
            if (stdout) console.log(stdout);
          });
      }
      }
    }
  });
  
}

main()