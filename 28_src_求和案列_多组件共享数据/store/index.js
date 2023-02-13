// 该文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from "vuex";
// 准备actions——用于响应组件中的动作
const actions = {
    /* jia(context,value){
        console.log('actions中的jia被调用了',context,value)
        context.commit('JIA',value)
    },
    jian(context,value){
        console.log('actions中的jian被调用了',context,value)
        context.commit('JIAN',value)
    }, */
    jiaOdd(context,value){
        console.log('actions中的jiaOdd被调用了',context,value)
        console.log('我处理了一些事情')
        context.dispatch('demo1',value)
    },
    jiaWait(context,value){
        console.log('actions中的jiaWait被调用了',context,value)
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    },
    demo1(context,value){
        console.log('我处理了一些事情')
        context.dispatch('demo2',value)
    },
    demo2(context,value){
        console.log('我处理了一些事情')
        if(context.state.sum % 2){
            context.commit('JIA',value)
        } 
    },
}
// 准备mutations——用于操作数据(state)
const mutations = {
    JIA(state,value){
        console.log('mutations中的JIA被调用了',state,value)
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutations中的JIAN被调用了',state,value)
        state.sum -= value
    },
    ADD_PERSON(state,value){
        console.log('mutations中的ADD_PERSON被调用了',state,value)
        state.personList.unshift(value)
    }
 

}
// 准备state——用于存储数据
const state = {
    sum:1,//初始和值
    school:'迦勒底',
    student:'xiana',
    personList:[
        {id:'1',name:'xiana'}
    ]
}
// 准备getters——用于加工state里的数据(非必须)
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
// 使用插件
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


