/*
 * @Author: Mark
 * @Date: 2025-03-30 21:17:36
 * @LastEditTime: 2025-03-30 21:17:38
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore_h5/src/scripts/create-router.cjs
 */

const inquirer = require("inquirer").default;
const fs = require("fs").promises; // 使用 promises API 进行异步操作
const path = require("path");
const { exec } = require('child_process');

// 定义问题
const questions = [
  {
    type: "input",
    name: "directory",
    message:
      "请输入要创建的目录路径（相对于 'src/views/'目录下），如：'main' 或 'main/mine':",
    validate: function (value) {
      return value.length ? true : "请输入有效的目录路径";
    },
  },
];

// 创建文件夹和文件的函数 (异步)
async function createFiles(dir, currentComponentName, fullPath) {
  try {
    await fs.mkdir(dir, { recursive: true });
    console.log(`创建文件夹: ${dir}`);

    // 文件模板
    const componentName = path.basename(dir); // 使用当前目录名作为组件名
    const componentTemplate = `
import React from 'react';
import styles from './index.module.scss';

const ${
      componentName.charAt(0).toUpperCase() + componentName.slice(1)
    }: React.FC = () => {
      return (
        <div className={styles.${componentName}}>
          <h1>${componentName} 页面</h1>
        </div>
      );
    };

export default ${
      componentName.charAt(0).toUpperCase() + componentName.slice(1)
    };
`;

    const scssTemplate = `
.${componentName} {
  // ${componentName} 页面样式
  width:100%;
}
`;

    const routerConfigTemplate = `
 import { IFRouterConfig } from '@/router/interface'
const routerConfig:IFRouterConfig[] = [
  {
    name: '${currentComponentName}', // 使用当前文件名作为路由路径
    customPath: '/${fullPath}', // 使用完整路径作为自定义路径
    author: false, // 默认不需要登录验证
    index: false, // 是否默认跳转
  }
];
export default routerConfig;
`;

    // 创建文件
    await fs.writeFile(path.join(dir, "index.tsx"), componentTemplate, "utf8");
    console.log(`创建文件: ${path.join(dir, "index.tsx")}`);

    await fs.writeFile(path.join(dir, "index.module.scss"), scssTemplate, "utf8");
    console.log(`创建文件: ${path.join(dir, "index.module.scss")}`);

    await fs.writeFile(
      path.join(dir, "routerConfig.ts"),
      routerConfigTemplate,
      "utf8"
    );
    console.log(`创建文件: ${path.join(dir, "routerConfig.ts")}`);
  } catch (error) {
    console.error(`创建文件或文件夹失败: ${error.message}`);
  }
}

// 递归处理每个层级，创建目录和文件 (异步)
async function processDirectoryStructure(baseDir, parts) {
  let currentDir = baseDir;
  const allParts = [];

  for (const part of parts) {
    currentDir = path.join(currentDir, part);
    allParts.push(part);
    const relativePath = path.relative(baseDir, currentDir).replace(/\\/g, '/');
    await createFiles(currentDir, part, relativePath);
  }
}

// 主函数 (异步)
async function main() {
  try {
    const answers = await inquirer.prompt(questions);
    const directory = answers.directory;
    const pathParts = directory.split("/");

    // 目标根目录
    const baseDir = path.join(__dirname, "../src/views");
    const targetDir = path.join(baseDir, directory);

    try {
      // 尝试获取目标目录的状态
      await fs.stat(targetDir);
      // 如果能成功获取状态，说明目录已存在
      console.log(`最终目标目录 ${targetDir} 已存在，取消创建。`);
      return;
    } catch (error) {
      // 如果发生错误，判断是否是目录不存在的错误 (ENOENT)
      if (error.code === 'ENOENT') {
        // 目录不存在，继续处理目录结构
        await processDirectoryStructure(baseDir, pathParts);
        exec('node ./scripts/routerParseJson.js')
      } else {
        // 其他错误，例如权限问题等
        console.error(`检查目录状态时发生错误: ${error.message}`);
      }
    }

  } catch (error) {
    console.error(`创建指令已取消`);
  }
}

main();