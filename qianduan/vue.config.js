module.exports = {
  css: {
    extract: false, // 忽略 CSS order 顺序警告
  },
  devServer: {
    disableHostCheck: true,
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}