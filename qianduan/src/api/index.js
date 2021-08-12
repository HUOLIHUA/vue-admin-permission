import request from '../util/request'

// 用户登录
export function userLogin(params) {
    return request({
        method: 'post',
        url: '/api/login',
        data: params
    })
}

// 获取用户信息
export function getUserInfo() {
    return request({
        method: 'get',
        url: '/api/getUserInfo'
    })
}
