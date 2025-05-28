/*
 * @Author: Mark
 * @Date: 2025-05-28 19:53:39
 * @LastEditTime: 2025-05-28 20:13:31
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/lineUp/_types/index.tsx
 */
/** 球员信息 */
export interface Player {
  playerId: string;
  name: string;
  avatarUrl: string;
  number?: number; // 球衣号，有可能为空
  marketValue?: string; // 市值，如 "150.0k€"
}

/** 球员分组信息（如 教练、前锋、中场...）*/
export interface PlayerGroup {
  groupName: string; // 组名称（如“前鋒”、“中場”、“門將”、“教練”）
  players: Player[];
}

/** 球队阵容接口 */
export interface TeamSquad {
  teamId: string;
  teamName: string;
  seasonId: string;
  groups: PlayerGroup[];
}
