(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{320:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"eslint-plugin-encode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint-plugin-encode"}},[s._v("#")]),s._v(" eslint-plugin-encode")]),s._v(" "),t("p",[s._v("除了本包，你需要同时安装 "),t("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ESlint"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-plugin-encode eslint --save-dev\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("h3",{attrs:{id:"引入插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入插件"}},[s._v("#")]),s._v(" 引入插件")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .eslintrc.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eslint-config-encode'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'eslint-plugin-encode/no-secret-info'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"使用-presets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-presets"}},[s._v("#")]),s._v(" 使用 presets")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .eslintrc.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'plugin:eslint-plugin-encode/recommended'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"支持的规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持的规则"}},[s._v("#")]),s._v(" 支持的规则")]),s._v(" "),t("h3",{attrs:{id:"no-broad-semantic-versioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-broad-semantic-versioning"}},[s._v("#")]),s._v(" "),t("code",[s._v("no-broad-semantic-versioning")])]),s._v(" "),t("p",[s._v("不要在 "),t("code",[s._v("package.json")]),s._v(" 中使用太过宽泛的版本指定方式，包括 "),t("code",[s._v("*")]),s._v("、"),t("code",[s._v("x")]),s._v(" 和 "),t("code",[s._v("> x")]),s._v(" 。")]),s._v(" "),t("h4",{attrs:{id:"规则内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则内容"}},[s._v("#")]),s._v(" 规则内容")]),s._v(" "),t("p",[s._v("参照 "),t("a",{attrs:{href:"https://docs.npmjs.com/about-semantic-versioning",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/about-semantic-versioning"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("*")]),s._v("、 "),t("code",[s._v("x")]),s._v(" 和 "),t("code",[s._v("> x")]),s._v(" 指定版本会被警告。")]),s._v(" "),t("h3",{attrs:{id:"no-http-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-http-url"}},[s._v("#")]),s._v(" "),t("code",[s._v("no-http-url")])]),s._v(" "),t("p",[s._v("推荐将 HTTP 链接换为 HTTPS 链接。")]),s._v(" "),t("h4",{attrs:{id:"规则内容-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则内容-2"}},[s._v("#")]),s._v(" 规则内容")]),s._v(" "),t("p",[t("strong",[s._v("错误代码")]),s._v("示例:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" test "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://chenghuai.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" jsx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://chenghuai.com"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h4",{attrs:{id:"何时不适用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#何时不适用"}},[s._v("#")]),s._v(" 何时不适用")]),s._v(" "),t("p",[s._v("如果你的网站只支持 HTTP 时。")]),s._v(" "),t("h3",{attrs:{id:"no-js-in-ts-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-js-in-ts-project"}},[s._v("#")]),s._v(" "),t("code",[s._v("no-js-in-ts-project")])]),s._v(" "),t("p",[s._v("不推荐在项目中同时存在 "),t("code",[s._v("JS")]),s._v(" 和 "),t("code",[s._v("TS")]),s._v(" 文件。")]),s._v(" "),t("h4",{attrs:{id:"规则内容-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则内容-3"}},[s._v("#")]),s._v(" 规则内容")]),s._v(" "),t("p",[t("strong",[s._v("错误示例")]),s._v("，TS 项目中包含 JS 文件:")]),s._v(" "),t("div",{staticClass:"language-Bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── index.ts\n├── home.js\n└── tsconfig.json\n")])])]),t("p",[t("strong",[s._v("正确示例")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-Bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── index.ts\n├── home.ts\n└── tsconfig.json\n")])])]),t("h4",{attrs:{id:"规则选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则选项"}},[s._v("#")]),s._v(" 规则选项")]),s._v(" "),t("p",[s._v("默认当存在 "),t("code",[s._v("commitlint.config.js")]),s._v(", "),t("code",[s._v("eslintrc.js")]),s._v(", "),t("code",[s._v("prettierrc.js")]),s._v(", "),t("code",[s._v("stylelintrc.js")]),s._v(" 文件时不会报错，支持自定义设置文件白名单。")]),s._v(" "),t("h3",{attrs:{id:"no-secret-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-secret-info"}},[s._v("#")]),s._v(" "),t("code",[s._v("no-secret-info")])]),s._v(" "),t("p",[s._v("不在代码中直接通过纯文本值设置 "),t("code",[s._v("password")]),s._v(" "),t("code",[s._v("token")]),s._v(" 和 "),t("code",[s._v("secret")]),s._v(" 信息。")]),s._v(" "),t("h4",{attrs:{id:"规则内容-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则内容-4"}},[s._v("#")]),s._v(" 规则内容")]),s._v(" "),t("p",[s._v("在包含 "),t("code",[s._v("password")]),s._v(" "),t("code",[s._v("token")]),s._v(" and "),t("code",[s._v("secret")]),s._v(" 名称的 key 中禁止使用纯文本值。")]),s._v(" "),t("p",[t("strong",[s._v("错误")]),s._v("代码示例:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" accessKeySecret "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" client "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("accessKeyToken")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("正确")]),s._v("代码示例:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" accessKeySecret "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ACCESS_KEY_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" client "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("accessKeyToken")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ACCESS_KEY_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);