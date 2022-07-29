import { createRouter, createWebHistory } from 'vue-router';
const About =()=>import('../pages/about.vue');
const Home =()=>import('../pages/home.vue');
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../pages/not-found.vue');
export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            component: Home,
            meta: {
                title: '首页'
            }
            // redirect: '/about',
            // children: [
            //   {
            //     path: 'dashboard',
            //     component: Home,
            //     name: 'Dashboard',
            //     meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            //   }
            // ]
        },
        {
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            meta: {
                title: '404',
                noTag: true
            }
        }
    ]
});