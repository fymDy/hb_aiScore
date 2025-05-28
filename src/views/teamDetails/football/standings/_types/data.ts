import { LeagueSeasonOption, LeagueStandingData, ScorerItem, StandingGroup, StandingTableColumn, StandingTeam} from ".";

/*
 * @Author: Mark
 * @Date: 2025-05-10 19:35:53
 * @LastEditTime: 2025-05-27 20:20:33
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/table/_types/data.ts
 */
/**
   * 联赛：全部/主场/客场
   */
export const standingsGrouped: StandingGroup[] = [
    {
      type: 'all',
      list: [
        {
          rank: 1,
          team_id: "team001",
          team_name: "穆罕默德德SC",
          team_logo: "",
          match_played: 7,
          wins: 5,
          draws: 2,
          losses: 0,
          goals_for: 18,
          goals_against: 4,
          goal_diff: 14,
          points: 17,
          status: 'champion',
        },
        {
          rank: 2,
          team_id: "team002",
          team_name: "巴斯顺建拉国王",
          team_logo: "https://example.com/logo2.png",
          match_played: 8,
          wins: 3,
          draws: 2,
          losses: 3,
          goals_for: 13,
          goals_against: 13,
          goal_diff: 0,
          points: 11,
        },{
            rank: 2,
            team_id: "team002",
            team_name: "阿壩漢尼度哈卡",
            team_logo: "https://img0.aiscore.com/football/team/95ef5a50677bb521f6fdff4168928c44.png!w250",
            match_played: 8,
            wins: 3,
            draws: 2,
            losses: 3,
            goals_for: 13,
            goals_against: 13,
            goal_diff: 0,
            points: 11,
          },
          {
            rank: 2,
            team_id: "team002",
            team_name: "孟加拉國警察",
            team_logo: "https://img0.aiscore.com/football/team/cb91ecdc44c2c2e09418c0f7885bb4c0.png!w250",
            match_played: 8,
            wins: 3,
            draws: 2,
            losses: 3,
            goals_for: 13,
            goals_against: 13,
            goal_diff: 0,
            points: 11,
          },
      ]
    },
   
  ];
  /**
   * 射手榜
   */
  export const scorerList: ScorerItem[] = [
    {
      rank: 1,
      player_id: 'p01',
      player_name: '塞穆尔·博阿腾',
      player_photo: 'https://img0.aiscore.com/football/player/d4132d5d5e8e6d78d114884e341e8c31.png!w250',
      goals: 13,
      team_id: 't01',
      team_name: '高瑙塔尼',
      team_logo: 'https://img0.aiscore.com/football/team/cb91ecdc44c2c2e09418c0f7885bb4c0.png!w250'
    },
    {
      rank: 2,
      player_id: 'p02',
      player_name: 'S.迪阿巴',
      player_photo: 'https://example.com/t01.png',
      goals: 9,
      team_id: 't02',
      team_name: '穆罕默德德SC',
      team_logo: 'https://img0.aiscore.com/football/team/425089fac60d0217667f53cd3fcdcf17.png!w250'
    },
    {
      rank: 3,
      player_id: 'p03',
      player_name: '拉基卜·侯赛因',
      player_photo: 'https://img0.aiscore.com/football/player/b199181dec8e5e3852ebdacaafc55e46.png!w250',
      goals: 7,
      team_id: 't03',
      team_name: '孟加拉国警察',
      team_logo: 'https://example.com/t03.png'
    },
    {
      rank: 8,
      player_id: 'p08',
      player_name: '艾哈迈德·福伊萨尔·穆罕默德·法希姆',
      player_photo: 'https://img0.aiscore.com/football/player/4d14d7f98667a2836076d29144c3b960.png!w250',
      goals: 5,
      penalty_goals: 1, // 点球
      team_id: 't04',
      team_name: '兄弟联盟',
      team_logo: 'https://example.com/t04.png'
    }
    // ... 其余同理
  ];
  /**
   * ✅ mock 数据：赛季列表
   */
  export const mockLeagueSeasons: LeagueSeasonOption[] = [
  { id: 'rus-b-2025',logo:'', name: '俄乙B 2025' },
  { id: 'rus-2-2024-25',logo:'', name: '俄羅斯乙級聯賽 2024-2025', active: true },
  { id: 'rus-2-2024', logo:'',name: '俄羅斯乙級聯賽 2024' },
  { id: 'rus-2-2023-2024',logo:'', name: '俄羅斯乙級聯賽 2023-2024' },
  { id: 'rus-2-2022-2023', logo:'',name: '俄羅斯乙級聯賽 2022-2023' }
];

export const standingTableHeaders: StandingTableColumn[] = [
  { key: 'rank', label: '#', fixedWidth: 20, align: 'center' },
  { key: 'team', label: '隊伍',fixedWidth: 120, fixed: true },
  { key: 'played', label: 'P', align: 'center' },
  { key: 'win', label: 'W', align: 'center' },
  { key: 'draw', label: 'D', align: 'center' },
  { key: 'lose', label: 'L', align: 'center' },
  { key: 'goals', label: 'G', align: 'center' }, // 合并字段：goalsFor:goalsAgainst
  { key: 'points', label: 'PTS', align: 'center' }
];

  /**俄乙联赛赛季数据 */

export const mockStandingData: LeagueStandingData = {
  leagueId: 'rus-2',
  seasonId: 'rus-2024-25',
  seasonName: '俄羅斯乙級聯賽 2024-2025',
  groups: [
    {
      groupId: 'group-b',
      groupName: 'B組',
      teams:{
        all: [
        { rank: 1, teamId: 'rodina-b', teamName: '羅迪納莫斯科B隊', logoUrl: '', played: 18, win: 10, draw: 5, lose: 3, goalsFor: 39, goalsAgainst: 22, points: 35 },
        { rank: 2, teamId: 'ural', teamName: '烏里揚諾夫斯克', logoUrl: '', played: 18, win: 10, draw: 5, lose: 3, goalsFor: 32, goalsAgainst: 18, points: 35 },
        { rank: 3, teamId: 'miass', teamName: '米阿斯', logoUrl: '', played: 18, win: 9, draw: 5, lose: 4, goalsFor: 19, goalsAgainst: 14, points: 32 },
        { rank: 4, teamId: 'zvezda', teamName: '燦呼克', logoUrl: '', played: 18, win: 7, draw: 6, lose: 5, goalsFor: 22, goalsAgainst: 20, points: 27 },
        { rank: 5, teamId: 'bronnitsy', teamName: '布良斯克競拿模', logoUrl: '', played: 18, win: 7, draw: 5, lose: 6, goalsFor: 24, goalsAgainst: 22, points: 26 },
        { rank: 6, teamId: 'fakel', teamName: '穆羅姆', logoUrl: '', played: 18, win: 6, draw: 4, lose: 8, goalsFor: 19, goalsAgainst: 24, points: 22 },
        { rank: 7, teamId: 'kolomna', teamName: '立立奴奴姆斯克', logoUrl: '', played: 18, win: 4, draw: 6, lose: 8, goalsFor: 19, goalsAgainst: 28, points: 18 },
        { rank: 8, teamId: 'kaluga', teamName: '科捷米米克', logoUrl: '', played: 18, win: 5, draw: 3, lose: 10, goalsFor: 22, goalsAgainst: 30, points: 17 },
        { rank: 9, teamId: 'ryazan', teamName: '利比克', logoUrl: '', played: 18, win: 4, draw: 5, lose: 9, goalsFor: 21, goalsAgainst: 26, points: 17 },
        { rank: 10, teamId: 'spartak-tambov', teamName: '克拉斯諾達爾B隊', logoUrl: '', played: 18, win: 3, draw: 7, lose: 8, goalsFor: 24, goalsAgainst: 33, points: 16 }
      ],
      home: [
        { rank: 1, teamId: 'rodina-b', teamName: '羅迪納莫斯科B隊', logoUrl: '', played: 18, win: 10, draw: 5, lose: 3, goalsFor: 39, goalsAgainst: 22, points: 35 },
        { rank: 2, teamId: 'ural', teamName: '烏里揚諾夫斯克', logoUrl: '', played: 18, win: 10, draw: 5, lose: 3, goalsFor: 32, goalsAgainst: 18, points: 35 },
        { rank: 3, teamId: 'miass', teamName: '米阿斯', logoUrl: '', played: 18, win: 9, draw: 5, lose: 4, goalsFor: 19, goalsAgainst: 14, points: 32 },
        { rank: 4, teamId: 'zvezda', teamName: '燦呼克', logoUrl: '', played: 18, win: 7, draw: 6, lose: 5, goalsFor: 22, goalsAgainst: 20, points: 27 },
      ],
      away: [
        { rank: 6, teamId: 'fakel', teamName: '穆羅姆', logoUrl: '', played: 18, win: 6, draw: 4, lose: 8, goalsFor: 19, goalsAgainst: 24, points: 22 },
        { rank: 7, teamId: 'kolomna', teamName: '立立奴奴姆斯克', logoUrl: '', played: 18, win: 4, draw: 6, lose: 8, goalsFor: 19, goalsAgainst: 28, points: 18 },
        { rank: 8, teamId: 'kaluga', teamName: '科捷米米克', logoUrl: '', played: 18, win: 5, draw: 3, lose: 10, goalsFor: 22, goalsAgainst: 30, points: 17 },
        { rank: 9, teamId: 'ryazan', teamName: '利比克', logoUrl: '', played: 18, win: 4, draw: 5, lose: 9, goalsFor: 21, goalsAgainst: 26, points: 17 },
        { rank: 10, teamId: 'spartak-tambov', teamName: '克拉斯諾達爾B隊', logoUrl: '', played: 18, win: 3, draw: 7, lose: 8, goalsFor: 24, goalsAgainst: 33, points: 16 }
      ]
      }
    },
    {
    
      groupId: 'group-c',
      groupName: 'C組',
      teams:{
        all: [
        { rank: 1, teamId: 'kamaz', teamName: '基洛夫競拿模', logoUrl: '', played: 26, win: 17, draw: 6, lose: 3, goalsFor: 52, goalsAgainst: 19, points: 57 },
        { rank: 2, teamId: 'anka', teamName: '安卡', logoUrl: '', played: 26, win: 16, draw: 7, lose: 3, goalsFor: 35, goalsAgainst: 15, points: 55 },
        { rank: 3, teamId: 'kuban', teamName: '卡山魯賓B隊', logoUrl: '', played: 26, win: 14, draw: 6, lose: 6, goalsFor: 42, goalsAgainst: 16, points: 48 },
        { rank: 4, teamId: 'sochi', teamName: '索科爾薩蘭', logoUrl: '', played: 26, win: 13, draw: 6, lose: 7, goalsFor: 43, goalsAgainst: 24, points: 45 },
        { rank: 5, teamId: 'volga', teamName: '沃爾納諾夫哥羅德', logoUrl: '', played: 26, win: 13, draw: 4, lose: 9, goalsFor: 41, goalsAgainst: 31, points: 43 },
        { rank: 6, teamId: 'tom', teamName: '綠維杜夫B隊', logoUrl: '', played: 26, win: 10, draw: 10, lose: 6, goalsFor: 39, goalsAgainst: 26, points: 40 }
      ],
      home: [
      { rank: 1, teamId: 'kamaz', teamName: '基洛夫競拿模', logoUrl: '', played: 26, win: 17, draw: 6, lose: 3, goalsFor: 52, goalsAgainst: 19, points: 57 },
        { rank: 2, teamId: 'anka', teamName: '安卡', logoUrl: '', played: 26, win: 16, draw: 7, lose: 3, goalsFor: 35, goalsAgainst: 15, points: 55 },
        { rank: 3, teamId: 'kuban', teamName: '卡山魯賓B隊', logoUrl: '', played: 26, win: 14, draw: 6, lose: 6, goalsFor: 42, goalsAgainst: 16, points: 48 },
      { rank: 4, teamId: 'sochi', teamName: '索科爾薩蘭', logoUrl: '', played: 26, win: 13, draw: 6, lose: 7, goalsFor: 43, goalsAgainst: 24, points: 45 },
      ],
      away: [
        { rank: 5, teamId: 'volga', teamName: '沃爾納諾夫哥羅德', logoUrl: '', played: 26, win: 13, draw: 4, lose: 9, goalsFor: 41, goalsAgainst: 31, points: 43 },
        { rank: 6, teamId: 'tom', teamName: '綠維杜夫B隊', logoUrl: '', played: 26, win: 10, draw: 10, lose: 6, goalsFor: 39, goalsAgainst: 26, points: 40 }
      ]
      }
    }
  ]
};


