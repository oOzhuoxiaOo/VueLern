<template>
  <div class='dpp'>
    <h2 v-text="msg"></h2>
    <h2>App组件中展示获取的Student组件的name:{{studentName}}</h2>
    <!-- 1.通过父组件给子组件传递函数用props,实现子组件数据给父组件 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 2.1通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(v-on等同@) (.once能让事件只触发一次)-->
    <Student @atxiana="getStudentName" @demo="m1"></Student>
    <!-- <Student v-on:atxiana.once="getStudentName" ></Student> -->
    <!-- 2.2通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref,再在钩子函数中绑定触发事件名和触发函数） -->
    <!-- //测试原生事件名在组件身上时，会被认为为自定义事件,若不想被认为为自定义事件，就需要加.native -->
    <Student ref="student" @click.native="alert1"></Student>
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
            msg:'我是App,有边框',
            studentName:''
        }
    },
    methods:{
        getSchoolName(name,...params){
            console.log('我获取到了子组件数据:',name,params)
        },
        getStudentName(name){
            console.log('getStudentName被调用了',name)
            this.studentName = name
        },
        m1(){
            console.log("demo事件被触发了")
        },
        alert1(){
            alert("alert1函数被调用了")
        }
    },
    mounted(){
        /* setTimeout(() => {
            
            // this.$refs.student.$on("atxiana",this.getStudentName); //⭐this指向app
            this.$refs.student.$on("atxiana",function(){
                // ⭐this指向student实例，而直接用methods中的方法则指向app实例,methods是特殊的属于Vue的规则
                console.log("@此时钩子中绑定事件中普通函数this:",this)
            });
            // 👇使用$once令事件只能触发一次
            // this.$refs.student.$once("atxiana",this.getStudentName);
        }, 1000); */
    }
}
</script>

<style> 
    .dpp {
        border: solid;
    }
    button {
        font-size: 24px;
        display: block;
    }
</style>