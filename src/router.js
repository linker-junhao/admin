import Vue from 'vue'
import Router from 'vue-router'
import idxRouterTable from '@/idxLib/router/RouterTable'
import Home from './views/Home.vue'
import ArticleList from './views/ArticleList.vue'
import NewArticle from './views/NewArticle.vue'
import PageHeaderList from './views/PageHeaderList.vue'
import NewPageHeader from './views/NewPageHeader.vue'
import MenuList from './views/MenuList.vue'
import NewMenu from './views/NewMenu.vue'
import CarouselList from './views/CarouselList.vue'
import PageFooterList from './views/PageFooterList.vue'
import NewPageFooter from './views/NewPageFooter.vue'
import AdminList from './views/AdminList.vue'
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
    path: '/ArticleList',
    name: 'articleList',
    component: ArticleList
  },
  {
    path: '/NewArticle',
    name: 'newArticle',
    component: NewArticle
  },
  {
    path: '/PageHeaderList',
    name: 'pageHeaderList',
    component: PageHeaderList
  },
  {
    path: '/NewPageHeader',
    name: 'newPageHeader',
    component: NewPageHeader
  },
  {
    path: '/MenuList',
    name: 'menuList',
    component: MenuList
  },
  {
    path: '/NewMenu',
    name: 'newMenu',
    component: NewMenu
  },
  {
    path: '/CarouselList',
    name: 'carouselList',
    component: CarouselList
  },
  {
    path: '/PageFooterList',
    name: 'pageFooterList',
    component: PageFooterList
  },
  {
    path: '/NewPageFooter',
    name: 'newPageFooter',
    component: NewPageFooter
  },
  {
    path: '/AdminList',
    name: 'adminList',
    component: AdminList
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
