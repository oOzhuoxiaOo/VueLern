<template>
  <div>
    <img src="./assets/logo.png" alt="picture">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  //引入组件
  import School from './components/School.vue'
  import Student from './components/Student.vue'
  export default {
    name:'App',
    components:{
        School,
        Student
    }


}
</script>

<style>

</style>