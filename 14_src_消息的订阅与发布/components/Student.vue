<template>
  <div class='student bg-color'>
      <h2>{{msg}}</h2>
      <button @click="sendMsg" >点我发送msg数据给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name:'StudentName',
    data(){
        console.log(this)
        return {
            name:'student',
            msg:'My name is Student component',
        }
    },
    methods:{
        sendMsg(){
            console.log('从Student组件中触发了@sendMsg')
            // this.$bus.$emit('hello',this.msg)
            pubsub.publish('hello',666)
        }
    }

}
</script>

<style scoped>
    .bg-color {
        background-color: purple;
    }
</style>