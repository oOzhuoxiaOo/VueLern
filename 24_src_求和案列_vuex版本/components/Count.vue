<template>
  <!-- 翻译category:分类 -->
  <div>
    <h1>当前求和为: {{$store.state.sum}}</h1>
    <select v-model="n">
        <option :value="item" v-for="(item,index) in countData" :key='index'>{{item}}</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数+</button>
    <button @click="incrementWait">等一等再+</button>
  </div>
</template>

<script>
export default {
    name:'CountName',
    data() {
        return {
            countData:[1,2,3,4,5,6,7,8,9,10],//数字乘区
            n:1 //被选中的数字乘区
        }
    },
    methods: {
        // 加法
        increment(){
            // this.sum += this.n
            this.$store.commit('JIA',this.n)
        },
        // 减法
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        // 奇数加
        incrementOdd(){
            // 如果为奇数 + this.n
            this.$store.dispatch('jiaOdd',this.n)
        },
        // 等等加
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        }
    },
};
</script>

<style scoped>

</style>