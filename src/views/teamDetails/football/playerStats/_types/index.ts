/*
 * @Author: Mark
 * @Date: 2025-05-30 17:13:15
 * @LastEditTime: 2025-05-30 19:42:11
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/playerStats/_types/index.ts
 */

import { PlayerStatItem } from "@/views/teamDetails/_types";

/** 联赛选项（用于联赛下拉） */
export interface LeagueOption {
  leagueId: string;      // 联赛唯一 ID
  name: string;          // 联赛名称
  logo: string;       // 联赛图标 URL
}

/** 赛季选项（用于赛季切换） */
export interface SeasonOption {
  seasonId: string;      // 赛季唯一 ID，如 "2024-25"
  name: string;         // 显示文本，如 "2024-2025" 或 "20-21"
}



/** 球队的某个赛季的球员统计榜单 */
export interface TeamPlayerStats {
  teamId: string;         // 球队 ID
  teamName: string;       // 球队名称
  seasonId: string;       // 赛季 ID
  leagueId: string;          // ✅ 联赛 ID 应加上
  statType: PlayerStatType;      // 统计类型（当前仅进球，可扩展 assists 等）
  stats: PlayerStatItem[];// 排行榜数据
}
/** 球员数据统计类型，用于区分榜单类型 */
export type PlayerStatType =
  | 'goals'              // ⚽️ 进球数（含点球）榜单
  | 'assists'            // 🅰️ 助攻数榜单
  | 'minutesPlayed'      // ⏱️ 出场时间榜（单位：分钟）
  | 'yellowCards'        // 🟨 黄牌数榜单
  | 'redCards'           // 🟥 红牌数榜单
  | 'goalkeeperSaves'    // 🧤 门将扑救次数榜单
  | 'shotsOnTarget'      // 🎯 命中球门射门数榜单
  | 'keyPasses';         // 🎯 关键传球数榜单（决定性传球）
