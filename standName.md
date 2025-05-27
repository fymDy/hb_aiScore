<!--
 * @Author: Mark
 * @Date: 2025-05-27 15:05:03
 * @LastEditTime: 2025-05-27 15:08:23
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/standName.md
-->
# 🧭 React + TypeScript 项目命名规范手册

> 本规范适用于中大型前端项目，统一类型、组件、hook、变量等命名风格，提升代码一致性与可维护性。

---

## 1. 类型与接口命名（TypeScript）

| 类型           | 命名格式       | 示例                        | 说明                          |
|----------------|----------------|-----------------------------|-------------------------------|
| 接口           | `PascalCase`   | `TeamStanding`              | ✅ 不推荐使用 `I` 前缀         |
| 类型别名       | `PascalCase`   | `UserRoleType`              | 可用于区分接口或混合结构体     |
| 请求参数结构   | `PascalCase+Req` | `CreateTeamReq`           | 用于 API 请求参数              |
| 响应数据结构   | `PascalCase+Res` | `TeamDetailRes`           | 用于 API 响应类型              |

---

## 2. 组件命名（React）

| 类型          | 命名格式        | 示例                        | 说明                           |
|---------------|-----------------|-----------------------------|--------------------------------|
| 通用组件      | `PascalCase`    | `TeamCard`, `Popup`         | 文件名与组件名一致             |
| 页面组件      | `PascalCase+Page` | `TeamDetailPage`          | 建议页面组件加后缀表示语义     |
| 弹窗类组件    | `PascalCase+Modal/Popup` | `ConfirmModal`      | 表示模态交互型组件             |
| 布局组件      | `PascalCase+Layout` | `DashboardLayout`       | 表示页面结构包裹层组件         |

---

## 3. Hook 命名

| 类型          | 命名格式           | 示例                        | 说明                           |
|---------------|--------------------|-----------------------------|--------------------------------|
| 自定义 Hook   | `use` 开头 + 动作词 | `useTeamData`, `useToggle` | 必须以 `use` 开头              |
| 状态解构      | 返回对象结构        | `const {data, loading} = useX` | 保持 Hook 的结构化使用风格     |

---

## 4. 工具函数（utils）

| 类型            | 命名格式     | 示例                         | 说明                         |
|-----------------|--------------|------------------------------|------------------------------|
| 格式转换函数     | `toXxx()`     | `toQueryString()`            | 类型转换                     |
| 类型判断函数     | `isXxx()`     | `isMobile()`                 | 返回 boolean 的函数          |
| 数据处理函数     | `camelCase`   | `formatDate()`, `mergeList()` | 普通函数                     |

---

## 5. 变量命名风格

| 变量类型        | 命名格式              | 示例                        |
|-----------------|-----------------------|-----------------------------|
| 布尔值          | `isXxx`, `hasXxx`      | `isLoading`, `hasPermission` |
| 数据结构        | `xxxData`, `xxxList`   | `teamData`, `playerList`     |
| 状态项（选中）   | `selectedXxx`, `currentXxx` | `selectedTab`, `currentTeam` |

---

## 6. 文件 & 文件夹命名

| 文件类型       | 命名规范          | 示例                          |
|----------------|-------------------|-------------------------------|
| 组件文件       | `PascalCase.tsx`   | `MatchChart.tsx`              |
| 样式文件       | `module.scss`      | `matchChart.module.scss`      |
| 类型文件       | `camelCase.ts`     | `teamTypes.ts`, `globalTypes.ts` |
| Hook 文件      | `useXxx.ts`        | `useTeamDetail.ts`            |
| 工具函数       | `camelCase.ts`     | `format.ts`, `device.ts`      |

---

## 7. 项目结构示例推荐

```bash
/src
  /components
    /Popup
      Popup.tsx
      popup.module.scss

  /pages
    /TeamDetail
      TeamDetailPage.tsx
      useTeamDetail.ts
      teamTypes.ts

  /types
    globalTypes.ts

  /hooks
    useRequest.ts
    useScroll.ts

  /utils
    format.ts
    isMobile.ts

## 8. ESLint 类型命名规范（可选）
# 建议在 .eslintrc.js 或 eslint.json 中添加：
# {
#   "@typescript-eslint/naming-convention": [
#     "error",
#     {
#       "selector": "interface",
#       "format": ["PascalCase"],
#       "custom": {
#         "regex": "^I[A-Z]",
#         "match": false
#       }
#     }
#   ]
# }

## 9. 常用命名关键词对照表

| 功能前缀     | 说明                |
| -------- | ----------------- |
| `use`    | 自定义 hook          |
| `get`    | 获取数据（同步或异步）       |
| `is/has` | 返回布尔值             |
| `to`     | 类型转换              |
| `on`     | 回调函数（如 `onClick`） |
| `format` | 数据格式化             |

