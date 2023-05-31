---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script lang="ts" setup>
import MNavLinks from '../.vitepress/components/MNavLinks.vue'
import { NAV_DATA } from '../.vitepress/model/bookmark'
</script>

# 浏览器书签

::: tip
该页面CV自 [**maomao**](https://github.com/maomao1996/vitepress-fe-nav) ，[**掘金文章**](https://juejin.cn/post/7204860462239498296)

其他导航页：[**BruceBlog**](https://brucecai55520.gitee.io/bruceblogpages/resources/navigation/nav.html)，[**茂茂物语**](https://notes.fe-mm.com/nav)，[**wetab**](https://web.wetab.link/)

:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />