<!--
    @desc 默认显示页面
 -->
<template>
    <main class="content">

    </main>
</template>

<script lang="ts"  setup>
import { reactive } from 'vue'

interface loginInfo {
    username: string
    password: string
    code?: string
}

const loginInfo = reactive<loginInfo>({
    username: '',
    password: '',
    code: ''
})
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
    .main{
        width: 100%;
        height: 100%;
       
        overflow: hidden auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('https://pixabay.com/zh/photos/sea-coast-rocks-beach-waves-ocean-6406047/https://cdn.pixabay.com/photo/2021/07/12/11/09/sea-6406047_960_720.jpg');
    }
    .loginBox{
        width: 500px;
        height: 300px;
        border:1px solid  #dedede;
        border-radius: 12px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    box-shadow: 0 0 22px 2px brown;

    }
=======
>>>>>>> f34f235233e4c3f877881d622a890dcb1eb203e8
</style>