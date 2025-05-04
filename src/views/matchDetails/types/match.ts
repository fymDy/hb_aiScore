/*
 * @Author: Mark
 * @Date: 2025-05-04 20:42:30
 * @LastEditTime: 2025-05-04 23:20:30
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/types/match.ts
 */
/** 射门统计 */
interface ShotsStats {
    total: number; // 总射门数（包括射正、射偏、封堵）
    on_target: number; // 射正：命中球门范围并需守门员扑救的射门
    off_target: number; // 射偏：偏离球门范围的射门
    blocked: number; // 被封堵：被防守球员封堵的射门
    inside_box: number; // 禁区内射门：在对方禁区内的射门
    outside_box: number; // 禁区外射门：在禁区外完成的射门
    woodwork: number; // 击中门框（门柱或横梁）
    big_chances: number; // 绝佳机会（理论上应进球的机会）
    big_chances_missed: number; // 错失绝佳机会（未能进球的 big chance）
    saved: number; // 被守门员扑救的射门
    penalty_area_attempts: number; // 在禁区内的射门尝试数
    goals: number; // 实际进球数（常与 on_target 重合）
  }
  
  /** 传球统计 */
  interface PassesStats {
    total: number; // 总传球次数
    accurate: number; // 成功传球数
    key_passes: number; // 关键传球：直接导致射门的传球
    crosses: number; // 传中次数（边路传入禁区）
    long_balls: number; // 长传次数（较远距离传球）
    through_balls: number; // 直塞次数（穿透防线的传球）
    short_passes: number; // 短传次数
    pass_accuracy_pct: number; // 传球成功率（单位为百分数，如 84.2）
    passes_into_final_third: number; // 传入前场三区的次数（更接近球门）
    passes_into_penalty_area: number; // 传入对方禁区的次数
    progressive_passes: number; // 向前推进的有效传球次数
  }
  
  /** 单个时间段（如半场、全场）的统计 */
  export interface TeamPeriodStats {
    possession: string; // 控球率，单位百分比字符串（如 "53%"）
    shots: ShotsStats; // 射门数据
    corners: number; // 角球次数
    offsides: number; // 越位次数
    fouls: number; // 犯规次数
    yellow_cards: number; // 黄牌数
    red_cards: number; // 红牌数
    passes: PassesStats; // 传球数据
    tackles: number; // 抢断
    interceptions: number; // 拦截
    clearances: number; // 解围
    saves: number; // 扑救
  }
  
  /** 球员信息 */
  interface Player {
    player_id: string; // 球员唯一标识符
    name: string; // 球员姓名
    position: string,//'GK' | 'DF' | 'MF' | 'FW'; 
    /**
     * 球员位置说明：
     * - 'GK'：守门员（Goalkeeper）
     * - 'DF'：后卫（Defender）
     * - 'MF'：中场（Midfielder）
     * - 'FW'：前锋（Forward）
     */
    shirt_number: number; // 球衣号码
  }
  
  /** 换人记录 */
  interface Substitution {
    minute: number; // 换人发生时间（第几分钟）
    player_in_id: string; // 换上球员ID
    player_out_id: string; // 换下球员ID
    reason?: string; // 换人原因（如战术调整、受伤等，可选）
  }
  
  /** 单条比赛事件（如进球、红黄牌等） */
  interface MatchEvent {
    minute: number; // 事件发生时间（第几分钟）
    team_id: string; // 所属队伍ID（home/away队）
    player_id: string; // 涉事球员ID
    type: string,//'goal' | 'yellow_card' | 'red_card' | 'substitution' | 'own_goal' | 'penalty' ;
    /**
     * 事件类型说明：
     * - 'goal'：进球
     * - 'yellow_card'：黄牌
     * - 'red_card'：红牌
     * - 'substitution'：换人
     * - 'own_goal'：乌龙球
     * - 'penalty'：点球（包括进球或罚丢）
     */
    description?: string; // 事件详细描述（如“头球破门”）
  }
  
  /** 每支队伍的完整比赛数据 */
  export interface TeamMatchData {
    team_id: string; // 队伍唯一标识符
    team_name: string; // 队伍名称
    score: number; // 最终得分
    statistics: {
      halftime: TeamPeriodStats; // 上半场统计
      secondhalf: TeamPeriodStats; // 下半场统计
      fulltime: TeamPeriodStats; // 全场统计
    };
    lineup?: Player[]; // 首发阵容
    substitutions?: Substitution[]; // 换人列表
  }
  
  /** 裁判信息 */
  interface Referee {
    name: string; // 裁判姓名
  }
  
  /** 比赛场地信息 */
  interface Venue {
    name: string; // 球场名称
    city: string; // 城市名称
  }
  
  /** 足球比赛数据的整体结构 */
  export interface FootballMatchData {
    event_id: string; // 比赛唯一标识符
    sport: string; // 体育类型，仅支持 "football"
    season: string; // 赛季，例如："2024-2025"
    match_date: string; // 比赛开始时间（ISO8601 格式）
    match_timestamp: number; // 开始时间戳（Unix 秒级）
    status:string,// 'scheduled' | 'live' | 'finished' | 'postponed';
    /**
     * 比赛状态说明：
     * - 'scheduled'：已安排未开始
     * - 'live'：正在进行中
     * - 'finished'：比赛已结束
     * - 'postponed'：比赛延期
     */
    stage?: string; // 比赛阶段，如小组赛、半决赛（可选）
  
    teams: {
      home: TeamMatchData; // 主队数据
      away: TeamMatchData; // 客队数据
    };
  
    events: MatchEvent[]; // 比赛中的所有事件
    referee: Referee; // 裁判信息
    venue: Venue; // 场地信息
  }
  