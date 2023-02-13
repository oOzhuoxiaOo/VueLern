<template>
  <!-- 翻译category:分类 -->
  <div>
    <h1>Person中的Sum为: {{sum}}</h1>
    <input type="text" v-model="per">
    <button @click='addPerson'>点击添加该人</button>
    <!-- 展示数据 -->
    <ul>
      <li v-for="item in $store.state.personList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "PersonName",
  data() {
    return {
      per:""
    };
  },
  computed: {
    // 直接使用计算属性展现store中state中数据
    /* xuexiao() {
      return this.$store.state.school;
    },
    xuesheng() {
      return this.$store.state.student;
    }, */
    sum(){
      return this.$store.state.sum
    }
 

  },
  mounted() {

  },
  methods: {
    // 程序员亲自写法
    /* // 加法
    increment() {
      // this.sum += this.n
      this.$store.commit("JIA", this.n);
    },
    // 减法
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */
    addPerson(){
      this.$store.commit('ADD_PERSON',{id:nanoid(),name:this.per})
    }

  },
};
</script>

<style scoped>
</style>