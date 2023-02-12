<template>
    <div>
      <button @click="getStudents">点击获取学生信息</button>
      <button @click="getCars">点击获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    methods: {
      getStudents(){
        axios.get('http://localhost:8080/atxiana/students').then(
          response => {
            console.log('请求成功了',response)
          },
          error =>{
            console.log('请求失败了',error)
          }
        )
      },
      getCars(){
        axios.get('http://localhost:8080/demo/cars').then(
          response => {
            console.log('请求成功了',response)
          },
          error =>{
            console.log('请求失败了',error)
          }
        )
      },
    },
}
</script>

<style> 
</style>