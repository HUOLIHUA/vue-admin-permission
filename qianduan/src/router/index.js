import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import Layout from '@/views/layout'

// 静态路由
export const constantRouterMap = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        meta: {
            title: '404'
        }
    }
]

// 需要权限的路由
export const asyncRouterMap = [
    {
        path: '/home',
        component: Layout,
        redirect: '/home/index',
        children: [
            {
                path: '/home/index',
                name: 'home',
                component: () => import('@/views/home'),
                meta: {
                    title: '首页',
                    icon: 'el-icon-s-home',
                    roles: ['admin']
                }
            }
        ]
    },
    
    {
        path: '/menu-one',
        component: Layout,
        redirect: '/menu-one/menu-one-children',
        meta: {
            title: '菜单一',
            icon: 'el-icon-s-operation',
        },
        children: [
            {
                path: '/menu-one/menu-one-children',
                name: 'menu-one-children',
                component: () => import('@/views/menu-one/menu-one-children'),
                meta: {
                    title: '子菜单一',
                    icon: 'el-icon-operation',
                    roles: ['admin']
                }
            },
            {
                path: '/menu-one/menu-one-children-two',
                name: 'menu-one-children-two',
                component: () => import('@/views/menu-one/menu-one-children-two'),
                meta: {
                    title: '子菜单二',
                    icon: 'el-icon-operation',
                    roles: ['admin']
                }
            }
        ]
    },
    {
        path: '/menu-two',
        component: Layout,
        redirect: '/menu-two/menu-two-children',
        meta: {
            title: '菜单二',
            icon: 'el-icon-connection',
        },
        children: [
            {
                path: '/menu-two/menu-two-children',
                name: 'menu-two-children',
                component: () => import('@/views/menu-two/menu-two-children'),
                meta: {
                    title: '子菜单一',
                    icon: 'el-icon-connection',
                    roles: ['admin']
                }
            },
            {
                path: '/menu-two/menu-two-children-two',
                name: 'menu-two-children-two',
                component: () => import('@/views/menu-two/menu-two-children-two'),
                meta: {
                    title: '子菜单二',
                    icon: 'el-icon-connection',
                    roles: ['admin']
                }
            },
        ]
    },
    {
        path: '/menu-three',
        component: Layout,
        redirect: '/menu-three/menu-three-children',
        meta: {
            title: '菜单三',
            icon: 'el-icon-connection',
        },
        children: [
            {
                path: '/menu-three/menu-three-children',
                name: 'menu-three-children',
                component: () => import('@/views/menu-three/menu-three-children'),
                meta: {
                    title: '子菜单一',
                    icon: 'el-icon-connection',
                    roles: ['admin']
                }
            },
            {
                path: '/menu-three/menu-three-children-two',
                name: 'menu-three-children-two',
                component: () => import('@/views/menu-three/menu-three-children-two'),
                meta: {
                    title: '子菜单二',
                    icon: 'el-icon-connection',
                    roles: ['admin']
                },
                children: [
                    {
                        path: '/menu-three/menu-three-children-other',
                        name: 'menu-three-children-other',
                        component: () => import('@/views/menu-three/menu-three-children-other'),
                        meta: {
                            title: '三级菜单一',
                            icon: 'el-icon-connection',
                            roles: ['admin']
                        },
                    },
                    {
                        path: '/menu-three/menu-three-children-other2',
                        name: 'menu-three-children-other2',
                        component: () => import('@/views/menu-three/menu-three-children-other2'),
                        meta: {
                            title: '三级菜单二',
                            icon: 'el-icon-connection',
                            roles: ['admin']
                        },
                    }
                ]
            },
        ]
    },
    {
        path: '/other',
        component: Layout,
        redirect: '/other/index',
        children: [
            {
                path: '/other/index',
                name: 'other',
                component: () => import('@/views/other'),
                meta: {
                    title: '其他',
                    icon: 'el-icon-eleme',
                    roles: ['admin']
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

const router = new VueRouter({
    routes: constantRouterMap
})
export default router
