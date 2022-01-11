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
      text: 'Git注意事项',
      link: '/documents/git注意事项',
    },
    {
      text: '二、数据库设计',
      link: '/documents/zhisheng/二、数据库设计',
      children: [
        {
          text: '1）技术分析',
          link: '/documents/zhisheng/二、数据库设计/1.技术分析'
        },
        {
          text: '2）数据库设计',
          link: '/documents/zhisheng/二、数据库设计/2.数据库设计'
        },
      ]
    },
    {
      text: '三、接口设计',
      activeMatch: '^/config/',
      children: [
        {
          text: '1）功能模块',
          link: '/documents/zhisheng/三、接口设计/1.功能模块'
        },
        {
          text: '2）用户模块',
          link: '/documents/zhisheng/三、接口设计/2.用户模块'
        },
        {
          text: '3）遇见模块',
          link: '/documents/zhisheng/三、接口设计/3.遇见模块'
        },
        {
          text: '4）就业规划模块',
          link: '/documents/zhisheng/三、接口设计/4.就业规划模块'
        },
        {
          text: '5）云自习模块',
          link: '/documents/zhisheng/三、接口设计/5.云自习模块'
        },
      ]
    }
  ]
}