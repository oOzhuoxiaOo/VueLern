// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false


// 创建vm实例
new Vue({
    el:'#app',
    render:h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})