import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/view/main.vue')
    },
    {
        path: '*',
        redirect: "/"
    }
]

const router = createRouter({
    history: createWebHashHistory(), //哈希路由
    routes: route
})


export default router