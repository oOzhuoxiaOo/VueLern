<template>
  <div class='school'>
      <h2>{{msg}}</h2>
      <h2>{{name | mySlice}}</h2>
      <button @click="upAlert">点击利用插件install里的Vue原型函数弹窗</button>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data(){
        return {
            name:'school',
            msg:'My name is School component'
        }
    },
    methods:{
        upAlert(){
            this.hello();
        }
    }
}
</script>

<style>
    .school {
        background-color: purple;
    }
</style>