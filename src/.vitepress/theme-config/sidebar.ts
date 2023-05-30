import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {

  // 我的笔记
  '/note/mine/': [
    {
      text: "笔记+",
      link: '/note/mine/yuque'
    }
  ],

  // 别人的笔记
  '/note/ref/': [
    {
      text: "Web前端",
      link: '/note/ref/frontend'
    }
  ]
}