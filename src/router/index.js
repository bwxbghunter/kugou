import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import kugou from '@/page/kugou/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/kugou'},
    {
      path: '/kugou',
      name: 'kugou',
      component: kugou,
    },




  ]
})
