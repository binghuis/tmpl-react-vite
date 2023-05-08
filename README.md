# template-react-desktop

平台项目模板代码

## 使用

`pnpm create hotpot`

## 部分目录结构解释

```bash
├─ src
│  ├─ components                ## 公共业务组件
│  ├─ constant                  ## 常量存储
│  ├─ libs                      ## 第三方库文件
│  ├─ openapi                   ## OpenAPI 相关配置 & 产物
│  │  ├─ __service__            ## 生成产物：TS 类型 & 接口请求方法
│  │  └─ custom-axios.ts        ## Axios 配置
│  ├─ pages                     ## 页面
│  ├─ service                   ## openapi 补充
│  ├─ store                     ## 状态管理
│  ├─ styles                    ## 全局样式
│  ├─ types                     ## 类型管理
│  ├─ utils                     ## 工具封装
│  └─  router.ts                ## 自动生成产物：约定式路由相关
├─ orval.config.ts              ## 配置产物 openapi/__service__
└─ rome.json                    ## formatter & linter
```


## 基本组件 & 方法

## 工具 & 依赖

## 功能

- [x] 类型安全文件路由：
- [x] 面包屑管理：
- [x] Swagger 转 TS 类型文件 & 接口请求方法：
- [x] 版本管理 & ChangeLog 自动生成：
- [x] 代码 Format & Link：
- [x] 状态管理：
- [x] Auth 模块：
- [x] 菜单栏关联：





