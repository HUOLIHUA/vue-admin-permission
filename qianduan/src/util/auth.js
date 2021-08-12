import cookies from 'js-cookie'

// 设置token
export const setToken = function(token) {
    return cookies.set('token', token)
}

// 获取token
export const getToken = function(){
    return cookies.get('token')
}

// 删除token
export const removeToken = function(){
    return cookies.remove('token')
}
