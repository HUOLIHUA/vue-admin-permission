import { constantRouterMap, asyncRouterMap } from '@/router'

// 通过meta.role判断是否与当前用户权限匹配
function hasPermission(role, route) {
    if (route.meta && route.meta.roles) {
      if(route.meta.roles.indexOf(role) !== -1) {
            return route
        }
    }else{
        return true
    }
}

// 递归过滤异步路由表，返回符合用户角色权限的路由表
function filterAsyncRouterMap(asyncRouterMap, role){
    const accessedRouters = asyncRouterMap.filter(route => {
        if(hasPermission(role, route)){
            // 递归判断子路由
            if(route.children && route.children.length) {
                route.children = filterAsyncRouterMap(route.children, role)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: constantRouterMap,   //全路由
        addRouters: []                //权限路由
    },

    mutations: {
        SET_ROUTER: (state, routers) => {
            state.routers = constantRouterMap.concat(routers)
            state.addRouters = routers
        }
    },

    actions: {
        // 拉取可访问路由
        GenerateRoutes ({commit}, role) {
            return new Promise(resolve => {
                let accessedRouters
                if(role === 'admin') {
                    accessedRouters = filterAsyncRouterMap(asyncRouterMap, role)
                    commit('SET_ROUTER', accessedRouters)
                }
                resolve()
            })
        }
    }
}

export default permission