# 前端编程规范工程化

前端规范 对应规范工具
1. React Vue JS Ts Node eslint
2. css css预处理器 stylelint
3. git commit 规范 commitlint husky
4. markdownlint

lint 收敛 CLI

1. 一键接入 一键扫描 一键修复 一键升级

1. 多包结构：monorepo learn
2. 包管理工具: pnpm
3. lint：
  1. markdownlint
  2. commitlint
  3. stylelint
  4. eslint
  5. prettier
4. CLI
5. jest Mocha 测试·

## 1. 项目安排
1. 项目初始化 markdownlint commitlint changelog
   npm scripts 发包learn
2. HTML GIT markdown changelog 文档规范 结合vuePress  githubIO
3. git action deploy

## pajen.JSON
```js
{
  "scripts": {
    "preinstall": "npx only-allow pnpm", // 限制安装pnpm的安装工具
    "prepare": "husky install", // husky    
    "init": "pnpm install --no-frozen-lockfile", // 安装依赖
    "clean": "lerna clean && rm -rf node_modules", // 清除
    "test": "lerna run test", // 单元测试 走下面所有的子包里面scripts 里面test指令的包
    "docs:dev": "dev docs", //静态资源站点
    "docs:build": "vuepress build docs", // 构建静态站点  
    "deploy": "bash deploy.sh", // 自己定义脚本
    "publish": "lerna publish", // 发包
    "lint": "markdownlint README.md",
    // *使用需要全局安装 npm i -g markdownlint-cli
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"  
     // *使用需要全局安装 npm install -g conventional-changelog-cli
  },
}
```

## lerna
通过 lerna 创建文件夹
1. pnpm 需要指定创建的路径(根目录 pnpm-workspace.yaml)
2. lerna create demo1  自动在 packages 中添加demo1文件

## 核心
 不同环境做所有化的定制配置。核心是基础配置项rule,需要node就是依赖包后面拼需要引入的内容node、vue、React，还可以依赖包/typescript/node、vue.选择vue 指向当前的vue文件
1. 下载npm依赖包，通过问答模式让用户自定义初始化配置，如是否需要使用stylelint、markdownlint等。

1. 通过注入script 添加git hooks
  1. pre-commit scan
  2. commit-msg commitlint
2. 通过四个lint 工具
  1. 获取当前项目的lint config 先读取当前项目已有的配置项，没有使用默认配置，同时消费ignore
  2. 使用lint 工具，根据options.fix 进行自动修复
  3. 按照scanResult 标准化输出内容
3. 完善cli 基本能力
  1. init 安装基础包
  2. scan scanAction
  3. fix scanAction fix 配置是否自动修复
  4. commit-fill-csan  commit-msg-scan

注入方式：
- main 整个入口
- bin norm-fe-lint 实现完整脚手架指令 cli

node: program 提供完整输入输出 用户基于选项选择对应的配置
通过init初始化 initAction  消费配置项 进行对应的action配置

Scan fix 区别的就是中传了fix 是否需要修复
Scan流程：获取eslint、Stylelint、markdownlint中的所有报错，Stylelint：定义一个异步函数，检查stylelint等样式文件等代码风格。
fix流程：先prettier 后获取未处理的错误信息