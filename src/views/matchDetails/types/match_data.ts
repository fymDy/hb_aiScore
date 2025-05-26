/*
 * @Author: Mark
 * @Date: 2025-05-04 20:44:17
 * @LastEditTime: 2025-05-26 17:08:18
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/types/match_data.ts
 */
import { EnumIconFontType } from '@/enum/enumIconFontType';
import { IFTab } from '@/views/home/interface';

export const EventsAllData=[
      {icon:EnumIconFontType.icongoal,name:'進球'},
      {icon:EnumIconFontType.iconPenalty,name:'點球'},
      {icon:EnumIconFontType.iconPenaltySaved,name:'射失點球'},
      {icon:EnumIconFontType.iconown_goal,name:'烏龍球'},
      {icon:EnumIconFontType.iconCorner,name:'角球'},
      {icon:EnumIconFontType.iconyellowcard,name:'黃牌'},
      {icon:EnumIconFontType.iconredcard,name:'紅牌'},
      {icon:EnumIconFontType.icontwoyellow_red,name:'兩黃變一紅'},
      {icon:EnumIconFontType.iconsubstitution,name:'換人'},
      {icon:EnumIconFontType.iconInjuryreplace,name:'因傷換人'}

  ]

const teamData={
    "team_id": "TEAM_A",
    "team_name": "主队名称",
    "score": 2,
    "statistics": {
      "halftime": {
        "possession": "15%",
        "shots": {
          "total": 7,
          "on_target": 51,
          "off_target": 4,
          "blocked": 2,
          "inside_box": 5,
          "outside_box": 2,
          "woodwork": 0,
          "big_chances": 2,
          "big_chances_missed": 1,
          "saved": 1,
          "penalty_area_attempts": 5,
          "goals": 1
        },
        "corners": 3,
        "offsides": 0,
        "fouls": 8,
        "yellow_cards": 1,
        "red_cards": 0,
        tackles:11,
        interceptions:12,
        clearances:13,
        saves:14,
        "passes": {
          "total": 250,
          "accurate": 210,
          "key_passes": 5,
          "crosses": 4,
          "long_balls": 10,
          "through_balls": 2,
          "short_passes": 234,
          "pass_accuracy_pct": 84,
          "passes_into_final_third": 12,
          "passes_into_penalty_area": 4,
          "progressive_passes": 10
        }
      },
      "secondhalf": {
        "possession": "55%",
        "shots": {
          "total": 11,
          "on_target": 21,
          "off_target": 4,
          "blocked": 3,
          "inside_box": 5,
          "outside_box": 6,
          "woodwork": 7,
          "big_chances": 8,
          "big_chances_missed": 10,
          "saved": 11,
          "penalty_area_attempts": 14,
          "goals": 11
        },
        "corners": 13,
        "offsides": 10,
        "fouls": 18,
        "yellow_cards": 11,
        "red_cards": 10,
        tackles:51,
        interceptions:52,
        clearances:53,
        saves:54,
        "passes": {
          "total": 1283,
          "accurate": 1240,
          "key_passes": 16,
          "crosses": 15,
          "long_balls": 1,
          "through_balls": 13,
          "short_passes": 1265,
          "pass_accuracy_pct": 184.8,
          "passes_into_final_third": 114,
          "passes_into_penalty_area": 16,
          "progressive_passes": 112
        }
      },
      "fulltime": {
        "possession": "95%",
        "shots": {
          "total": 113,
          "on_target": 16,
          "off_target": 17,
          "blocked": 14,
          "inside_box": 19,
          "outside_box": 14,
          "woodwork": 11,
          "big_chances": 13,
          "big_chances_missed": 11,
          "saved": 21,
          "penalty_area_attempts": 19,
          "goals": 12
        },
        "corners": 16,
        "offsides": 10,
        "fouls": 16,
        "yellow_cards": 2,
        "red_cards": 0,
        tackles:61,
        interceptions:62,
        clearances:63,
        saves:64,
        "passes": {
          "total": 1533,
          "accurate": 1450,
          "key_passes": 111,
          "crosses": 19,
          "long_balls": 121,
          "through_balls": 15,
          "short_passes": 1499,
          "pass_accuracy_pct": 126,
          "passes_into_final_third": 261,
          "passes_into_penalty_area": 101,
          "progressive_passes": 221
        }
      }
    },
    "lineup": [],
    "substitutions": []
}
export const matchData={
    "event_id": "MATCH12345",
    "sport": "football",
    "season": "2024-2025",
    "match_date": "2025-05-04T19:00:00+04:00",
    "match_timestamp": 1746370800,
    "status": "finished",
    "stage": "Group Stage",
    "teams": {
      "home": {
        "team_id": "TEAM_A",
        "team_name": "主队名称",
        "score": 2,
        "statistics": {
          "halftime": {
            "possession": "85%",
            "shots": {
              "total": 7,
              "on_target": 3,
              "off_target": 4,
              "blocked": 2,
              "inside_box": 5,
              "outside_box": 2,
              "woodwork": 0,
              "big_chances": 2,
              "big_chances_missed": 1,
              "saved": 1,
              "penalty_area_attempts": 5,
              "goals": 1
            },
            "corners": 3,
            "offsides": 0,
            "fouls": 8,
            "yellow_cards": 1,
            "red_cards": 0,
            tackles:31,
            interceptions:32,
            clearances:33,
            saves:34,
            "passes": {
              "total": 250,
              "accurate": 210,
              "key_passes": 5,
              "crosses": 4,
              "long_balls": 10,
              "through_balls": 2,
              "short_passes": 234,
              "pass_accuracy_pct": 84,
              "passes_into_final_third": 12,
              "passes_into_penalty_area": 4,
              "progressive_passes": 10
            }
          },
          "secondhalf": {
            "possession": "45%",
            "shots": {
              "total": 6,
              "on_target": 13,
              "off_target": 3,
              "blocked": 2,
              "inside_box": 4,
              "outside_box": 2,
              "woodwork": 1,
              "big_chances": 1,
              "big_chances_missed": 0,
              "saved": 1,
              "penalty_area_attempts": 4,
              "goals": 1
            },
            "corners": 3,
            "offsides": 0,
            "fouls": 8,
            "yellow_cards": 1,
            "red_cards": 0,
            tackles:11,
            interceptions:21,
            clearances:31,
            saves:41,
            "passes": {
              "total": 283,
              "accurate": 240,
              "key_passes": 6,
              "crosses": 5,
              "long_balls": 11,
              "through_balls": 3,
              "short_passes": 265,
              "pass_accuracy_pct": 84.8,
              "passes_into_final_third": 14,
              "passes_into_penalty_area": 6,
              "progressive_passes": 12
            }
          },
          "fulltime": {
            "possession": "5%",
            "shots": {
              "total": 13,
              "on_target": 61,
              "off_target": 7,
              "blocked": 4,
              "inside_box": 9,
              "outside_box": 4,
              "woodwork": 1,
              "big_chances": 3,
              "big_chances_missed": 1,
              "saved": 2,
              "penalty_area_attempts": 9,
              "goals": 2
            },
            "corners": 6,
            "offsides": 0,
            "fouls": 16,
            "yellow_cards": 2,
            "red_cards": 0,
            tackles:1,
            interceptions:2,
            clearances:3,
            saves:4,
            "passes": {
              "total": 533,
              "accurate": 450,
              "key_passes": 11,
              "crosses": 9,
              "long_balls": 21,
              "through_balls": 5,
              "short_passes": 499,
              "pass_accuracy_pct": 84.4,
              "passes_into_final_third": 26,
              "passes_into_penalty_area": 10,
              "progressive_passes": 22
            }
          }
        },
        "lineup": [],
        "substitutions": []
      },
      "away": teamData
    },
    "events": [],
    "referee": {
      "name": "裁判姓名"
    },
    "venue": {
      "name": "球场名称",
      "city": "球场所在城市"
    }
  }
  

  export const footballTabs:IFTab[]=[
      {
        id: "overview",
        name: "概况",
      },
      {
        id: "chat",
        name: "聊天",
      },
      {
        id: "odds",
        name: "赔率",
      },
      {
        id: "data",
        name: "数据",
      },
      {
        id: "lineUp",
        name: "阵容",
      },
      {
        id: "match",
        name: "交锋",
      },
      {
        id: "table",
        name: "积分榜",
      },
    ];
  
  export  const basketballTabs:IFTab[]=[
           {
        id: "overview",
        name: "概况",
      },
      {
        id: "chat",
        name: "聊天",
      },
    {
        id: "match",
        name: "交锋",
      },
          ]