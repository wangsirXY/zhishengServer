export default {
  lang: 'en-US',
  title: 'VueThree',
  description: 'Vue技术文档',
  base: "/VueCourse",
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
      text: '基础语法',
      children: [
        { text: '1. Vue介绍', link: '/documents/Vue/introduce' },
        { text: '2. MVVM模式', link: '/documents/Vue/mvvm' },
        { text: '3. 指令', link: '/documents/Vue/directive' },
        { text: '4. 计算属性', link: '/documents/Vue/computed' },
        { text: '5. 侦听器', link: '/documents/Vue/watch' }
      ]
    },
   /* {
      text: 'Vite脚手架',
      children: [
        { text: 'Frontmatter', link: '/guide/introduce' },
        { text: 'Theming', link: '/guide/introduce' },
        { text: 'API Reference', link: '/guide/introduce' },
        { text: 'Differences from Vuepress', link: '/guide/introduce' }
      ]
    },
    {
      text: 'VueRouter',
      children: [
        { text: 'Frontmatter', link: '/guide/introduce' },
        { text: 'Theming', link: '/guide/introduce' },
        { text: 'API Reference', link: '/guide/introduce' },
        { text: 'Differences from Vuepress', link: '/guide/introduce' }
      ]
    },

    {
      text: 'Vuex',
      children: [
        { text: 'Frontmatter', link: '/guide/introduce' },
        { text: 'Theming', link: '/guide/introduce' },
        { text: 'API Reference', link: '/guide/introduce' },
        { text: 'Differences from Vuepress', link: '/guide/introduce' }
      ]
    },
    {
      text: 'Nuxt',
      children: [
        { text: 'Frontmatter', link: '/guide/introduce' },
        { text: 'Theming', link: '/guide/introduce' },
        { text: 'API Reference', link: '/guide/introduce' },
        { text: 'Differences from Vuepress', link: '/guide/introduce' }
      ]
    }*/
  ]
}