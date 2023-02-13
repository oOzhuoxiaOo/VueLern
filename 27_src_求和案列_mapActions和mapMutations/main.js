// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 引入store
import store from './store'
// 关闭生产提示
Vue.config.productionTip = false



// 创建vm实例
const vm = new Vue({
    el:'#app',
    render:h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
console.log(vm)