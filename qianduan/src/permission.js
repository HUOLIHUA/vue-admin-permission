import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/util/auth'

// 路由白名单
const whiteList = ['/login']

router.beforeEach((to,form,next) => {
    NProgress.start()
    document.title = to.meta.title
    if(whiteList.indexOf(to.path) !== -1){
        return next()
    }
    if(!getToken()){
        NProgress.done()
        return next({path: '/'})
    }
    // 少了这步会addRoutes陷入无限循环
    if(store.getters.role){
        return next()
    }
    // 拉取用户信息
    store.dispatch('GetInfo').then(role => {
        // 拉取路由信息
        store.dispatch('GenerateRoutes', role).then(() => {
            router.addRoutes(store.getters.routers)
            next({...to, replace: true})
        })
    })
})

router.afterEach( () => {
    NProgress.done()
})