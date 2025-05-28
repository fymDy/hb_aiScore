/*
 * @Author: Mark
 * @Date: 2025-05-28 11:36:10
 * @LastEditTime: 2025-05-28 13:49:54
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/match/_types/index.ts
 */
export interface TeamMatchItem {
  matchId: string;
  date: string;
  isHome: boolean;
  teamName: string;
  teamLogo: string;
  score?: string;
  result?: 'W' | 'D' | 'L';
  status: 'finished' | 'upcoming';
}

export interface MatchGroup {
  matchType: string; // 联赛名称（如 “俄乙B”, “球會友誼賽”）
  matches: TeamMatchItem[];
}

export interface TeamMatchRecordGrouped {
  teamId: string;
  groups: MatchGroup[];
}
