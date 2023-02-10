<template>
  <div class='student'>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data(){
        console.log(this)
        return {
            msg:'My name is Student component'
        }
    },
    // 1.简单声明接收（用的多）
    // props:['name','age']

    // 2.接收的同时对数据进行类型限制
    /* props:{
        name:String,//名字必须为字符类型，否则会报错
        age:Number //年龄必须为数值类型
    } */

    // 2.接收的同时对数据进行（用的少）：类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,
            require:true //name是必要的
        },
        age:{
            type:Number,
            default:23 //默认值23，在没有收到age时(收到错误的age(String)会报错，不会使用默认值)使用默认值23
        }
    }
}
</script>

<style>
    .student {
        background-color: purple;
    }
</style>