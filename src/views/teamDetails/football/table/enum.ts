/*
 * @Author: Mark
 * @Date: 2025-05-10 19:35:27
 * @LastEditTime: 2025-05-26 16:18:05
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/table/enum.ts
 */
export interface StandingTeam {
    rank: number;              // 排名
    team_id: string;           // 队伍 ID
    team_name: string;         // 队伍名称
    team_logo: string;         // 队伍 Logo 地址
    match_played: number;      // 场次 P
    wins: number;              // 胜 W
    draws: number;             // 平 D
    losses: number;            // 负 L
    goals_for: number;         // 进球数
    goals_against: number;     // 失球数
    goal_diff: number;         // 净胜球
    points: number;            // 积分 Pts
    status?: 'promoted' | 'relegated' | 'champion' | null; // 晋级/降级状态
  }
  export interface StandingGroup {
   
    type: 'all' | 'home' | 'away'; // 全部｜主场｜客场
    list: StandingTeam[];
 
  }

  export interface ScorerItem {
    rank: number;                 // 排名
    player_id: string;           // 球员 ID
    player_name: string;         // 球员姓名
    player_photo?: string;       // 球员头像（可选）
    goals: number;               // 进球数（不含点球）
    penalty_goals?: number;      // 点球进球数（可选）
    team_id: string;             // 所属球队 ID
    team_name: string;           // 球队名称
    team_logo: string;           // 球队 Logo
  }
  