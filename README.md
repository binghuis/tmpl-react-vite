# template-react-desktop

🧞 一个 `React Desktop Site` 项目模板，针对现代 / 传统浏览器分别打包

## 下载

无需安装，本地直接执行 [create-hotpot](https://github.com/binghuis/create-hotpot) `CLI` 命令

```
pnpm create hotpot -t react-desktop
```

## 部分目录解释

```bash
.
├─ src
│  ├─ components                # 公共业务组件
│  ├─ constant                  # 常量存储
│  ├─ libs                      # 第三方库文件
│  ├─ openapi                   # OpenAPI 相关配置 & 产物
│  │  ├─ __service__            # 生成产物：TS 类型 & 接口请求方法
│  │  └─ custom-axios.ts        # Axios 配置
│  ├─ pages                     # 页面
│  ├─ service                   # openapi 补充
│  ├─ store                     # 状态管理
│  ├─ styles                    # 全局样式
│  ├─ types                     # 类型管理
│  ├─ utils                     # 工具封装
│  └─ router.ts                 # 自动生成产物：约定式路由相关
├─ orval.config.ts              # 配置产物 openapi/__service__
└─ rome.json                    # formatter & linter
```

_项目强制使用 `pnpm` 作为包管理工具，启动项目前请先安装 [pnpm](https://pnpm.io/installation)_

## Feature

- [x] 根据 `Swagger` 生成 `TS` 类型 和 接口请求代码
- [x] 类 `NextJs` 约定式路由：文件即路由，根据文件结构自动生成 `Routes`
- [x] 路由类型安全的侧边栏组件：支持关联嵌套路由
- [x] 路由类型安全的面包屑组件：支持根据动态路由参数生成面包屑内容
- [x] 双主题：实现 亮/暗 主题切换
- [x] 鉴权：用户 登录/鉴权 模块封装完成
- [x] 状态管理：更加函数式，更加 `Hook`
- [x] `IconFont`：使用 `IconFont` 管理项目 `Icon`
- [x] `Formatter` & `Linter`：`Prettier` + `ESLint` + `StyleLint` 配置
- [x] 自动生成 `ChangeLog` & 版本管理：代码提交版本号自动更新 & 自动写入 `ChangeLog`

## 使用

### 生成 `TS` 类型 和 接口请求代码

工具：[Orval](https://github.com/anymaniax/orval)

配置文件：`orval.config.ts`，设置 `Swagger` 来源，支持本地 / 在线 `Swagger` 文件

执行脚本：`pnpm openapi`，产物生成在 `openapi/__service__` 目录，

```bash
./src/openapi/__service__
├─ swagger.msw.ts          # 本地 mock 代码
├─ swagger.schemas.ts      # TS 类型代码
└─ swagger.ts              # 接口请求代码
```

### 约定式路由

工具：[Generouted](https://github.com/oedotme/generouted)

```bash
./src
└─ router.ts      # 路由产物代码
```

### 侧边栏

### 面包屑

### 亮/暗 主题样式

`Antd 5` 使用 `@ant-design/cssinjs` 支持 `CSS-in-JS` 动态主题变量切换，而 `@ant-design/cssinjs` 基于 `emotion` 实现

项目引入：

- `CSS` 原子框架：[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- `CSS-in-JS` 框架：[emotion](https://github.com/emotion-js/emotion)

_建议使用 `tailwindcss`原子类写静态 `css`样式，与主题相关的动态样式部分则使用 `CSS-in-JS` 框架_

`emotion` 语法如下，[token](https://ant-design.gitee.io/docs/react/customize-theme-cn#seedtoken) 是 `Antd 内部实现的主题变量`

```tsx
import { css } from '@emotion/react';

css`
  color: ${token.colorPrimary};
  &:hover {
    color: ${token.colorPrimaryHover};
  }
`;
```

### 用户鉴权

### 函数式状态管理库 `zustand`

### 图标管理

```bash
./src/components
└─ icon.tsx           # IconFont 组件封装
```

替换内部变量 `scriptUrl` 为开发者项目 [IconFont](https://www.iconfont.cn/) 产物地址

> 代码规范相关

> 代码提交流程

## 预览

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/binghuis/template-react-desktop)
