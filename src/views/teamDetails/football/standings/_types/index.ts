/*
 * @Author: Mark
 * @Date: 2025-05-10 19:35:27
 * @LastEditTime: 2025-05-27 20:19:58
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/table/_types/index.ts
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


/** ✅ 1. 联赛赛季选择（赛季下拉）*/
  export interface LeagueSeasonOption {
  id: string;         // 唯一标识（可用于跳转或查询）
  logo: string;  
  name: string;       // 显示名称，如 "俄羅斯乙級聯賽 2024-2025"
  shortName?: string; // 可选的简称，如 "2024-2025"
  active?: boolean;   // 当前是否为选中项（可用于 UI 高亮）
}
/**✅ 建议的字段结构（带英文 key 和中文 label） */
export interface StandingTableColumn {
  key: string;
  label: string;
  fixedWidth?: number;      // 可选，适配小屏表格宽度
  align?: 'left' | 'center' | 'right'; // 可选，对齐方式
  fixed?: boolean;     // 可选，是否固定列（如队伍名称）
}
/**✅ 2. 联赛积分榜数据结构（分组） */
export interface LeagueStandingData {
  leagueId: string;
  seasonId: string;
  seasonName: string;
  groups: LeagueGroup[]; // 每个小组或赛区一组积分榜
}
export interface LeagueGroup {
  groupId: string;
  groupName: string;
  teams: {
      all: TeamStanding[];
      home: TeamStanding[];
      away: TeamStanding[];
  };
}

/**✅ 3. 每个小组数据结构（如 A组、B组） */
// export interface LeagueGroup {
//   groupId: string;
//   groupName: string;     // 如 "B組"、"南部區"
//   teams: TeamStanding[]; // 小组内球队积分列表
// }
/**✅ 4. 每支球队的积分数据（队伍排名） */
export interface TeamStanding {
  rank: number;
  teamId: string;
  teamName: string;
  logoUrl?: string;

  played: number;     // 总场次
  win: number;
  draw: number;
  lose: number;

  goalsFor: number;    // 进球数
  goalsAgainst: number; // 失球数

  points: number;      // 积分
}
/**✅ 5. 过滤类型（全部 / 主场 / 客场） */

export type StandingFilter = 'all' | 'home' | 'away';

/**✅ 6. 当前选中状态（用于前端组件） */
export interface StandingState {
  currentLeagueId: string;
  currentSeasonId: string;
  selectedFilter: StandingFilter;
}
