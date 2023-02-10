<template>
  <div class='student bg-color'>
      <h2>{{msg}}</h2>
      <h2>我是num:{{num}}</h2>
      <button @click="sendStudentName">点我将Student组件data中msg数据给父组件App</button>
      <button @click="unbind">点我解绑事件</button>
      <button @click="death">销毁当前Student组件的实例(vc)</button>
      <button @click="add">点我num++</button>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data(){
        return {
            name:'student',
            msg:'My name is Student component',
            num:1
        }
    },
    methods:{
        add(){
            console.log("add事件发生")
            this.num++
        },
        sendStudentName(){
            // 触发Student组件实例身上的atxiana事件
            this.$emit("atxiana",this.msg)
            // this.$emit("demo")
            // this.$emit("click") //测试原生事件名在组件身上时，会被认为为自定义事件
        },
        unbind(){
            this.$off("atxiana") //只适用于解绑一个自定义事件
            // this.$off(["atxiana","demo"]) //解绑多个自定义事件
            // this.$off() //解绑所有事件
        },
        death(){
            this.$destroy() //销毁了当前Student组件的实例，销毁后Student实例的自定义事件全都不奏效
        }
    }

}
</script>

<style scoped>
    .bg-color {
        background-color: purple;
    }
</style>