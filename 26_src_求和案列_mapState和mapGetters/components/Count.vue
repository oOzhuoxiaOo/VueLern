<template>
  <!-- 翻译category:分类 -->
  <div>
    <h1>当前求和为: {{ $store.state.sum }}</h1>
    <h1>当前求和放大十倍为: {{ $store.getters.bigSum }}</h1>
    <h1>对象写法:当前求和放大十倍为: {{daSum}}</h1>
    <h1>数组写法:当前求和放大十倍为: {{bigSum}}</h1>
    <h1>学校为:{{ xuexiao }},学生为{{ xuesheng }}</h1>
    <h1>数组写法,学校为:{{ school }},学生为{{ student }}</h1>
    <select v-model="n">
      <option :value="item" v-for="(item, index) in countData" :key="index">
        {{ item }}
      </option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数+</button>
    <button @click="incrementWait">等一等再+</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "CountName",
  data() {
    return {
      countData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //数字乘区
      n: 1, //被选中的数字乘区
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
    // 🚩mapState
    // ⭐借助mapState生成计算属性，从state中读取数据。(对象写法)
    // 引入mapState,通过扩展运算符把mapState生成的对象展开，内部为key:value(value为函数)
    ...mapState({xuexiao: "school", xuesheng:'student'}),
    // ⭐借助mapState生成计算属性，从state中读取数据。(数组写法)
    // 注意：此种写法必须计算属性的名和state数据的名一致才可以(对象写法可以起别名1)
    ...mapState(['school','student']),

    // 🚩mapGetters (和mapState类似)
    // ⭐
    ...mapGetters({'daSum':'bigSum'}),
    // ⭐
    ...mapGetters(['bigSum'])

  },
  mounted() {
    /* const m = mapState({
      xuexiao: "school",
      xuesheng:'student'
    })
    console.log(m) */
  },
  methods: {
    // 加法
    increment() {
      // this.sum += this.n
      this.$store.commit("JIA", this.n);
    },
    // 减法
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    // 奇数加
    incrementOdd() {
      // 如果为奇数 + this.n
      this.$store.dispatch("jiaOdd", this.n);
    },
    // 等等加
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style scoped>
</style>