const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false ,//关闭语法检查
  transpileDependencies: true,
  /* // 开启代理服务器(方式1)
  devServer: {
    proxy: 'http://localhost:5000'
  }， */
  // 开启代理服务器(方式2)
  devServer: {
    proxy: {
      '/atxiana': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/atxiana':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的Host值(例如，此时为代理8080,去练习5000时说我是5000)
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的Host值(例如，此时为代理8080,去练习5000时说我是5000)
      },
      }
    }
  }
)
