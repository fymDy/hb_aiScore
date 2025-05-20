/*
 * @Author: Mark
 * @Date: 2025-05-19 15:11:08
 * @LastEditTime: 2025-05-20 16:14:07
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/_types/index.ts
 */
/** 球队基础信息 */
export interface TeamBasicInfo {
  teamId: string;                // 球队唯一 ID
  name_zh: string;              // 球队中文名称，如 "尼洛耶紮米尼"
  name_en: string;              // 球队英文名称，如 "Nirooye Zamini"
  squadType: 'first' | 'reserve' | 'youth'; // 球队类型：一线队（first）、预备队（reserve）、青年队（youth）
  country: string;              // 所在国家，例如 "伊朗"
  countryLogo:string;           //国家徽标    
  league: string;               // 所属联赛名称，例如 "伊朗甲级联赛"
  marketValue: string;         // 市值，例如 "1.6M€"
  coach: string;                // 主教练姓名
  averageAge: number;          // 球队平均年龄，例如 24.5
  logoUrl: string;             // 队徽 URL
  foreignPlayerCount: number;  // 外援人数
  localPlayerCount: number;    // 本土球员人数
}
// 定义每场比赛的数据结构

/** 单场比赛结果信息 */
export interface MatchCanvasPoint {
  date: string;                 // 比赛日期，格式 YYYY-MM-DD
  opponentLogo: string;        // 对手队徽 URL
  opponentName?: string;        // 对手队名
  homeOrAway?: 'home' | 'away'; // 是否主场
  result: 'W' | 'D' | 'L';      // 比赛结果：胜(W)、平(D)、负(L)
  score: string;               // 比分，例如 "4-1"
}
/**近期战绩及比赛结果 */
export interface TeamRecentMatches {
  teamId: string;
  matches: MatchCanvasPoint[];      // 近期比赛列表
}

/** 球队赛程及 MVP 信息 */
export interface MatchSchedule {
  matchId: string;             // 比赛唯一标识 ID
  dateTime: string;            // 开赛时间，UTC 格式
  opponentName: string;       // 对手名称
  isHome: boolean;            // 是否主场
  score: string;              // 最终比分
  mvp: {
    name: string;             // MVP 球员姓名
    nationality: string;      // MVP 国籍，例如 "伊朗"
    avatarUrl: string;        // MVP 头像 URL
    marketValue: string;      // 市值，例如 "50.0k€"
  };
}
/**未来赛程及 MVP 球员信息； */
export interface TeamSchedule {
  teamId: string;
  schedules: MatchSchedule[]; // 赛程列表
}

/** 球队转会信息 */
export interface TransferRecord {
  playerName: string;          // 球员姓名
  fromTeam?: string;           // 来源俱乐部（转入时有）
  toTeam?: string;             // 去向俱乐部（转出时有）
}
/**转会记录（转入/转出） */
export interface TeamTransfers {
  teamId: string;
  transfersIn: TransferRecord[];   // 转入球员列表
  transfersOut: TransferRecord[];  // 转出球员列表
}

/** 球队新闻和动态 */
export interface TeamNews {
  teamId: string;
  description: string;         // 球队简介内容
  relatedLinks: {
    title: string;             // 链接标题，例如 “尼洛耶紮米尼 vs 沙赫爾巴克”
    url: string;               // 链接 URL
  }[];
}
