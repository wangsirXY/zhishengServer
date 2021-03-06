export default {
  lang: 'en-US',
  title: '《知升》接口文档',
  description: '《知升》APP接口文档',
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
      text: '一、项目规范（重点）',
      activeMatch: '^/config/',
      children: [
        {
          text: '1）代码规范',
          link: '/documents/代码规范'
        },
        {
          text: '2）git注意事项',
          link: '/documents/git注意事项',
        },
        {
          text: '3）接口使用',
          link: '/documents/接口使用',
        },
        {
          text: '4）时间格式转换',
          link: '/documents/时间格式转换',
        },
      ] 
    },
    {
      text: '二、数据库设计',
      activeMatch: '^/config/',
      children: [
        {
          text: '1）技术分析',
          link: '/documents/zhisheng/二、数据库设计/1.技术分析'
        },
        {
          text: '2）数据库设计',
          link: '/documents/zhisheng/二、数据库设计/2.数据库设计'
        },
        {
          text: '3）数据库默认数据',
          link: '/documents/zhisheng/二、数据库设计/3.数据库默认数据'
        }
      ]
    },
    {
      text: '三、接口设计',
      activeMatch: '^/config/',
      children: [
        {
          text: '文件上传接口',
          link: '/documents/zhisheng/三、接口设计/文件上传接口'
        },
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
        {
          text: '6）深夜吐槽模块',
          link: '/documents/zhisheng/三、接口设计/6.深夜吐槽模块'
        },
        {
          text: '7）掌上社团模块',
          link: '/documents/zhisheng/三、接口设计/7.掌上社团模块'
        },
        {
          text: '8）盲盒交友模块',
          link: '/documents/zhisheng/三、接口设计/8.盲盒交友模块'
        },
        {
          text: '9）代跑服务模块',
          link: '/documents/zhisheng/三、接口设计/9.代跑服务模块'
        },
        {
          text: '10）公开课模块.md',
          link: '/documents/zhisheng/三、接口设计/10.公开课模块'
        },
      ]
    }
  ]
}