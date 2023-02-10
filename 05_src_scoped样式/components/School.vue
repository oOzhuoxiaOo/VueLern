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

}
</script>

// scoped:作用域，可以让该样式只在该组件起作用，而不影响其他组件，否则同名样式可能会覆盖
// (其实就是Vue在样式名的标签上添加了一个自定义属性(data-v-3375b0b8\data-v-22321ebb等)，再用属性选择器选中该标签从而不达成覆盖)
<style scoped>
    .bg-color {
        background-color: rgb(0, 128, 13);
    }
</style>