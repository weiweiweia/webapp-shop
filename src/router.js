//引入
import Vue from 'vue'
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

//引入页面组件 (不推荐)
// import Home from './pages/Home.vue'
// import Find from './pages/Find.vue'
// import User from './pages/User.vue'
// import Cart from './pages/Cart.vue'
// import Good from './components/find/Good.vue'
// import Price from './components/find/Price.vue'
// import Detail from './pages/Detail.vue'

//建议使用路由懒加载以节省项目性能
const Home = ()=>import('./pages/Home.vue')
const Find = ()=>import('./pages/Find.vue')
const User = ()=>import('./pages/User.vue')
const Cart = ()=>import('./pages/Cart.vue')
const Good = ()=>import('./components/find/Good.vue')
const Price = ()=>import('./components/find/Price.vue')
const Detail = ()=>import('./pages/Detail.vue')

//创建路由实例
let router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
            // components:{
            //     'a':Home
            // },
        },
        {
            path:'/find',
            component:Find,
            children:[
                {
                    path:'good',
                    component:Good
                },
                {
                    path:'price',
                    component:Price
                },
                //重定向
                {
                    path:'',
                    redirect:'good'
                }
            ]
        },
        {
            path:'/user',
            component:User
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/detail/:id',
            component:Detail
        },
        //路由重定向
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router