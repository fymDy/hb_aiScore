import { TeamBasicInfo, TeamNews, TeamRecentMatches, TeamSchedule, TeamTransfers } from ".";

/*
 * @Author: Mark
 * @Date: 2025-05-19 15:33:01
 * @LastEditTime: 2025-05-19 15:41:48
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/_types/data.ts
 */
export const mockTeamBasicInfo: TeamBasicInfo = {
  teamId: "nirooye-zamini",
  name_zh: "尼洛耶紮米尼",
  name_en: "Nirooye Zamini",
  country: "伊朗",
  countryLogo: "https://img1.aiscore.com/country/270eccdff2befbb1b227bb734fd01422.png!w60",
  league: "伊朗甲级联赛",
  marketValue: "1.6M€",
  coach: "法爾沙德·皮奧斯",
  averageAge: 24.5,
  logoUrl: "https://img0.aiscore.com/football/team/32efa824b9631897ca2468e8cea205e4.png!w100"
};
/** */
export const mockRecentMatches: TeamRecentMatches = {
  teamId: "nirooye-zamini",
  matches: [
    {
      date: "2025-04-16",
      opponentLogo: "/logos/team-a.png",
      opponentName: "隊伍A",
      homeOrAway: "home",
      result: "D",
      score: "0-0"
    },
    {
      date: "2025-04-22",
      opponentLogo: "/logos/team-b.png",
      opponentName: "隊伍B",
      homeOrAway: "away",
      result: "D",
      score: "1-1"
    },
    {
      date: "2025-05-06",
      opponentLogo: "/logos/team-c.png",
      opponentName: "隊伍C",
      homeOrAway: "home",
      result: "W",
      score: "2-1"
    },
    {
      date: "2025-05-12",
      opponentLogo: "/logos/team-d.png",
      opponentName: "隊伍D",
      homeOrAway: "away",
      result: "L",
      score: "1-3"
    },
    {
      date: "2025-05-18",
      opponentLogo: "/logos/team-e.png",
      opponentName: "沙赫爾巴克",
      homeOrAway: "away",
      result: "L",
      score: "1-4"
    }
  ]
};

export const mockTeamSchedule: TeamSchedule = {
  teamId: "nirooye-zamini",
  schedules: [
    {
      matchId: "match-20250518",
      dateTime: "2025-05-18T14:30:00Z",
      opponentName: "沙赫爾巴克",
      isHome: false,
      score: "1-4",
      mvp: {
        name: "尤內斯·德爾菲",
        nationality: "伊朗",
        avatarUrl: "/players/delfi.png",
        marketValue: "50.0k€"
      }
    }
  ]
};


export const mockTransfers: TeamTransfers = {
  teamId: "nirooye-zamini",
  transfersIn: [
    { playerName: "阿米爾·阿爾薩蘭·莫塔哈哈里", fromTeam: "隊伍X" },
    { playerName: "巴格·尼亞霍", fromTeam: "隊伍Y" },
    { playerName: "塞利姆·圖瑪", fromTeam: "隊伍Z" }
  ],
  transfersOut: [
    { playerName: "埃米爾·侯賽因·埃斯道伊爾", toTeam: "隊伍A" },
    { playerName: "阿米羅森·奈伊", toTeam: "隊伍B" },
    { playerName: "Mohammad Javad Eghdami", toTeam: "隊伍C" }
  ]
};

export const mockTeamNews: TeamNews = {
  teamId: "nirooye-zamini",
  description:
    "尼洛耶紮米尼上一場比賽在2025/05/18 UTC對陣沙赫爾巴克，最終比分是 1-4，尼洛耶紮米尼落敗。教練為法爾沙德·皮奧斯，平均年齡 24.5 歲。",
  relatedLinks: [
    {
      title: "沙赫爾巴克 vs 尼洛耶紮米尼 預測",
      url: "/news/match-prediction"
    },
    {
      title: "沙赫爾巴克 vs 尼洛耶紮米尼 比分直播",
      url: "/live/match"
    },
    {
      title: "沙赫爾巴克 vs 尼洛耶紮米尼 數據",
      url: "/stats/match"
    }
  ]
};
