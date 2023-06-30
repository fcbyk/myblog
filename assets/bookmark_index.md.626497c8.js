import{d as p,l,o as e,c as o,z as A,b as d,s as f,C as a,t as g,_ as u,a as Q,F as r,L as w,A as B,O as D}from"./chunks/framework.1973d67d.js";const I=/[\u0000-\u001f]/g,b=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,y=/[\u0300-\u036F]/g,k=n=>n.normalize("NFKD").replace(y,"").replace(I,"").replace(b,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),F=["href"],E={class:"box"},M={class:"box-header"},L=["innerHTML"],R={key:1,class:"icon"},N=["src","alt"],z=["id"],O={key:0,class:"desc"},j=p({__name:"MNavLink",props:{icon:{},title:{},desc:{},link:{}},setup(n){const s=n,c=l(()=>s.title?k(s.title):""),i=l(()=>typeof s.icon=="object"?s.icon.svg:"");return(t,h)=>t.link?(e(),o("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[A("article",E,[A("div",M,[i.value?(e(),o("div",{key:0,class:"icon",innerHTML:i.value},null,8,L)):t.icon&&typeof t.icon=="string"?(e(),o("div",R,[A("img",{src:d(f)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,N)])):a("",!0),t.title?(e(),o("h5",{key:2,id:c.value,class:"title"},g(t.title),9,z)):a("",!0)]),t.desc?(e(),o("p",O,g(t.desc),1)):a("",!0)])],8,F)):a("",!0)}});const W=u(j,[["__scopeId","data-v-036ad716"]]),P=["id"],Z=["href"],Y={class:"m-nav-links"},J=p({__name:"MNavLinks",props:{title:{},items:{}},setup(n){const s=n,c=l(()=>k(s.title));return(i,t)=>(e(),o(r,null,[i.title?(e(),o("h2",{key:0,id:c.value,tabindex:"-1"},[Q(g(i.title)+" ",1),A("a",{class:"header-anchor",href:`#${c.value}`,"aria-hidden":"true"},null,8,Z)],8,P)):a("",!0),A("div",Y,[(e(!0),o(r,null,w(i.items,({icon:h,title:v,desc:C,link:m})=>(e(),B(W,{key:m,icon:h,title:v,desc:C,link:m},null,8,["icon","title","desc","link"]))),128))])],64))}});const S=u(J,[["__scopeId","data-v-85a98fe5"]]),x="data:image/png;base64,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",T=[{title:"AI",items:[{icon:"https://notes.fe-mm.com/icons/chatgpt.png",title:"ChatGPT 官方",link:"https://chat.openai.com/chat",desc:"需要魔法"},{icon:"https://chat.wuguokai.cn/favicon.svg",title:"国内镜像",link:"https://chat.wuguokai.cn/",desc:"不需要魔法"}]},{title:"工具",items:[{icon:"https://cdn.apifox.cn/logo/apifox-logo-256.png",title:"Apifox",link:"https://fcbykcom.apifox.cn/",desc:"云端mock非常好用"},{icon:"https://img.js.design/assets/webImg/favicon.ico",title:"即时设计",link:"https://js.design/workspace",desc:"不是设计师也可以画点草图"},{icon:"https://res.wx.qq.com/t/fed_upload/6e074aae-e7af-490b-b421-362685ef2333/login_ic@2x.png",title:"微信传输助手",link:"https://filehelper.weixin.qq.com/",desc:"手机电脑传文件"},{icon:x,title:"varbook",link:"https://varbook.uiuing.com/",desc:"标识符助手"},{icon:"https://man.niaoge.com/public/img/favicon.ico",title:"Linux命令大全",link:"https://man.niaoge.com/",desc:"查询您所需要的Linux命令教程和相关实例"}]},{title:"视频",items:[{icon:"https://www.bilibili.com/favicon.ico?v=1",title:"哔哩哔哩",link:"https://www.bilibili.com/"},{icon:"https://assets.fcbyk.com/icons/iqiyi.png",title:"爱奇艺",link:"https://www.iqiyi.com/"},{icon:"https://v.qq.com/favicon.ico",title:"腾讯视频",link:"https://v.qq.com/"},{icon:"https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico",title:"抖音",link:"https://www.douyin.com/"},{icon:"https://vip.diaoyu18.com/favicon.ico",title:"视频解析",link:"https://vip.diaoyu18.com/"}]},{title:"游戏",items:[{icon:"https://store.steampowered.com/favicon.ico",title:"steam官方",link:"https://store.steampowered.com/"},{icon:"https://pp.520ee.vip/wp-content/uploads/2023/05/1684632573-8f14e45fceea167.png",title:"steam离线游戏",link:"https://pp.520ee.vip/"}]},{title:"未分类",items:[{icon:"https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",title:"阿里云",link:"https://www.aliyun.com/"},{icon:"https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",title:"npm",link:"https://www.npmjs.com/"},{icon:"https://nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico",title:"百度网盘",link:"https://pan.baidu.com/"},{icon:"https://static.leetcode.cn/cn-mono-assets/production/assets/favicon-192x192.b678b282.png",title:"leetcode",link:"https://leetcode.cn/"},{icon:"https://g.csdnimg.cn/static/logo/favicon32.ico",title:"csdn",link:"https://www.csdn.net/"},{icon:"https://cnnic.pub/favicon.ico",title:"v2",link:"https://cnnic.pub/"},{icon:"https://docs.gtimg.com/desktop/favicon2.ico",title:"腾讯文档",link:"https://docs.qq.com/desktop/"},{icon:"https://mms.pinduoduo.com/login/favicon.ico",title:"拼多多商家后台",link:"https://mms.pinduoduo.com/"},{icon:"https://regexr.com/assets/icons/favicon.ico",title:"正则表达式练习",link:"https://regexr.com/"}]}],U=D('<h1 id="浏览器书签" tabindex="-1">浏览器书签 <a class="header-anchor" href="#浏览器书签" aria-label="Permalink to &quot;浏览器书签&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>该页面CV自 <a href="https://github.com/maomao1996/vitepress-fe-nav" target="_blank" rel="noreferrer"><strong>maomao</strong></a> ，<a href="https://juejin.cn/post/7204860462239498296" target="_blank" rel="noreferrer"><strong>掘金文章</strong></a></p><p>其他导航页：<a href="https://brucecai55520.gitee.io/bruceblogpages/resources/navigation/nav.html" target="_blank" rel="noreferrer"><strong>BruceBlog</strong></a>，<a href="https://notes.fe-mm.com/nav" target="_blank" rel="noreferrer"><strong>茂茂物语</strong></a>，<a href="https://web.wetab.link/" target="_blank" rel="noreferrer"><strong>wetab</strong></a></p></div>',2),X=A("br",null,null,-1),G=JSON.parse('{"title":"浏览器书签","description":"","frontmatter":{"layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"bookmark/index.md","filePath":"bookmark/index.md"}'),q={name:"bookmark/index.md"},K=p({...q,setup(n){return(s,c)=>(e(),o("div",null,[U,(e(!0),o(r,null,w(d(T),({title:i,items:t})=>(e(),B(S,{title:i,items:t},null,8,["title","items"]))),256)),X]))}});export{G as __pageData,K as default};