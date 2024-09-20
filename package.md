
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
5. jest mocha 测试·

## 1. 项目安排
1. 项目初始化 markdownlint commitlint changelog
   npm scripts 发包learn
2. HTML GIT markdown changelog 文档规范 结合vuePress  githubIO
3. git action deploy

 



# pajen.json
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


# lerna
通过 lerna 创建文件夹
1. pnpm 需要指定创建的路径(根目录 pnpm-workspace.yaml)
2. lerna create demo1  自动在 packages 中添加demo1文件
