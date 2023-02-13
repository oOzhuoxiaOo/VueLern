<template>
  <div class="container">
    <Count></Count>
    <person/>

  </div>
</template>

<script>
// 引入子组件
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { Count , Person},
  mounted() {
    console.log(this)
  },
};
</script>

<style>

</style>