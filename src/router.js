import Vue from 'vue'
import Router from 'vue-router'
import idxRouterTable from '@/idxLib/router/RouterTable'
import Home from './views/Home.vue'
import Article from './views/Article.vue'
import PageHeader from './views/PageHeader.vue'
import Menu from './views/Menu.vue'
import Carousel from './views/Carousel.vue'
import PageFooter from './views/PageFooter.vue'
import Administrator from './views/Administrator.vue'
import AdminPassChange from './views/AdminPassChange.vue'
import SysAccessLog from './views/SysAccessLog.vue'

Vue.use(Router)

let routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Article',
    name: 'article',
    component: Article
  },
  {
    path: '/PageHeader',
    name: 'pageHeader',
    component: PageHeader
  },
  {
    path: '/Menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/Carousel',
    name: 'carousel',
    component: Carousel
  },
  {
    path: '/PageFooter',
    name: 'pageFooter',
    component: PageFooter
  },
  {
    path: '/Administrator',
    name: 'administrator',
    component: Administrator
  },
  {
    path: '/AdminPassChange',
    name: 'adminPassChange',
    component: AdminPassChange
  },
  {
    path: '/SysAccessLog',
    name: 'sysAccessLog',
    component: SysAccessLog
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
].concat(idxRouterTable)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers
})
