<template>
  <div>
    <button @click="isShow = !isShow">点击显示隐藏h1</button>
    <!-- 多个元素时，需要使用group,并且内元素要有key值 -->
    <transition-group 
    appear 
    name="animate__animated animate__bounce"
    enter-active-class='animate__swing'
    leave-active-class='animate__backOutUp'>
    <h1 v-show="isShow" class="bg-pink" key="1">已显示</h1>
    <h1 v-show="isShow" class="bg-pink" key="2">已显示</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'TestName',
    data() {
    return {
      isShow:true
    }
  },
  methods:{
    
  }
}
</script>

<style>
.bg-pink {
    background: rgb(234, 194, 194);
}



</style>