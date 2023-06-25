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
    title: '工具',
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
      {
        icon: 'https://man.niaoge.com/public/img/favicon.ico',
        title: 'Linux命令大全',
        link: 'https://man.niaoge.com/',
        desc: '查询您所需要的Linux命令教程和相关实例'
      },
    ]
  },
  {
    title: '视频',
    items: [
      {
        icon: 'https://www.bilibili.com/favicon.ico?v=1',
        title: '哔哩哔哩',
        link: 'https://www.bilibili.com/',
      },
      {
        icon: 'https://assets.fcbyk.com/icons/iqiyi.png',
        title: '爱奇艺',
        link: 'https://www.iqiyi.com/',
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        link: 'https://v.qq.com/',
      },
      {
        icon: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico',
        title: '抖音',
        link: 'https://www.douyin.com/',
      },
      {
        icon: 'https://vip.diaoyu18.com/favicon.ico',
        title: '视频解析',
        link: 'https://vip.diaoyu18.com/',
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
        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
        title: '阿里云',
        link: 'https://www.aliyun.com/'
      },
      {
        icon: 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
        title: 'npm',
        link: 'https://www.npmjs.com/'
      },
      {
        icon: 'https://nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico',
        title: '百度网盘',
        link: 'https://pan.baidu.com/',
      },
      {
        icon: 'https://static.leetcode.cn/cn-mono-assets/production/assets/favicon-192x192.b678b282.png',
        title: 'leetcode',
        link: 'https://leetcode.cn/'
      },
      {
        icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        title: 'csdn',
        link: 'https://www.csdn.net/'
      },
      {
        icon: 'https://cnnic.pub/favicon.ico',
        title: 'v2',
        link: 'https://cnnic.pub/'
      },
      {
        icon: 'https://docs.gtimg.com/desktop/favicon2.ico',
        title: '腾讯文档',
        link: 'https://docs.qq.com/desktop/'
      },
      {
        icon: 'https://mms.pinduoduo.com/login/favicon.ico',
        title: '拼多多商家后台',
        link: 'https://mms.pinduoduo.com/'
      },
      {
        icon: 'https://regexr.com/assets/icons/favicon.ico',
        title: '正则表达式练习',
        link: 'https://regexr.com/'
      }
    ]
  },
]