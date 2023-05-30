import type { DefaultTheme } from 'vitepress'

export const nav:DefaultTheme.NavItem[] = [
    {
      text: '笔记',
      items: [
        { text: '我的笔记', link: '/note/mine/yuque' },
        { text: '别人的笔记', link: '/note/ref/frontend' }
      ]
    },
    {
      text: '关于我',
      link: '.',
    }
]