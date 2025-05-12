/*
 * @Author: Mark
 * @Date: 2025-05-12 17:39:51
 * @LastEditTime: 2025-05-12 17:41:15
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/types/home.ts
 */
// 可支持的运动类型
export type SportType =
  | 'football'       // 足球
  | 'basketball'     // 篮球
  | 'volleyball'     // 排球
  | 'baseball'       // 棒球
  | 'rugby'          // 美式橄榄球
  | 'badminton'      // 羽毛球
  | 'tennis'         // 网球
  | 'esports'        // 电竞
  | 'iceHockey'      // 冰球
  | 'pingpong'       // 乒乓球
  | 'handball'       // 手球
  | 'waterpolo'      // 水球
  | 'snooker'        // 斯诺克
  | 'boardball';     // 板球 / 板球类扩展

// 比赛状态
export type MatchStatus = 'not_started' | 'live' | 'ended';

// 单个队伍或选手结构
export interface Participant {
  id: number;              // 队伍/选手 ID
  name: string;            // 队伍/选手名称
  logo?: string;           // 队伍徽标（部分项目不适用）
  score?: number;          // 当前分数
  redCards?: number;       // 红牌（足球类）
  yellowCards?: number;    // 黄牌（足球类）
  sets?: number[];         // 每局/每节比分（如排球、网球）
}

// 比分结构
export interface MatchScore {
  home: number;            // 主队/选手得分
  away: number;            // 客队/选手得分
  halfTime?: string;       // 半场/中场比分（适用于足球、篮球等）
  currentMinute?: number;  // 当前比赛分钟（足球等）
  currentSet?: number;     // 当前局（排球、网球等）
  sets?: Array<[number, number]>; // 每局比分（如 [25, 22], [23, 25]）
}

// 比赛赔率（如适用）
export interface Odds {
  home: string;            // 主胜赔率
  draw?: string;           // 平局赔率（如适用）
  away: string;            // 客胜赔率
}

// 主体比赛项结构
export interface MatchItem {
  matchId: number;         // 比赛 ID，全局唯一
  sport: SportType;        // 所属运动类型
  leagueId: number;        // 联赛 ID
  leagueName: string;      // 联赛名称
  leagueLogo?: string;     // 联赛 Logo 图标
  startTime: string;       // 比赛开始时间（ISO 格式）
  status: MatchStatus;     // 比赛状态
  home: Participant;       // 主队/主选手
  away: Participant;       // 客队/客选手
  score?: MatchScore;      // 当前比分数据
  odds?: Odds;             // 当前赔率（如支持）
  isLive?: boolean;        // 是否正在直播（或动画直播）
  isFav?: boolean;         // 用户是否关注该比赛
  stageName?: string;      // 分组阶段/赛段，如 “小组赛A组” 等
  roundName?: string;      // 轮次信息，如 “第16轮”、“1/4决赛”
  venue?: string;          // 比赛场地名称（如有）
}
export interface MatchData {
    data:MatchItem[]
}