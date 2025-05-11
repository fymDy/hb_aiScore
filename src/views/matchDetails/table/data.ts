import { ScorerItem, StandingGroup, StandingTeam} from "./enum";

/*
 * @Author: Mark
 * @Date: 2025-05-10 19:35:53
 * @LastEditTime: 2025-05-11 16:06:15
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/table/data.ts
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
          team_logo: "https://example.com/logo1.png",
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
    {
      type: 'home',
      list: [
        {
          rank: 1,
          team_id: "team001",
          team_name: "穆罕默德德SC",
          team_logo: "https://example.com/logo1.png",
          match_played: 4,
          wins: 3,
          draws: 1,
          losses: 0,
          goals_for: 10,
          goals_against: 2,
          goal_diff: 8,
          points: 10,
        },
        {
          rank: 2,
          team_id: "team002",
          team_name: "巴斯顺建拉国王",
          team_logo: "https://example.com/logo2.png",
          match_played: 4,
          wins: 2,
          draws: 1,
          losses: 1,
          goals_for: 7,
          goals_against: 4,
          goal_diff: 3,
          points: 7,
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
      ]
    },
    {
      type: 'away',
      list: [
        {
          rank: 1,
          team_id: "team001",
          team_name: "穆罕默德德SC",
          team_logo: "https://example.com/logo1.png",
          match_played: 3,
          wins: 2,
          draws: 1,
          losses: 0,
          goals_for: 8,
          goals_against: 2,
          goal_diff: 6,
          points: 7,
        },
        {
          rank: 2,
          team_id: "team002",
          team_name: "巴斯顺建拉国王",
          team_logo: "https://example.com/logo2.png",
          match_played: 4,
          wins: 1,
          draws: 1,
          losses: 2,
          goals_for: 6,
          goals_against: 9,
          goal_diff: -3,
          points: 4,
        },{
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
          }
      ]
    }
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
  