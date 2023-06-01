import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {

  // 我的笔记
  '/note/mine/': [
    {
      text: "笔记+",
      link: '/note/mine/plus'
    }
  ],

  // 别人的笔记
  '/note/ref/': [
    {
      text: "Web前端",
      link: '/note/ref/frontend'
    },
    {
      text: "Java技术栈",
      link: '/note/ref/java'
    },
    {
      text: "部署/工具",
      link: '/note/ref/deploy'
    },
    {
      text: "项目学习",
      link: '/note/ref/project'
    },

  ]
}