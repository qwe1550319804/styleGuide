import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '个人博客',
      description: '专注于数据分析',
    },
  },
  base: '/styleGuide/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/index.md' },
      {
        text: '日常生活',
        items: [
          { text: '学习', link: '/daily/study.md' },
          { text: '躺平', link: '/daily/lieFlat.md' },
        ],
      },
      {
        text: '兴趣爱好',
        items: [
          { text: '羽毛球', link: '/hobbies/badminton.md' },
          { text: '追剧', link: '/hobbies/bingeWatch.md' },
          { text: '唱歌', link: '/hobbies/sing.md' },
        ],
      },
           
     
    ],
    sidebar: [
      {
        title: '编码规范',
        children: [
          {
            title: '学习',
            path: '/daily/study.md',
          },
          {
            title: '躺平',
            path: '/daily/lieFlat.md',
          },
         
        ],
      },
      {
        title: '兴趣爱好',
        children: [
          {
            title: '羽毛球',
            path: '/hobbies/badminton.md',
          },
          {
            title: '追剧',
            path: '/hobbies/bingeWatch.md',
          },
          {
            title: '唱歌',
            path: '/hobbies/sing.md',
          },
        ],
      },
    ],
    logo: '/img/logo.jpg',    //本地:.vuepress/public/img 打包后 根目录下
    repo: 'encode-studio-fe/fe-spec',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2023,
      copyrightInfo:
        'encode studio | <a href="https://github.com/encode-studio-fe/fe-spec" target="_blank">github</a>',
    },

    extendFrontmatter: {
      author: {
        name: '澄怀',
        link: 'https://github.com/encode-studio-fe/fe-sepc',
      },
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端编码规范工程化',
      },
    ],
  ],

  plugins: <UserPlugins>[
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  extraWatchFiles: ['.vuepress/config.ts'],
});
