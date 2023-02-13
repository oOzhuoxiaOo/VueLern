<template>
  <div class="container">
    <Count></Count>

  </div>
</template>

<script>
// 引入子组件
import Count from "./components/Count";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { Count },
  mounted() {
    console.log(this)
  },
};
</script>

<style>

</style>