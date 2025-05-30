import { IFTab } from "@/views/home/interface";
import { TeamBasicInfo, TeamNews, TeamRecentMatches, TeamSchedule, TeamTransfers } from ".";

/*
 * @Author: Mark
 * @Date: 2025-05-19 15:33:01
 * @LastEditTime: 2025-05-30 19:40:02
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/_types/data.ts
 */
export const mockTeamBasicInfo: TeamBasicInfo = {
  teamId: "nirooye-zamini",
  name_zh: "尼洛耶紮米尼",
  name_en: "Nirooye Zamini",
  squadType: 'first',
  country: "伊朗",
  countryLogo: "https://img1.aiscore.com/country/270eccdff2befbb1b227bb734fd01422.png!w60",
  league: "伊朗甲级联赛",
  marketValue: "1.6M€",
  coach: "法爾沙德·皮奧斯",
  averageAge: 24.5,
  logoUrl: "https://img0.aiscore.com/football/team/32efa824b9631897ca2468e8cea205e4.png!w100",
  foreignPlayerCount: 2,
  localPlayerCount: 3
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
/** 球队赛程及 MVP 信息 */
export const mockTeamSchedule: TeamSchedule = {
  teamId: 'nirooye-zamini',
  schedules: [
    {
      matchId: 'match-20250518',
      dateTime: '2025-05-18T14:30:00Z',
      isHome: false,
      score: '1-4',
      opponent: {
        teamId: 'shahr-bakht',
        name: '沙赫爾巴克',
        logo: '/logos/shahrbakht.png',
      },
      mvp: {
        logo: 'https://img0.aiscore.com/football/player/85e7dae2fe8eb2f7abf3575f45fff1f3.png!w60',
        name: '尤內斯·德爾菲',
        nationality: '伊朗',
        nationality_logo: 'https://img1.aiscore.com/country/270eccdff2befbb1b227bb734fd01422.png!w30',
        marketValue: '50.0k€',
      },
      topScorers: [
        {playerId: 'arseniy-filev',rank: 1,logo:'', name: '张三', goals: 3 },
        {playerId: 'arseniy-filev2',rank: 2, logo:'', name: '李四', goals: 2, penaltyGoals: 1 },
         {playerId: 'arseniy-filev3',rank: 3,logo:'', name: 'evgeny pshennikov', goals: 3 },
      ],
    },
    {
      matchId: 'match-20250512',
      dateTime: '2025-05-12T14:30:00Z',
      isHome: true,
      score: '2-0',
      opponent: {
        teamId: 'nasaji',
        name: '拿瑟馬塞泰利曼',
        logo: '/logos/nasaji.png',
      },
    },
  ]
}


export const mockTransfers: TeamTransfers = {
  teamId: "nirooye-zamini",
  transfersIn: [
    { playerName: "阿米爾·阿爾薩蘭·莫塔哈哈里", logo: "" },
    { playerName: "巴格·尼亞霍", logo: "" },
    { playerName: "塞利姆·圖瑪", logo: "" }
  ],
  transfersOut: [
    { playerName: "埃米爾·侯賽因·埃斯道伊爾", logo: "" },
    { playerName: "阿米羅森·奈伊", logo: "" },
    { playerName: "Mohammad Javad Eghdami", logo: "" }
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
export const footballTabs:IFTab[]=[
          {
            id: "overview",
            name: "概况",
          },
          {
            id: "standings",
            name: "积分榜",
          },
          {
            id: "match",
            name: "比赛",
          },
          {
            id: "lineUp",
            name: "阵容",
          },
          {
            id: "playerStats",
            name: "球员数据",
          },
          {
            id: "champion",
            name: "冠军",
          },

          {
            id: "transfer",
            name: "转会",
          },
        ]

export  const basketballTabs:IFTab[]=[
          {
            id: "overview",
            name: "概况",
          },
          {
            id: "table",
            name: "积分榜",
          },
          {
            id: "match",
            name: "比赛",
          },
          {
            id: "lineUp",
            name: "阵容",
          },
          {
            id: "data",
            name: "球员数据",
          },
        ]

export   const infoData={
    title:'基本信息',
    info:[
      {title:'教練',text:'康斯坦丁·科諾普列夫'},
      {title:'平均年齡',text:'22.7'},
      {title:'當前轉會窗口營收',text:' -1.3M€'},
      {title:'场馆',text:'阿卡德米亞澤尼特'},
      {title:'容納人數',text:' -'},
      {title:'城市',text:'-'},
    ],
    descTitle:'關於 聖彼德斯堡B隊',
    desc:`<div ><p><a style="color:#0F80DA" href="/zht/team-zenit-2-st-petersburg/69759i3j6wunk23">聖彼德斯堡B隊比分直播</a>，賽程，比賽結果和最新積分榜。 聖彼德斯堡B隊上一場比賽是與2025/05/17 UTC在<a style="color:#0F80DA" href="/zht/tournament-undefined/undefined">-</a>聯賽中對陣切列波維茨，比賽結果是0 : 2。 </p><p>聖彼德斯堡B隊下一場比賽將在2025/06/01 UTC對陣伊爾庫茨克，比賽開始後，您將能夠關注<a style="color:#0F80DA" href="/zht/match-irkutsk-zenit-2-st-petersburg/vmqy9ivevzwfgk9">伊爾庫茨克 vs 聖彼德斯堡B隊比分直播</a>，<a style="color:#0F80DA" href="/zht/head-to-head/soccer-irkutsk-vs-zenit-2-st-petersburg">H2H</a> ，即時積分榜，每分鐘更新的比賽結果和比賽統計資料。</p></div>`,
    details:`<div class="text mt-20" ><p><span style="font-size:13px;font-weight:700">聖彼德斯堡B隊最佳射手</span><br><m>timur ivanov，4進球<br><m>maksim khokhlov，2進球<br><m>evgeny pshennikov，2進球<br></m></m></m></p></div>`,
    ps:`<p>您可以點擊陣容頁面上的任何球員，並查看他的個人信息，例如國籍、出生日期、身高、慣用腳、位置、球員價值、轉會歷史等。 每位球員在所有比賽中的統計數據也都有，包括總比賽數、先發次數、上場時間、進球數、罰牌數等等。 AiScore <a style="color:#0F80DA" href="/zht/">足球比分直播</a> 可在 iPhone 和 iPad 應用程式上、在 Google Play 上的 Android 應用程式以及 Windows 手機應用程式上使用。 您可以在不同語言的各個商店搜尋 "AiScore" 找到我們。 安裝 AiScore 應用程序，即可在手機上即時關注所有 聖彼德斯堡B隊 比賽！</p>`
  }