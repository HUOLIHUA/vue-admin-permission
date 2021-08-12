import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'
import { getToken } from '@/util/auth'
const service = axios.create({
    timeout: 30000,
})

// 请求拦截器
service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['token'] = getToken()
    }
    return config
})

// 响应拦截器
service.interceptors.response.use(reponse => {
    let result = reponse.data
    if (result.code === 500) {
        Message({
            message: result.data || 'serve error',
            type: 'error',
            duration: 5 * 1000
        })
    }
    if (result.code === 0) {
        Message({
            message: result.data || 'serve error',
            type: 'warning',
            duration: 5 * 1000
        })
        return Promise.reject(result.data)
    }
    return result
})

export default service