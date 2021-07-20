import {createWebHashHistory , createRouter , RouteRecordRaw} from 'vue-router'

const route:Array<RouteRecordRaw> =[
    {
        path:"/",
        name:"index",
        component:()=> import('@/view/main.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:route
})


export default router