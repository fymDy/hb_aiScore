import { TeamSquad } from ".";

/*
 * @Author: Mark
 * @Date: 2025-05-28 19:55:02
 * @LastEditTime: 2025-05-28 20:19:58
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/lineUp/_types/data.ts
 */
export const mockTeamSquad: TeamSquad = {
  teamId: 'zenit-b',
  teamName: '聖彼德斯堡B隊',
  seasonId: '2024-2025',
  groups: [
    {
      groupName: '教練',
      players: [
        {
          playerId: 'c-khonopolev',
          name: '康斯坦丁·科諾普列夫',
          avatarUrl: '/players/coach_konopolev.png',
        }
      ]
    },
    {
      groupName: '前鋒',
      players: [
        { playerId: 'f1', name: '基賽爾·法蒂耶夫', number: 52, avatarUrl: '/players/p1.png' },
        { playerId: 'f2', name: '萨瓦·科托夫', number: 38, avatarUrl: '/players/p2.png' },
        { playerId: 'f3', name: '阿基姆·貝羅霍諾夫', number: 83, avatarUrl: '/players/p3.png' },
        { playerId: 'f4', name: 'Anton·Bugorskiy', number: 96, avatarUrl: '/players/p4.png' },
        { playerId: 'f5', name: 'Evgeniy·Pshennikov', number: 86, avatarUrl: '/players/p5.png' },
        { playerId: 'f6', name: 'Roman·Kolmakov', number: 76, avatarUrl: '/players/p6.png' },
        { playerId: 'f7', name: '丹尼斯·魯巴諾夫', number: 67, avatarUrl: '/players/p7.png' }
      ]
    },
    {
      groupName: '中場',
      players: [
        { playerId: 'm1', name: '基賽爾·史圖保夫', number: 83, avatarUrl: '/players/m1.png', marketValue: '100.0k' },
        { playerId: 'm2', name: '葉夫吉尼·金·愛德華多維奇', number: 72, avatarUrl: '/players/m2.png' },
        { playerId: 'm3', name: '羅曼·諾娃夫', number: 58, avatarUrl: '/players/m3.png' },
        { playerId: 'm4', name: '瓦迪姆·西穆勝科夫', number: 37, avatarUrl: '/players/m4.png', marketValue: '150.0k' },
        { playerId: 'm5', name: '安德烈·奧尔洛夫', number: 42, avatarUrl: '/players/m5.png' }
      ]
    },
    {
      groupName: 'Defender',
      players: [
        { playerId: 'd1', name: '馬特維·巴爾達爾夫', number: 53, avatarUrl: '/players/d1.png', marketValue: '300.0k' },
        { playerId: 'd2', name: '尼基塔·洛波夫', number: 57, avatarUrl: '/players/d2.png', marketValue: '150.0k' },
        { playerId: 'd3', name: '安德烈·雅科夫列夫', number: 36, avatarUrl: '/players/d3.png', marketValue: '225.0k' },
        { playerId: 'd4', name: '維克托·科夫里目尼科夫', number: 84, avatarUrl: '/players/d4.png' }
      ]
    },
    {
      groupName: '門將',
      players: [
        { playerId: 'g1', name: '大衛·比亞兹羅夫', number: 91, avatarUrl: '/players/g1.png' },
        { playerId: 'g2', name: '弗拉基米爾·巴甫洛夫', number: 88, avatarUrl: '/players/g2.png' },
        { playerId: 'g3', name: '米哈伊爾·基澤夫', avatarUrl: '/players/g3.png', marketValue: '100.0k' }
      ]
    },
    {
      groupName: '其它',
      players: [
        { playerId: 'x1', name: 'Alexey·Kostyuk', avatarUrl: '/players/x1.png' }
      ]
    }
  ]
};
