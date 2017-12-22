import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'

// const HelloWorld = () => import(/* webpackChunkName: "group-foo" */ '@/components/HelloWorld')
// const FirstPage = () => import(/* webpackChunkName: "group-foo" */ '@/components/FirstPage')
// const SecondPage = () => import(/* webpackChunkName: "group-foo" */ '@/components/SecondPage')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/foo', name: 'FirstPage', component: FirstPage },
    { path: '/bar', name: 'SecondPage', component: SecondPage, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
  } else {
    next()
  }
})

export default router
