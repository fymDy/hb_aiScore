/*
 * @Author: Mark
 * @Date: 2025-05-10 15:09:28
 * @LastEditTime: 2025-05-10 15:15:08
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/chat/enum.ts
 */
export interface ChatMessage {
    id: string;            // 唯一标识（可用uuid）
    level: number;         // 等级
    username: string;      // 用户名
    message: string;       // 聊天内容
    timestamp?: string;    // 时间戳（可选）
    isOfficial?: boolean;  // 是否为官方账号（可选）
    badgeType?: 'vip' | 'admin' | 'normal';//展示等级图标、VIP 标识或官方标签
  }
  
 export enum EnumPlayerLevel{
    Level1='level1',
    Level10='level10',
    Level25='level25',
    Level31='level31',
    Level41='level41',
    Level47='level47',
    Level63='level63'
  }