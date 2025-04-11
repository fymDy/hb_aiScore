// scripts/watch-routes-config.js
const path = require("path");
const chokidar = require("chokidar");
const { exec } = require("child_process");
const cleanSvgsPath = path.join(__dirname, "./clear-svgs.js");
const generateSvgSprite = path.join(__dirname, "./generate-svg-sprite.js");
const VIEWS_DIR = path.join(__dirname, "../src/views");
const ICONS_DIR = path.join(__dirname, "../iconSvgs");
const routerParseJson = path.resolve(__dirname, "./routerParseJson.js");
const watcher = chokidar.watch([VIEWS_DIR, ICONS_DIR], {
  ignored: /(^|[/\\])\../, // 忽略以 . 开头的文件和文件夹 (例如 .git, .DS_Store)
  persistent: true,
});
console.log(`[WATCH]目录变化: ${VIEWS_DIR}`);
let isBuildingIcons = false; // 添加一个标志，表示图标是否正在构建
let isBuildingRoutes = false; // 添加一个标志，表示路由是否正在构建
watcher.on("all", (event, filePath) => {
  if (["change", "add", "unlink"].includes(event)) {
    if (event == "change") {
      console.log(`[WATCH]目录变化: ${event},${filePath}`);
    }
    // 如果是图标相关改动:注释，这里手动执行即可以
    if (filePath.includes("iconSvgs")) {
      
      if (!isBuildingIcons) {
         isBuildingIcons = true;
      exec(
        `node "${cleanSvgsPath}" && node "${generateSvgSprite}"`,
        (err, stdout, stderr) => {
          isBuildingIcons = false; // 构建完成后重置标志
          if (err) console.error("[ERROR] 图标构建失败:", err);
          if (stdout) console.log(stdout);
          if (stderr) console.error(stderr);
        }
      );
    }
    }
    //这里监听改变即可
    if (filePath.includes("src/views")) {
   
      if(!isBuildingRoutes){
        isBuildingIcons = true;
      exec(`node "${routerParseJson}"`, (err, stdout, stderr) => {
        isBuildingIcons = false; // 构建完成后重置标志
        if (err) console.error("[ERROR] 路由构建失败:", err);
        // if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
      });
    }
    }
  }
});
