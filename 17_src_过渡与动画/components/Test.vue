<template>
  <div>
    <button @click="isShow = !isShow">点击显示隐藏h1</button>
    <transition name="hello" appear>
    <h1 v-show="isShow" class="bg-pink">已显示</h1>
    </transition>
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

.hello-enter-active {
    animation: atxiana 1s;
}
.hello-leave-active {
    animation: atxiana 1s reverse;
}

@keyframes atxiana {
    from {
        transform: translateX(-100%);
    } to {
        transform: translateX(0px);
    }
}
</style>