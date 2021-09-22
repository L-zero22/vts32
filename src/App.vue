<template>
    <header class="nav">

    </header>

    <router-view></router-view>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App'
})
</script>

<style>
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}
html,
body {
    width: 100vw;
    height: 100vh;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
}
.nav {
    height: 100px;
    width: 100%;
}
</style>
