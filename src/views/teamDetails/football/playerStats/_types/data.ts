import { LeagueOption, SeasonOption, TeamPlayerStats } from ".";

/*
 * @Author: Mark
 * @Date: 2025-05-30 17:13:22
 * @LastEditTime: 2025-05-30 19:42:13
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/playerStats/_types/data.ts
 */
export const mockLeagues: LeagueOption[] = [
  { leagueId: 'iran-1', name: '伊朗甲級聯賽', logo: '/logos/iran1.png' },
  { leagueId: 'rus-2', name: '俄羅斯乙級聯賽', logo: '/logos/rus2.png' },
  { leagueId: 'rus-1', name: '俄羅斯甲級聯賽', logo: '/logos/rus1.png' }
];

export const mockSeasons: SeasonOption[] = [
  { seasonId: '2024-25', name: '2024-2025' },
  { seasonId: '2023-24', name: '2023-2024' },
  { seasonId: '2022-23', name: '2022-2023' },
  { seasonId: '2021-22', name: '2021-2022' },
  { seasonId: '2020-21', name: '20-21' }
];
export const mockTeamPlayerStats: TeamPlayerStats = {
  teamId: 'spartak-b',
  teamName: '莫斯科斯巴達B隊',
  seasonId: '2025',
  leagueId: 'rus-2',        // ✅ 新增联赛 ID
  statType: 'goals',
  stats: [
    {
      playerId: 'arseniy-filev',
      name: 'arseniy filev',
      logo: '/players/arseniy-filev.png',
      goals: 5,
      penaltyGoals: 1,
      rank: 1
    },
    {
      playerId: 'nikita-posmashnyi',
      name: 'nikita posmashnyi',
      logo: '/players/nikita-posmashnyi.png',
      goals: 3,
      penaltyGoals: 0,
      rank: 2
    },
    {
      playerId: 'viktor-solopov',
      name: 'viktor solopov',
      logo: '/players/viktor-solopov.png',
      goals: 1,
      penaltyGoals: 0,
      rank: 3
    },
    {
      playerId: 'gleb-popolitov',
      name: 'gleb popolitov',
      logo: '/players/gleb-popolitov.png',
      goals: 1,
      penaltyGoals: 0,
      rank: 4
    },
    {
      playerId: 'yuriy-petin',
      name: 'yuriy petin',
      logo: '/players/yuriy-petin.png',
      goals: 1,
      penaltyGoals: 0,
      rank: 5
    },
    {
      playerId: 'egor-gulyaev',
      name: 'egor gulyaev',
      logo: '/players/egor-gulyaev.png',
      goals: 1,
      penaltyGoals: 0,
      rank: 6
    }
  ]
};

export const statGroups = [
  {
    label: '进攻数据',
    types: ['goals', 'assists', 'shotsOnTarget', 'keyPasses'],
  },
  {
    label: '防守数据',
    types: ['goalkeeperSaves'],
  },
  {
    label: '纪律数据',
    types: ['yellowCards', 'redCards'],
  },
];
