import type { NavLink } from '../types'
import { VARBOOK_ICON } from '../assets/base64'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'AI',
    items: [
      {
        icon: 'https://notes.fe-mm.com/icons/chatgpt.png',
        title: 'ChatGPT 官方',
        link: 'https://chat.openai.com/chat',
        desc: '需要魔法'
      },
      {
        icon: 'https://chat.wuguokai.cn/favicon.svg',
        title: '国内镜像',
        link: 'https://chat.wuguokai.cn/',
        desc: '不需要魔法'
      }
    ]
  },
  {
    title: '开发工具',
    items: [
      {
        icon: 'https://cdn.apifox.cn/logo/apifox-logo-256.png',
        title: 'Apifox',
        link: 'https://fcbykcom.apifox.cn/',
        desc: '云端mock非常好用'
      },
      {
        icon: 'https://img.js.design/assets/webImg/favicon.ico',
        title: '即时设计',
        link: 'https://js.design/workspace',
        desc: '不是设计师也可以画点草图'
      },
      {
        icon: 'https://res.wx.qq.com/t/fed_upload/6e074aae-e7af-490b-b421-362685ef2333/login_ic@2x.png',
        title: '微信传输助手',
        link: 'https://filehelper.weixin.qq.com/',
        desc: '手机电脑传文件'
      },
      {
        icon: VARBOOK_ICON,
        title: 'varbook',
        link: 'https://varbook.uiuing.com/',
        desc: '标识符助手'
      },
    ]
  },
  {
    title: '游戏',
    items: [
      {
        icon: 'https://store.steampowered.com/favicon.ico',
        title: 'steam官方',
        link: 'https://store.steampowered.com/'
      },
      {
        icon: 'https://pp.520ee.vip/wp-content/uploads/2023/05/1684632573-8f14e45fceea167.png',
        title: 'steam离线游戏',
        link: 'https://pp.520ee.vip/'
      }
    ]
  },  
  {
    title: '未分类',
    items: [
      {
        icon: 'https://static.leetcode.cn/cn-mono-assets/production/assets/favicon-192x192.b678b282.png',
        title: 'leetcode',
        link: 'https://leetcode.cn/'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
        title: '阿里云',
        link: 'https://www.aliyun.com/'
      },
      {
        icon: 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
        title: 'npm',
        link: 'https://www.npmjs.com/'
      },
    ]
  },
]