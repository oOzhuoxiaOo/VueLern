<template>
  <div class="container">
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li  v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

  </div>
</template>

<script>
// 引入子组件
import Category from "./components/Category";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { Category },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>