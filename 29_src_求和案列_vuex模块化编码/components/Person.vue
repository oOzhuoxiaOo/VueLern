<template>
  <!-- 翻译category:分类 -->
  <div>
    <h1>Person中的Sum为: {{sum}}</h1>
    <input type="text" v-model="per">
    <button @click='addPerson'>点击添加该人</button>
    <button @click='addBai'>点击添加姓白的人</button>
    <button @click='addRandomPerson'>添加一个人，名字随机</button>
    <!-- 展示数据 -->
    <ul>
      <li v-for="item in personList" :key="item.id">{{item.name}}</li>
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
      return this.$store.state.countAbout.sum
    },
    personList(){
      return this.$store.state.personAbout.personList
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
      this.$store.commit('personAbout/ADD_PERSON',{id:nanoid(),name:this.per})
    },
    addBai(){
      this.$store.dispatch('personAbout/add_person_wang',{id:nanoid(),name:this.per})
    },
    addRandomPerson(){
      this.$store.dispatch('personAbout/addPersonServer')
    }

  },
};
</script>

<style scoped>
</style>