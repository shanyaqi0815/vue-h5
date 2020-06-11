import Vue from 'vue'
import Router from 'vue-router'
import shopping from '@/pages/shopping/shopping' // 购物车

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'shopping',
      component: shopping,
      meta:{title:"购物车"}
    }
  ]
})
