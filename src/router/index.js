import Vue from 'vue';
//引入vetrouter
import VueRouter from 'vue-router';


//使用vuerouter
Vue.use(VueRouter);



import Home from '../pages/Home.vue';
import Gzj from '../pages/Gzj.vue';
import Qmc from '../pages/Qmc.vue';
import Conn from '../pages/Conn.vue';
import Reg from '../pages/Reg.vue';
import Log from '../pages/Log.vue';
import Mine from '../pages/Mine.vue';
import Cart from '../pages/Cart.vue';


//实例化router
let router = new VueRouter({
    //配置参数
    routes: [
        //home
        {
            path: '/home',
            component: Home
        },
        {
            name: 'home',
            path: '/',
            redirect: '/home'
        },
        {
            name: 'gzj',
            path: '/gzj',
            component: Gzj
        },
        {
            name: 'qmc',
            path: '/qmc',
            component: Qmc
        },
        {
            name: 'connection',
            path: '/connection',
            component: Conn
        },
        {
            name: 'log',
            path: '/log',
            component: Log
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: {
                requiresAuth: true
            }
        },
    ]
});

//全局路由守卫
router.beforeEach(function (to, from, next) {
    //在全局路由首位beforeEach中进行页面全西安访问控制
    //先判断目标路由是否需要鉴权
    // window.console.log('beforeEach', to);
    if (to.meta.requiresAuth) {
        // console.log(1)
        let Authorization = localStorage.getItem('Authorization');
        if (Authorization) {
            next();
        } else {
            router.push({
                path: '/log',
                query:{
                    targetUrl:to.fullPath
                }
            })
        }
    } else {
        next()
    }

})

export default router;