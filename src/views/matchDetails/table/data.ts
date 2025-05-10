import { StandingGroup} from "./enum";

/*
 * @Author: Mark
 * @Date: 2025-05-10 19:35:53
 * @LastEditTime: 2025-05-10 19:40:00
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/table/data.ts
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
        },
      ]
    }
  ];
  
  