/*
 * @Author: Mark
 * @Date: 2025-05-07 11:40:42
 * @LastEditTime: 2025-05-07 20:41:58
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/lineUp/types/index.ts
  */

//  type PlayerPosition =
//  |'GK'   // Goalkeeper - 守门员

// // 后卫类（Defenders）
// | 'CB'   // Centre Back - 中后卫
// | 'LB'   // Left Back - 左后卫
// | 'RB'   // Right Back - 右后卫
// | 'LCB'  // Left Centre Back - 左中后卫
// | 'RCB'  // Right Centre Back - 右中后卫
// | 'LWB'  // Left Wing Back - 左边翼卫
// | 'RWB'  // Right Wing Back - 右边翼卫

// // 中场类（Midfielders）
// | 'CDM'  // Central Defensive Midfielder - 后腰（防守型中场）
// | 'CM'   // Central Midfielder - 中前卫
// | 'CAM'  // Central Attacking Midfielder - 前腰（攻击型中场）
// | 'LM'   // Left Midfielder - 左中场
// | 'RM'   // Right Midfielder - 右中场
// | 'LCM'  // Left Central Midfielder - 左中前卫
// | 'RCM'  // Right Central Midfielder - 右中前卫

// // 前锋类（Forwards）
// | 'ST'   // Striker - 中锋
// | 'CF'   // Centre Forward - 中路前锋
// | 'LW'   // Left Winger - 左边锋
// | 'RW'   // Right Winger - 右边锋
// | 'LF'   // Left Forward - 左前锋
// | 'RF'   // Right Forward - 右前锋
// | 'SS';  // Second Striker - 影锋（次前锋）


/** 球员事件类型 */
export type PlayerEventType =
  | 'goal'              // 进球
  | 'own_goal'          // 乌龙球
  | 'penalty_goal'      // 点球进球
  | 'missed_penalty'    // 射失点球
  | 'yellow_card'       // 黄牌
  | 'red_card'          // 红牌
  | 'second_yellow'     // 两黄变一红
  | 'sub_in'    // 换上
  | 'sub_out';  // 换下

  export interface PlayerEvent {
    type: PlayerEventType;
    minute: number;
  }

export interface PlayerInfo {
    player_id: string;         // 球员ID
    name: string;              // 球员姓名
    shirt_number: number;      // 球衣号
    is_captain: boolean;       // 是否队长
     /**
     * 球员位置类型
     * GK: 守门员
     * DF: 后卫类
     * MF: 中场类
     * FW: 前锋类
     * */
    position: 'GK' | 'DF' | 'MF' | 'FW'; // 位置 	
    role?:string,
    photo?: string;            // 球员头像（可选）
    // 新增字段：比赛角色身份
  
    rating?: number;              // 比赛评分（如 6.5）
    yellow_cards?: number;        // 黄牌数
    red_cards?: number;           // 红牌数
    goals?: number;               // 进球数
    assists?: number;             // 助攻数

    // 换人相关
    events?: PlayerEvent[];      // 球员事件（如换下/黄牌）
    status?: 'starting' | 'substitute' | 'missing';
    /**
     * 伤停状态（仅在 status 为 'missing' 时有值）
     * injured 受伤
     * suspended 停赛
     *  */ 
    unavailable_reason?: 'injured' | 'suspended';
  }
  
  export interface TeamLineup {
    team_id: string;
    team_name: string;
    team_logo: string;         // 队伍logo
    formation: string;         // 阵型（如 '4-3-3'）
    coach: {
      name: string;
      country?: string;
      photo?: string;          // 教练头像
    };
    starting_lineups: PlayerInfo[]; // 首发11人
    substitutes: PlayerInfo[];      // 替补球员
    missing_players: PlayerInfo[];  // 伤停球员（如受伤、停赛）
  }
  
  export interface MatchLineupData {
    event_id: string;
    lineup: {
      home: TeamLineup;
      away: TeamLineup;
    };
  }
  