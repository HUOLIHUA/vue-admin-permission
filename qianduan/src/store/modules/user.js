
import { userLogin, getUserInfo } from '@/api'
import { setToken, getToken, removeToken} from '@/util/auth'

const user = {
    state: {
        role: '',
        token: getToken(),
    },

    mutations: {
        // 设置token
        SET_TOKEN: (state, token) => {
            state.token = token
        },

        // 设置角色
        SET_ROLE: (state, {role}) => {
            state.role = role
        },

        
        // 退出
        SET_LOGOUT: (state) => {
            state.role = ''
        }
    },

    actions: {
        // 登录
        LOGIN: ({commit}, params) => {
            return new Promise((resolve) => {
                userLogin(params).then(res => {
                    commit('SET_TOKEN', res.data)
                    setToken(res.data)
                    resolve(res.data)
                })
            })
        },

        // 拉取用户信息
        GetInfo: ({commit}) => {
            return new Promise((resolve) => {
                getUserInfo().then(res => {
                    commit('SET_ROLE', res.data)
                    resolve(res.data.role)
                })
            })
        },

        // 退出登录
        LogOut: ({commit}) => {
            return new Promise(resolve => {
                commit('SET_LOGOUT')
                removeToken()
                resolve()
            })
        }
    },

}

export default user