import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'

/* webpackChunkName: "group-foo" */
const Login = () => import('@/components/Login')
const Home = () => import('@/components/Home')
const HelloWorld = () => import('@/components/HelloWorld')
const FirstPage = () => import('@/components/FirstPage')
const SecondPage = () => import('@/components/SecondPage')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'HelloWorld', component: HelloWorld },
    { path: '/portfolio', name: 'FirstPage', component: FirstPage },
    { path: '/contact', name: 'SecondPage', component: SecondPage, meta: { requiresAuth: true } }
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
