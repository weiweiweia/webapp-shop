//引入
import Vue from 'vue'
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

//引入页面组件
import Home from './pages/Home.vue'
import Find from './pages/Find.vue'
import User from './pages/User.vue'
// import { find } from 'core-js/fn/array'

//创建路由实例
let router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/find',
            component:Find
        },
        {
            path:'/user',
            component:User
        }
    ]
})

export default router