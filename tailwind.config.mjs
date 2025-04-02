
// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
console.log('loading tailwind.config.js-')

// 单独为字体大小生成值
const generateSpacing = (v) => {
  const values = {};
  for (let i = 1; i <= v; i++) {
    values[i] = `${i / 10}rem`; // 简单值也可以工作
  }
  return values;
};

export default {
    content: [
      "./index.html", 
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
      // 确保包含来自节点模块的内容
  safelist: [
    { pattern: /^text-\d+$/ },  // 确保所有 text-{数字} 类都被包含
    { pattern: /^leading-\d+$/ }, // 确保所有 leading-{数字} 类都被包含
  ],
    theme: {
      extend: {
        screens: {
          sm: { max: '767px' },       // 手机
          md: { min: '768px', max: '1024px' }, // 平板
          lg: { min: '1025px'}, // 桌面
          // xl: { min: '1921px' },     // 超大桌面
        },
        spacing:{
          ...generateSpacing(50), // 自动生成 1px 到 300px 的类名
        } ,
        fontSize: {
          '50': '5rem',  // 直接添加一个具体值
          '60': '6rem',
          ...generateSpacing(100),
        },
        lineHeight: {
          ...generateSpacing(50),
        },
        borderRadius: {
          ...generateSpacing(50),
        },
        colors: {
          'my-custom-color': 'blue',
        },
      },
    },
  }