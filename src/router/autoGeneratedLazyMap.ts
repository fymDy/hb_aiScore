// ⚠️ 此文件由 generate-LazyMap.js 自动生成，请勿手动修改
import type { ComponentType } from 'react';
export const lazyRouteMap: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  'account/index': () => import('@/views/account/index.tsx'),
  'account/login/index': () => import('@/views/account/login/index.tsx'),
  'account/regist/index': () => import('@/views/account/regist/index.tsx'),
  'home/index': () => import('@/views/home/index.tsx'),
  'home/americalBall/index': () => import('@/views/home/americalBall/index.tsx'),
  'home/badminton/index': () => import('@/views/home/badminton/index.tsx'),
  'home/baseball/index': () => import('@/views/home/baseball/index.tsx'),
  'home/basketball/index': () => import('@/views/home/basketball/index.tsx'),
  'home/cricket/index': () => import('@/views/home/cricket/index.tsx'),
  'home/esports/index': () => import('@/views/home/esports/index.tsx'),
  'home/favorite/index': () => import('@/views/home/favorite/index.tsx'),
  'home/football/index': () => import('@/views/home/football/index.tsx'),
  'home/handball/index': () => import('@/views/home/handball/index.tsx'),
  'home/iceHockey/index': () => import('@/views/home/iceHockey/index.tsx'),
  'home/snooker/index': () => import('@/views/home/snooker/index.tsx'),
  'home/tableTennis/index': () => import('@/views/home/tableTennis/index.tsx'),
  'home/tennis/index': () => import('@/views/home/tennis/index.tsx'),
  'home/volleyball/index': () => import('@/views/home/volleyball/index.tsx'),
  'home/waterpolo/index': () => import('@/views/home/waterpolo/index.tsx'),
  'matchDetails/index': () => import('@/views/matchDetails/index.tsx'),
  'matchDetails/basketball/index': () => import('@/views/matchDetails/basketball/index.tsx'),
  'matchDetails/football/index': () => import('@/views/matchDetails/football/index.tsx'),
  'teamDetails/index': () => import('@/views/teamDetails/index.tsx'),
  'teamDetails/basketball/index': () => import('@/views/teamDetails/basketball/index.tsx'),
  'teamDetails/football/index': () => import('@/views/teamDetails/football/index.tsx')
};
