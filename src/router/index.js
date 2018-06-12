import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods'
import Seller from '@/components/Seller'
import Ratings from '@/components/Ratings'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    }
  ]
})
