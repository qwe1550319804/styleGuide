---
home: true
heroText: 编码工程化
tagline: 前端编码规范工程化
actionText: 立刻进入 →
actionLink: /coding/html.md

features:
  - title: 全面的前端生态
    details: 支持前端全部生态，无需关注环境，支持直接使用
  - title: 完善的规范配件
    details: 支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级
  - title: 完整的测试用例
    details: 配套完整的测试用例，帮助您提升项目健壮性
---

## :star: 设计目的

随着前端技术的发展，前端项目正在变得越来越复杂。`JavaScript` 作为一门弱类型解释性编程语言，其灵活多变的语法极大的提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。 一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担。但是每个人的代码编写喜好不同，代码风格也会迥然不同，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。

那么，如何制定前端团队的代码规范，如何在团队内进行最小成本的推广，就是一个合格的前端架构师面临的一大难题。很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，都会对不仅能够解决存量项目的编码异味，还能够保证后续所有项目的编码质量。

</br>



## :couch_and_lamp: 配套工具

我们引入了多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：

| 规范                                                              | Lint 工具                                                      | NPM 包                                                                                 |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [eslint-config-norm](https://www.npmjs.com/package/eslint-config-norm)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                             | [stylelint-config-norm](https://www.npmjs.com/package/stylelint-config-norm)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                     | [commitlint-config-norm](https://www.npmjs.com/package/commitlint-config-norm)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [markdownlint-config-norm](https://www.npmjs.com/package/markdownlint-config-norm) |
| Eslint 插件                                                       | [ESlint Plugin](https://eslint.org/docs/latest/extend/plugins) | [eslint-plugin-norme](https://www.npmjs.com/package/eslint-plugin-norme)             |

[norm-fe-lint](https://www.npmjs.com/package/norm-fe-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。

您可以使用[norm-fe-lint](https://www.npmjs.com/package/norm-fe-lint) 方便地为项目接入全部规范。

</br>


</br>
