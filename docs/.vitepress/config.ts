export default {
  lang: 'en-US',
  title: '《知升》APP接口文档',
  description: '《知升》接口文档',
  base: "/zhishengServer",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docsDir: 'docs',

    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    info: "引用",

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      }
    ],
    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '《知升》APP',
      activeMatch: '^/config/'
    },
    {
      text: '二、数据库设计',
      link: '/documents/zhisheng/二、数据库设计'
    },
    {
      text: '三、接口设计',
      link: '/documents/zhisheng/三、接口设计'
    }
  ]
}