const proxy = require('http-proxy-middleware')

module.exports = function (app) {
   app.use(
      proxy.createProxyMiddleware('/api1',{
         target: 'http://localhost:5000',
         changeOrigin:true, //用来欺骗服务器, 服务器收到请求头的就是本服务器地址
         pathRewrite:{'^/api1':''}
      })
   )
}