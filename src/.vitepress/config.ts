import { defineConfig } from 'vitepress'
import { nav,sidebar } from './theme-config'
import { GITEE_SVG } from './assets/svg'

let icon:string = 'https://assets.fcbyk.com/fcbykcom/icons/un-smile.png'

let copyright:string = `
<a href="/about/name">by 非常不愉快</a>
<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022034851号</a>
`

export default defineConfig({
  head:[
    ['link', { rel: 'icon', href:icon, type:"image/png"}]
  ],

  title: "云端小屋",
  cleanUrls: true,

  markdown:{
    lineNumbers:true
  },

  themeConfig: {
    nav,
    sidebar,

    socialLinks:[
      { icon: 'github', link: 'https://github.com/fcbyk' },
      { icon: { svg: GITEE_SVG }, link: 'https://gitee.com/fcbyk' }
    ],

    footer: { copyright },

    sidebarMenuLabel:"文档",
    returnToTopLabel:"返回顶部",
    outlineTitle:"目录",
    darkModeSwitchLabel:"夜间模式",

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
