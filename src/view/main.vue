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
</style>