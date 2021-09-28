import {createWebHashHistory , createRouter , RouteRecordRaw} from 'vue-router'

const route:Array<RouteRecordRaw> =[
    {
        path:"/",
        name:"main",
        component:()=> import('@/view/main.vue')
    },
    {
        path:'/*',
        redirect:{
            name:'main'
        }
    } //没有路由匹配的时候前往首页
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:route
})


export default router