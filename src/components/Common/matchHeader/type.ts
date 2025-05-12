/*
 * @Author: Mark
 * @Date: 2025-05-12 19:43:26
 * @LastEditTime: 2025-05-12 20:08:11
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/Common/matchHeader/type.ts
 */
export interface LiveInfo {
    type: 'none' | 'animation' | 'video' | 'text' | 'third_party'; // 直播类型
    provider?: string;         // 直播提供商名称（如 Migu、CCTV5、iQIYI）
    logo?: string;             // 第三方直播图标 URL
    url?: string;              // 若为第三方直播，可跳转的链接
  }
export interface FootballTeam {
    id: number;              // 队伍 ID
    name: string;            // 队伍名称
    logo: string;            // 队伍徽标 URL
    score: number;           // 全场得分
  }
  
  export interface FootballMatchDetail {
    matchId: number;         // 比赛 ID
    leagueId: number;        // 联赛 ID
    leagueName: string;      // 联赛名称
    matchDate: string;       // 比赛日期（ISO 格式）
    weekDay: string;         // 星期几（如：星期三）
    startTime: string;       // 比赛开始时间
    status: 'not_started' | 'live' | 'ended';  // 比赛状态
    currentTime?: string; // 当前时间进度（仅在 live 时有值，如 "70'", "Q2 03:12"）
    isFavorite: boolean;     // 当前用户是否收藏
    homeTeam: FootballTeam;  // 主队信息
    awayTeam: FootballTeam;  // 客队信息
    halfTimeScore: string;   // 半场比分，如 '0-0'
    fullTimeScore: string;   // 全场比分，如 '0-1'
    liveInfo:LiveInfo;//直播信息
  }
  