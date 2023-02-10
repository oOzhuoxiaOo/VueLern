<template>
  <div class='school bg-color'>
      <h2>{{msg}}</h2>
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
    mounted(){
        // console.log("School",window.x)
        console.log("School组件打印x",this.x)
        this.$bus.$on('hello',(data)=>{
            console.log('我是School组件,收到了数据',data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }

}
</script>

<style scoped>
    .bg-color {
        background-color: rgb(0, 128, 13);
    }
</style>