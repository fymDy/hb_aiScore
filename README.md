# React + TypeScript + Vite
# 构建命令： 
# 方法一： npm create vite@latest
# 方法二： npx create-vite my-react-app --template react-ts
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 足球比赛图标实况思路
## 需求整理如下：
项目	内容
🧱 高度	总高 110px，顶部刻度 20px，内容 90px（上下各 45px）
⏱ 时间刻度线	每 15 分钟，7 条线，颜色 #e3e3e3 ✅
⏱ 时间文字	显示 0' 15' 30' ... 90' ✅
🧊 主队背景色（上）	#fff, #ecf7fd, #d2e9fe ✅
🍊 客队背景色（下）	#fff2df, #fffaf3, #fff ✅
📊 柱状图	每分钟 1 根、宽 1%、高度自定义 ✅
🟦 主队柱颜色	#1989fa ✅
🟧 客队柱颜色	#FFBA5A ✅
🏷️ 每个柱/事件有 id	如 home-0, away-20, eh-1, ea-0 ✅
🧷 事件图标	使用 emoji 🏁 / 🟨，大小 14×14，居中在最顶部/最底部 ✅
## 功能实现整理如下：
功能	                        实现
每队100根柱子	         ✅ 1% 宽度，minute 对应位置
events 分队结构	       ✅ { home: [...], away: [...] }
背景三条分层	          ✅ 顶部：白蓝蓝；底部：橙橙白
事件图标 14×14 居中显示	✅ 显式控制尺寸，定位在最上/最下白色层

「基于 SVG symbol 雪碧图的最佳实践流程」，包括 UI 交接、清洗、打包、预览、开发使用几个关键阶段
UI 通常会导出一批 .svg 图标

常见问题：
1、每个 SVG 带有 width 和 height 属性（固定尺寸 ❌）
2、有时包含 <clipPath>、<defs>、<title>、<desc>、注释等冗余标签

第二步：SVG 文件清洗
项	原因
❌ 删除 width / height 属性	避免固定尺寸，确保可缩放
✅ 保留 viewBox	用于 symbol 模式控制大小
✅ 清除注释、title、metadata 等	避免冗余和冲突
✅ 修复 clipPath 中缺少的 width/height	防止渲染失败
✅ 统一命名规范	生成的 <symbol id="iconName"> 可预期

第三步：打包为雪碧图（symbol 模式）
文件	作用
sprite.svg	雪碧图（包含所有 <symbol>）
sprite-symbols.json	ID 列表，便于开发引用
sprite-preview.html	图标可视化预览页面

第四步：开发中使用
✅ 引入一次 sprite.svg 内容（在入口）
✅ 使用组件渲染图标：<SvgIcon name="iconPenalty" size={24} color="#f00" />

src/styles/utils/
├── _variables.scss         // 统一变量（颜色、字体、间距等）
├── _mixins.scss            // 通用 @mixin 方法（text、size、spacing 等）
├── _utilsSpacing.scss      // padding / margin 工具类
├── _utilsSize.scss         // 宽高 / min-max 尺寸控制
├── _utilsText.scss         // 字体、颜色、省略、多行裁剪
├── _utilsColor.scss        // color / background / border-color
├── _utilsPosition.scss     // position 定位封装
├── _utilsFlex.scss         // Flex 布局快捷类
├── _utilsGrid.scss         // Grid 布局快捷类
├── _index.scss             // 统一 @forward 出口
└── main.scss               // 主入口引入 + 示例

✅ 快速使用
@use '@/styles/utils/index' as *;
然后在任意 SCSS / 组件中可使用：
.card {
  @include w(300);
  @include px(16px);
  @include font-size(18px);
  @include flex-center;
  @include color(#333);
}