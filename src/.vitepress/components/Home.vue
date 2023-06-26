<script setup lang="ts">
const boxList = [
    {title:"我的简历",desc:"23年应届毕业生，目前在找工作"},
    {title:"接口文档" },
    {title:"线上逛店" },
    {title:"校园报修系统" },
    {title:"瑞吉外卖" },

    ]
</script>

<template>
<div class="main">
    <div class="box" v-for="i in boxList" key="index">
        <div>
            <h5>{{i.title}}</h5>
            <p>{{i.desc}}</p>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.main{
    display: flex;
    // background-color: rgb(195, 224, 216);
    flex-wrap: wrap;
    position: relative;
    left: -5px;
    text-align: center;
    .box{
        height: 150px;
        width: 250px;
        background-color: var(--vp-c-bg-soft);
        border-radius: 8px;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        p{
            display: none;
        }
        &:hover{
            p{
                display: initial;
            }
        }
    }
}

@media (max-width:640px) {
    .main{
        display: block;
        left: 0;
        .box{
            height: 200px;
            width: 100%;
            border-radius: 8px;
            margin: 10px 0;
        }
    }
}
</style>