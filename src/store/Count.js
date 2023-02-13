export default  {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            console.log('mutations中的JIA被调用了',state,value)
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutations中的JIAN被调用了',state,value)
            state.sum -= value
        },
    },
    state:{
    sum:1,//初始和值
    school:'迦勒底',
    student:'xiana',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}