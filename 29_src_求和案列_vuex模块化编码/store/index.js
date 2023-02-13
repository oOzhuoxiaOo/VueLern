// 该文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from "vuex";
// ⭐引入Count 和person
import countOptions from './Count'
import personOptions from './Person'
// 准备actions——用于响应组件中的动作


// 使用插件
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout:personOptions
    }
})


