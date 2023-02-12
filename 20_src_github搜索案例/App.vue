<template>
    <div class="container">
      <!-- TODO: -->
      <Search/>
      <List/>
    </div>
</template>

<script>
// 引入子组件
import Search from './components/Search'
import List from './components/List'
export default {
  name: "App",
  components:{Search,List}
};
</script>

<style>

</style>