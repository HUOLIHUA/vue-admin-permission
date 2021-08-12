const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
// 创建服务
const app = express()

// 创建路由
const router = express.Router()
let username = 'admin'
let password = '123456'
// 登录
router.post('/api/login', (request, reponse) => {
  
  // 前端请求的数据
  let requestBody = request.body
  if(requestBody.username !== username){
    return reponse.send({
      code: 0,
      data: '用户名不存在'
    })
  }
  if(requestBody.password !== password){
    return reponse.send({
      code: 0,
      data: '密码错误'
    })
  }
  // 生成token
  let token = jwt.sign({ username, password }, 'secret', { expiresIn: 3600 * 24 * 7 })
  reponse.send({
    code: 1,
    data: token
  })
})

// 获取用户信息
router.get('/api/getUserInfo', (request, reponse) => {
  let { token } = request.headers
  // 验证token
  jwt.verify(token, 'secret', (err, decoded) => {
    if(err){
      return reponse.send({
        code: 0,
        data: '请重新登录'
      })
    }
    if(decoded.username !== username){
      return reponse.send({
        code: 0,
        data: '用户名不存在'
      })
    }
    if(decoded.password !== password){
      return reponse.send({
        code: 0,
        data: '密码错误'
      })
    }
    reponse.send({
      code: 1,
      data: {
        role: 'admin'
      }
    })
  })
})

app.use(bodyParser.json())
app.use(router)

app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    }
    console.log('服务启动在3000端口')
})
