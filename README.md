# template-react-desktop

一个 `React Desktop Site` 项目模板

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

> 一行命令生成 `TS` 类型 和 接口请求代码

> 约定式路由

> 侧边栏组件配置

> 面包屑组件配置

> 如何写支持 亮/暗双主题 的样式

> 用户鉴权涉及到的配置

> 函数式状态管理库 `zustand` 怎么用

> 图标管理，一笔带过

> 做了哪些代码规范配置

> 代码提交流程

## 预览

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/binghuis/template-react-desktop)
