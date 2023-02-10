<template>
  <div class='dpp'>
    <School></School>
    <!-- 如果使用:bind方式传值就是表达式，也就是此时16为数字而不是字符串 -->
    <Student></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
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
        
    }
}
</script>

<style> 
    .dpp {
        border: solid;
    }
</style>