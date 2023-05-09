# template-react-desktop

一个用 React 实现的桌面 Web 项目模板

## 使用

执行 [create-hotpot](https://github.com/binghuis/create-hotpot) 构建命令

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

## 基本组件 & 方法

## 工具 & 依赖

## 功能

- [x] 类 NextJs 约定式路由：
- [x] Swagger 转 TS 类型 & 接口请求方法：
- [x] 自动生成 ChangeLog & 版本管理：
- [x] Formatter & Linter
- [x] 函数式状态管理：
- [x] 鉴权部分封装：
- [x] 侧边栏嵌套路由关联：
- [x] 面包屑配置：






