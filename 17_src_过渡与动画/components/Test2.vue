<template>
  <div>
    <button @click="isShow = !isShow">点击显示隐藏h1</button>
    <!-- 多个元素时，需要使用group,并且内元素要有key值 -->
    <transition-group name="hello" appear>
    <h1 v-show="isShow" class="bg-pink" key="1">已显示</h1>
    <h1 v-show="isShow" class="bg-pink" key="2">已显示</h1>
    </transition-group>
  </div>
</template>

<script>
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

/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
  }
  .hello-enter-active,.hello-leave-active {
    transition: 0.5s linear;
  }
  /* 进入的终点，离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}


</style>