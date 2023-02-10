<template>
  <div class='dpp'>
    <h2 v-text="msg" ref="dom1"></h2>
    <button @click="showDOM" ref="btn">点我输出上方DOM</button>
    <School ref='sch'></School>
    <!-- 如果使用:bind方式传值就是表达式，也就是此时16为数字而不是字符串 -->
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        School,
        Student
    },
    data(){
        return {
            msg:'我是App,有边框'
        }
    },
    methods:{
        showDOM(){
            console.log(this.$refs) //获取的为App组件的属性$refs,该属性内容为 模板中写了ref标签的dom等
            console.log(this.$refs.dom1) //获取的为App组件的属性$refs中的dom1元素
            console.log(this.$refs.sch) //获取的为App组件的属性$refs中的School元素,该元素为School组件实例对象(vc)

        }
    }
}
</script>

<style>
    .dpp {
        border: solid;
    }
</style>