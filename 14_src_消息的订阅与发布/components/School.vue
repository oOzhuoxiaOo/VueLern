<template>
  <div class='school bg-color'>
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
// ⭐消息库的引入
import pubsub from 'pubsub-js'
export default {
    name:'SchoolName',
    data(){
        return {
            name:'school',
            msg:'My name is School component'
        }
    },
    methods:{
        getMsg(msgName,data){
            console.log('有人发布了hello消息,hello消息的回调执行了',msgName,data) //msgname为消息名，data为数据
        }
    },
    mounted(){
        // console.log("School",window.x)
        /* console.log("School组件打印x",this.x)
        this.$bus.$on('hello',(data)=>{
            console.log('我是School组件,收到了数据',data)
        }) */

        // ⭐消息的订阅(类似)
        // 此处使用箭头函数(也能把函数写到methods)，普通函数则this指向undefined,箭头函数则指向该组件实例
        // 🚩
        /* this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
            console.log('有人发布了hello消息,hello消息的回调执行了',msgName,data) //msgname为消息名，data为数据
        }), */
        // 🚩🚩
        this.pubId = pubsub.subscribe('hello',this.getMsg)
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        // ⭐消息取消订阅(pubsub.subscribe()返回的是一个id,取消订阅是根据id取消)
        pubsub.unsubscribe(this.pubsub)
    }

}
</script>

<style scoped>
    .bg-color {
        background-color: rgb(0, 128, 13);
    }
</style>