const fs = require('fs').promises;
const path = require('path');

// 配置常量
const VIEWS_DIR = path.join(__dirname, '..', 'src','views'); // 视图文件根目录
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'router'); // 路由配置文件输出目录
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'routes.json'); // 路由配置文件输出路径
const OUTPUT_ENUM_FILE = path.join(OUTPUT_DIR, 'routerPathUtil.ts'); // 路由枚举文件输出路径

/**
 * 异步提取 routerConfig.ts 文件中的路由配置
 * @param {string} filePath 文件路径
 * @returns {Promise<Array|null>} 路由配置数组或 null
 */
async function extractRouterConfig(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const searchString = 'const routerConfig';
    const startIndex = content.indexOf(searchString);

    if (startIndex === -1) {
      console.warn(`[WARN] 未在 ${filePath} 中找到 "${searchString}"`);
      return null;
    }

    // 提取 "const routerConfig =" 后面的内容
    let configStr = content.substring(startIndex + searchString.length).trim();
    const equalsIndex = configStr.indexOf('=');
    if (equalsIndex === -1) {
      console.warn(`[WARN] 在 ${filePath} 中未找到 '='`);
      return null;
    }
    configStr = configStr.substring(equalsIndex + 1).trim();

    // 解析路由配置数组，通过匹配方括号 "[]" 来确定数组的边界
    let bracketCount = 0;
    let endIndex = -1;
    for (let i = 0; i < configStr.length; i++) {
      if (configStr[i] === '[') {
        bracketCount++;
      } else if (configStr[i] === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }

    if (endIndex > 0) {
      const configArrayStr = configStr.substring(0, endIndex);
      try {
        // 使用 eval 解析提取到的字符串为 JavaScript 数组
        const configArray = eval(configArrayStr);
        return configArray;
      } catch (error) {
        console.error(`[ERROR] 解析 ${filePath} 中的路由配置时发生错误:`, error);
        return null;
      }
    }
    console.warn(`[WARN] 在 ${filePath} 中未能正确解析路由配置数组`);
    return null;
  } catch (error) {
    console.error(`[ERROR] 读取或解析文件 ${filePath} 时发生错误:`, error);
    return null;
  }
}

/**
 * 异步遍历视图目录并生成路由配置
 * @param {string} dirPath 当前遍历的目录路径
 * @param {string} basePath 当前路由的基础路径
 * @returns {Promise<Array>} 路由配置数组
 */
async function generateRoutes(dirPath, basePath) {
  const items = await fs.readdir(dirPath);
  const routes = [];
  let currentConfig = null;

  const routerConfigFile = path.join(dirPath, 'routerConfig.ts');
  try {
    // 尝试读取当前目录下的 routerConfig.ts 文件
    await fs.access(routerConfigFile);
    currentConfig = await extractRouterConfig(routerConfigFile);
  } catch (error) {
    // routerConfig.ts 不存在，忽略错误
  }

  // 如果存在 routerConfig.ts 并且成功提取到配置
  if (currentConfig && currentConfig.length > 0) {
    // 从 routerConfig.ts 中获取自定义路径，否则根据目录结构生成路径
    const routePath = currentConfig[0].path || (basePath === '/' ? `/${path.basename(dirPath)}` : path.join(basePath, path.basename(dirPath)));
    // 计算组件相对于 VIEWS_DIR 的路径
    const componentPath = path.relative(VIEWS_DIR, path.join(dirPath, 'index.tsx')).replace(/\\/g, '/');
    const route = {
      path: routePath,
      name: currentConfig[0].name || path.basename(dirPath),
      author: currentConfig[0].author ? currentConfig[0].author : false,
      index: currentConfig[0].index ? currentConfig[0].index : false,
      component: componentPath, // 添加 component 属性
      children: [],
    };
    routes.push(route);

    // 递归遍历子目录
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stats = await fs.stat(fullPath);
      const itemName = path.basename(fullPath);
      // 如果是子目录且不是 'components' 目录，则递归生成子路由
      if (stats.isDirectory() && itemName !== 'components') {
        try {
          const children = await generateRoutes(fullPath, routePath);
          route.children.push(...children);
        } catch (error) {
          console.error(`[ERROR] 处理子目录 ${fullPath} 时发生错误:`, error);
        }
      }
    }
  } else {
    // 如果没有 routerConfig.ts，则根据目录结构生成路由
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stats = await fs.stat(fullPath);
      const itemName = path.basename(fullPath);
      // 如果是子目录且不是 'components' 目录，则递归生成子路由
      if (stats.isDirectory() && itemName !== 'components') {
        try {
          const children = await generateRoutes(fullPath, basePath === '/' ? `/${path.basename(dirPath)}` : path.join(basePath, path.basename(dirPath)));
          routes.push(...children);
        } catch (error) {
          console.error(`[ERROR] 处理子目录 ${fullPath} 时发生错误:`, error);
        }
      }
    }
  }

  return routes;
}

/**
 * 异步将路由配置写入 JSON 文件
 * @param {Array} routes 路由配置数组
 * @param {string} outputFile 输出文件路径
 */
async function writeRoutesToFile(routes, outputFile) {
  try {
    // 确保输出目录存在
    await fs.mkdir(path.dirname(outputFile), { recursive: true });

    // 清空已存在的路由文件
    try {
      await fs.access(outputFile);
      await fs.unlink(outputFile);
      console.log(`[LOG] 发现已存在的路由文件，正在删除: ${outputFile}`);
    } catch (error) {
      // 文件不存在，忽略错误
    }

    // 将路由配置写入 JSON 文件，格式化输出
    await fs.writeFile(outputFile, JSON.stringify(routes, null, 2), 'utf8');
    console.log(`[LOG] 路由配置已写入到: ${outputFile}`);
  } catch (error) {
    console.error(`[ERROR] 写入路由文件时发生错误:`, error);
  }
}
/**
 * 异步生成路由路径枚举
 * @param {Array} routes 路由配置数组
 * @param {string} outputFile 输出文件路径
 */
async function generateRoutePathEnum(routes, outputFile) {
  try {
    const enumEntries = {};

    function traverseRoutes(routeArray) {
      routeArray.forEach(route => {
        if (route.path) {
          // 将路径转换为合法的枚举 key，例如：/user/profile -> USER_PROFILE
          const enumKey = route.path
            .replace(/^\//, '') // 移除开头的斜杠
            .replace(/[:.]/g, '') // 移除冒号和点
            .replace(/\//g, '_') // 将斜杠替换为下划线
            .replace(/-/g, '_') // 将横杠连字符替换为下划线
            .toUpperCase();
          enumEntries[enumKey] = route.path;
        }
        if (route.children && route.children.length > 0) {
          traverseRoutes(route.children);
        }
      });
    }

    traverseRoutes(routes);

    let enumContent = 'export enum RouterPathUtil {\n';
    for (const key in enumEntries) {
      enumContent += `  ${key} = '${enumEntries[key]}',\n`;
    }
    enumContent += '}\n';

    // 确保输出目录存在
    await fs.mkdir(path.dirname(outputFile), { recursive: true });

    // 写入枚举文件
    await fs.writeFile(outputFile, enumContent, 'utf8');
    console.log(`[LOG] 路由路径枚举已写入到: ${outputFile}`);

  } catch (error) {
    console.error(`[ERROR] 生成路由路径枚举时发生错误:`, error);
  }
}
// 主执行逻辑
async function main() {
  try {
    // 从视图根目录开始生成路由配置，基础路径为 '/'
    const finalRoutes = await generateRoutes(VIEWS_DIR, '/');
    // 将生成的路由配置写入到指定的 JSON 文件
    await writeRoutesToFile(finalRoutes, OUTPUT_FILE);
    // 根据生成的路由配置生成路由路径枚举
    await generateRoutePathEnum(finalRoutes, OUTPUT_ENUM_FILE);
  } catch (error) {
    console.error(`[ERROR] 主程序执行过程中发生错误:`, error);
  }
}

main();