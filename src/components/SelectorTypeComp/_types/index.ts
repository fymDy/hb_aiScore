/*
 * @Author: Mark
 * @Date: 2025-05-30 17:39:03
 * @LastEditTime: 2025-05-30 17:41:37
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/Popup/SelectorType/_types/index.ts
 */
/** ✅ 1. 联赛赛季选择（赛季下拉）*/
  export interface LeagueSeasonOption {
  id: string;         // 唯一标识（可用于跳转或查询）
  logo: string;  
  name: string;       // 显示名称，如 "俄羅斯乙級聯賽 2024-2025"
  shortName?: string; // 可选的简称，如 "2024-2025"
  active?: boolean;   // 当前是否为选中项（可用于 UI 高亮）
}