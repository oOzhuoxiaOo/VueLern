// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// (1)给widow身上加不太好，给Vue原型上加就行，因为vc找不到就会去Vue的原型找(由于vc各个不同，不要在vc原型上加)
// window.x = {a:1,b:2}
// (2)给原型上加，但x要想使用$on,x也需要是vc
// Vue.prototype.x = {a:1,b:2} //no行
const Demo = Vue.extend({}) //Demo为VueComponent构造函数
const d = new Demo(); //d 为vc
Vue.prototype.x = d //ok 行
// console.log(Vue.prototype); //Vue的原型对象上存在$on绑定事件的方法等
// (3)正确写法更简单，在vm中给Vue原型对象上加vm就行
// 创建vm实例
new Vue({
    el:'#app',
    render:h => h(App),
    // 需要使用beforeCreate,因为此时👆App还没加载，需要在App组件等生成前使事件总线先生成
    beforeCreate(){
        // $bus是自定义设置的名字(在此等vm)。可以改，但不建议，因为(迎合（Vue中尤🐟希经常使用$）大家都这么写
        Vue.prototype.$bus = this
    }
})