

export default{
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 10, // 设置基础字体大小
        unitPrecision: 5, // 转换后的精度
        propList: ['*'], // 要转换的属性
        selectorBlackList: ['.ignore'], // 要忽略的选择器
        replace: true, // 是否替换原始 px 值
        mediaQuery: false, // 是否转换媒体查询中的 px
        minPixelValue: 0, // 最小转换像素值
        exclude: /node_modules/i, // 要排除的文件
      },
    },
   
  };
  