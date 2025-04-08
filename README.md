# React + TypeScript + Vite

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