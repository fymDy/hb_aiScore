import { TeamMatchRecordGrouped } from ".";

/*
 * @Author: Mark
 * @Date: 2025-05-28 11:36:22
 * @LastEditTime: 2025-05-28 16:30:46
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/match/_types/data.ts
 */
export const mockGroupedTeamMatches: TeamMatchRecordGrouped = {
  teamId: 'zenit-b',
  groups: [
    {
      matchType: '俄乙B',
      matches: [
        {
          matchId: 'match-20250601',
          date: '2025-06-01',
          isHome: false,
          teamName: '科基利亞諾沃',
          teamLogo: '/logos/opponent-11.png',
          status: 'upcoming'
        },
        {
          matchId: 'match-20250511',
          date: '2025-05-11',
          isHome: true,
          teamName: '莫斯科斯巴達B隊',
          teamLogo: '/logos/opponent-03.png',
          score: '2',
          result: 'L',
          status: 'finished'
        },
        {
          matchId: 'match-20250503',
          date: '2025-05-03',
          isHome: false,
          teamName: '染維捷',
          teamLogo: '/logos/opponent-04.png',
          score: '4',
          result: 'W',
          status: 'finished'
        },
        {
          matchId: 'match-20250427',
          date: '2025-04-27',
          isHome: true,
          teamName: '恩巴巴爾B隊',
          teamLogo: '/logos/opponent-05.png',
          score: '1',
          result: 'D',
          status: 'finished'
        }
      ]
    },
    {
      matchType: '球會友誼賽',
      matches: [
        {
          matchId: 'match-20250220',
          date: '2025-02-20',
          isHome: false,
          teamName: '孔波齊諾',
          teamLogo: '/logos/opponent-20.png',
          score: '1',
          result: 'W',
          status: 'finished'
        }
      ]
    },
    {
      matchType: '俄羅斯乙級聯賽',
      matches: [
        {
          matchId: 'match-20241103',
          date: '2024-11-03',
          isHome: false,
          teamName: '拉斯斯科利帕士星',
          teamLogo: '/logos/opponent-30.png',
          score: '3',
          result: 'D',
          status: 'finished'
        }
      ]
    }
  ]
};
