/*
 * @Author: Mark
 * @Date: 2025-05-08 16:25:43
 * @LastEditTime: 2025-05-10 11:29:21
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/types/enum.ts
 */
export enum EnumPlayerEventType {
    Goal = 'goal',                // 进球
    OwnGoal = 'own_goal',         // 乌龙球
    PenaltyGoal = 'penalty_goal', // 点球进球
    MissedPenalty = 'missed_penalty', // 射失点球
    YellowCard = 'yellow_card',   // 黄牌
    RedCard = 'red_card',         // 红牌
    SecondYellow = 'second_yellow', // 两黄变一红
    SubIn = 'sub_in',             // 换上
    SubOut = 'sub_out',           // 换下
    Injured = 'injured'           // 受伤
  }