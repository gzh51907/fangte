import Vue from 'vue';
//引入vetrouter
import VueRouter from 'vue-router';
//使用vuerouter
Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Gzj from '../pages/Gzj.vue';
import Qmc from '../pages/Qmc.vue';
import Conn from '../pages/Conn.vue';


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
            path: '/',
            redirect: '/home'
        },
        {
            path: '/gzj',
            component: Gzj
        },
        {
            path: '/qmc',
            component: Qmc
        },
        {
            path: '/connection',
            component: Conn
        },
    ]
});

export default router;