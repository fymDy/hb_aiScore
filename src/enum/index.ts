/*
 * @Author: Mark
 * @Date: 2025-03-24 14:32:44
 * @LastEditTime: 2025-04-09 11:32:35
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/enum/index.ts
 */
// 定义断点
export const enum EnumBreakpoints{
    mobile= 768,
    tablet= 1024,
  };

export enum EnumCustomerSize{
     baseWidth = 1920, // 设计稿宽度
     minWidth = 375,// 最小宽度
     maxWidth = 2560,  // 超大屏最大宽度
     baseFontSize = 12.5, // 设计稿基准字体大小
}

export enum EnumDeviceType{
    Mobile='Mobile',
    Tablet='Tablet',
    Pc='Pc'
}

