import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced:true,
    actions:{
        add_person_wang(context,value){
            console.log('Actions中的add_person_wang被调用了',context,value)
            // indexOf用来检测字符串中是否含有该字符，有则返回字符索引从0开始，没有返回-1
            console.log(value.name.indexOf('白'))
            if(value.name.indexOf('白') !== -1) {
                context.commit('ADD_PERSON',value)
            } else {
                alert('请输入姓王的人')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了',state,value)
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'1',name:'xiana'}
        ]
    },
    getters:{}
}